<?php
/**
 * A2ZSMS lead proxy — receives form submissions from the frontend and
 * fans out to TeleCRM, AiSensy, Make.com, and Web3Forms server-side.
 *
 * The secret keys never enter the browser bundle: they're read from
 * /public_html/api/.env on the Hostinger server (blocked from the web
 * by the sibling .htaccess).
 *
 * Frontend calls this endpoint with a JSON body:
 *   {
 *     "name":    "Full Name",
 *     "email":   "you@example.com"  (optional — placeholder used if empty),
 *     "phone":   "9876543210"       (10-digit Indian mobile),
 *     "company": "Acme"             (optional),
 *     "service": "WhatsApp API"     (optional),
 *     "message": "..."              (optional),
 *     "source":  "contact-page"     (optional — for AiSensy attribution)
 *   }
 * Response is returned immediately; the four external calls run in
 * background so the browser never waits on them.
 */

// ── CORS / method guard ──────────────────────────────────────────────
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ── Load secrets ─────────────────────────────────────────────────────
$envPath = __DIR__ . '/.env';
if (!file_exists($envPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server misconfigured: missing .env']);
    exit;
}
$env = parse_ini_file($envPath);
$TELECRM_TOKEN   = $env['TELECRM_TOKEN']   ?? '';
$TELECRM_API     = $env['TELECRM_API']     ?? '';
$AISENSY_API_KEY = $env['AISENSY_API_KEY'] ?? '';
$AISENSY_URL     = $env['AISENSY_URL']     ?? '';
$AISENSY_CAMPAIGN= $env['AISENSY_CAMPAIGN']?? 'ojiva_lead_welcome';
$MAKE_WEBHOOK    = $env['MAKE_WEBHOOK']    ?? '';
$WEB3FORMS_URL   = $env['WEB3FORMS_URL']   ?? 'https://api.web3forms.com/submit';
$WEB3FORMS_KEY   = $env['WEB3FORMS_KEY']   ?? '';

// ── Parse + validate input ───────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON body']);
    exit;
}

$name    = trim($data['name']    ?? '');
$email   = strtolower(trim($data['email']   ?? ''));
$phone   = preg_replace('/\D/', '', $data['phone'] ?? '');
$company = trim($data['company'] ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');
$source  = trim($data['source']  ?? 'website');

// Phone sanitization: strip 091 / 91 / 0 prefixes, keep last 10 digits
if (strlen($phone) === 13 && strpos($phone, '091') === 0)  $phone = substr($phone, 3);
if (strlen($phone) === 12 && strpos($phone, '91')  === 0)  $phone = substr($phone, 2);
if (strlen($phone) === 11 && strpos($phone, '0')   === 0)  $phone = substr($phone, 1);

if (strlen($phone) !== 10 || !preg_match('/^[6-9]/', $phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid Indian mobile number']);
    exit;
}

$fullName  = $name !== '' ? $name : 'Unknown';
$firstName = explode(' ', $fullName)[0];
// Placeholder email if empty — TeleCRM workspaces that require email won't reject
$cleanEmail = $email !== '' ? $email : $phone . '@lead.a2zsms.in';

// ── Release the browser early, then fan out in background ────────────
echo json_encode(['success' => true, 'accepted' => true]);

if (function_exists('fastcgi_finish_request')) {
    fastcgi_finish_request();
} elseif (function_exists('litespeed_finish_request')) {
    litespeed_finish_request();
} else {
    // Fallback: instruct client to close, keep PHP running
    ignore_user_abort(true);
    set_time_limit(30);
    header('Connection: close');
    header('Content-Length: ' . ob_get_length());
    ob_end_flush();
    flush();
}

// ── Build the four requests ──────────────────────────────────────────
$telecrmBody = json_encode([
    'fields' => [
        'name'  => $fullName,
        'phone' => $phone,
        'email' => $cleanEmail,
    ],
]);

$aisensyBody = json_encode([
    'apiKey'              => $AISENSY_API_KEY,
    'campaignName'        => $AISENSY_CAMPAIGN,
    'destination'         => '91' . $phone,
    'userName'            => $fullName,
    'templateParams'      => [$firstName],
    'source'              => $source,
    'media'               => new stdClass(),
    'buttons'             => [],
    'carouselCards'       => [],
    'location'            => new stdClass(),
    'attributes'          => new stdClass(),
    'paramsFallbackValue' => ['FirstName' => 'user'],
]);

$commonPayload = [
    'name'      => $fullName,
    'email'     => $cleanEmail,
    'phone'     => $phone,
    'company'   => $company,
    'service'   => $service,
    'message'   => $message,
    'source'    => $source,
    'timestamp' => gmdate('c'),
];

$makeBody = json_encode($commonPayload);
$web3Body = json_encode(array_merge($commonPayload, [
    'access_key' => $WEB3FORMS_KEY,
    'subject'    => 'New Lead - ' . $fullName . ' [' . $source . ']',
]));

// ── curl_multi fanout (parallel) ─────────────────────────────────────
$targets = [];

if ($TELECRM_API !== '' && $TELECRM_TOKEN !== '') {
    $ch = curl_init($TELECRM_API);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $telecrmBody,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $TELECRM_TOKEN,
        ],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_CONNECTTIMEOUT => 5,
    ]);
    $targets['telecrm'] = $ch;
}

if ($AISENSY_URL !== '' && $AISENSY_API_KEY !== '') {
    $ch = curl_init($AISENSY_URL);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $aisensyBody,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_CONNECTTIMEOUT => 5,
    ]);
    $targets['aisensy'] = $ch;
}

if ($MAKE_WEBHOOK !== '') {
    $ch = curl_init($MAKE_WEBHOOK);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $makeBody,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_CONNECTTIMEOUT => 5,
    ]);
    $targets['make'] = $ch;
}

if ($WEB3FORMS_URL !== '' && $WEB3FORMS_KEY !== '') {
    $ch = curl_init($WEB3FORMS_URL);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $web3Body,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_CONNECTTIMEOUT => 5,
    ]);
    $targets['web3'] = $ch;
}

if (!empty($targets)) {
    $mh = curl_multi_init();
    foreach ($targets as $ch) curl_multi_add_handle($mh, $ch);

    $active = null;
    do {
        curl_multi_exec($mh, $active);
        if ($active) curl_multi_select($mh, 1.0);
    } while ($active > 0);

    // Optional: log responses to /public_html/api/lead.log for debugging
    // Comment out the block below in production if not needed.
    $log = [];
    foreach ($targets as $name => $ch) {
        $log[] = sprintf(
            '[%s] %s HTTP %d — %s',
            gmdate('c'),
            $name,
            curl_getinfo($ch, CURLINFO_HTTP_CODE),
            substr(curl_multi_getcontent($ch), 0, 200)
        );
        curl_multi_remove_handle($mh, $ch);
        curl_close($ch);
    }
    curl_multi_close($mh);
    @file_put_contents(__DIR__ . '/lead.log', implode("\n", $log) . "\n", FILE_APPEND | LOCK_EX);
}
