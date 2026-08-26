import { NextResponse } from 'next/server';

const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';

function cleanPhone(raw) {
  let p = String(raw || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  return p.length === 10 && /^[6-9]/.test(p) ? p : null;
}

export async function POST(request) {
  try {
    const { name, phone, email, source } = await request.json();

    const mobile = cleanPhone(phone);
    if (!mobile) {
      return NextResponse.json({ error: 'Invalid phone' }, { status: 400 });
    }

    const fields = {
      name:  String(name  || '').trim().slice(0, 100) || 'Unknown',
      phone: mobile,
      email: String(email || '').trim().toLowerCase(),
    };

    if (source) {
      fields.remark = `Source: ${source}`;
    }

    const res = await fetch(TELECRM_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TELECRM_TOKEN}`,
      },
      body: JSON.stringify({ fields }),
    });

    const text = await res.text();
    console.log('[TeleCRM]', res.status, text, '| source:', source, '| phone:', mobile);
    return NextResponse.json({ ok: res.ok, status: res.status, body: text });
  } catch (err) {
    console.error('[TeleCRM API Route]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
