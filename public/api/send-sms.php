<?php
// send-sms.php — server-side proxy for Ojiva Nexus SMS API.
// Sits under Hostinger's public_html so browser calls to /send-sms.php
// stay same-origin (no CORS issue) and the X-API-Key never reaches the
// client. Fed by the fireOjivaSMS() helper in the 5 form components.

$OJIVA_URL         = 'https://nexus.ojiva.ai/sms/api/send-campaign';
$OJIVA_API_KEY     = 'PmmVgxVrl6KX5FKXg_3EbjuHH6nt-vh-qRv54KSM6DE';
$OJIVA_TEMPLATE_ID = '1777178894777400694';
$OJIVA_TEMPLATE    = "Hi {#alp#} ,\n\nThank you for your enquiry with Ojiva AI.\n\nWe provide Bulk SMS, WhatsApp API, RCS, Voice Calls & AI Chatbot solutions. Our team will contact you within 30 minutes to understand your requirements and assist you.";
$ALLOWED_ORIGINS   = ['https://a2zsms.in', 'https://www.a2zsms.in', 'http://localhost:3000'];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); echo json_encode(['error' => 'Method not allowed']); exit; }

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$name  = isset($input['name'])  ? trim((string)$input['name'])                     : '';
$phone = isset($input['phone']) ? preg_replace('/\D/', '', (string)$input['phone']) : '';

if (strlen($phone) === 13 && strpos($phone, '091') === 0) $phone = substr($phone, 3);
if (strlen($phone) === 12 && strpos($phone, '91')  === 0) $phone = substr($phone, 2);
if (strlen($phone) === 11 && strpos($phone, '0')   === 0) $phone = substr($phone, 1);
if (strlen($phone) !== 10 || !preg_match('/^[6-9]/', $phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid phone']);
    exit;
}

$firstName = trim(explode(' ', $name)[0]);
if ($firstName === '') $firstName = 'there';
$message = str_replace('{#alp#}', $firstName, $OJIVA_TEMPLATE);

$payload = json_encode([
    'sender_id'   => 'OJIVA',
    'template_id' => $OJIVA_TEMPLATE_ID,
    'priority'    => 0,
    'dcs'         => 0,
    'messages'    => [[
        'mobile'         => '91' . $phone,
        'message'        => $message,
        'transaction_id' => 'TXN-' . round(microtime(true) * 1000),
    ]],
]);

$ch = curl_init($OJIVA_URL);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json', 'X-API-Key: ' . $OJIVA_API_KEY],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 8,
]);
$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
curl_close($ch);

http_response_code($status);
echo $response ?: json_encode(['error' => 'Upstream failed']);
