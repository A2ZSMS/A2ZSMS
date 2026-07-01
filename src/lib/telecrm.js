export async function sendToTeleCRM(name, phone, email, source) {
  await fetch('/api/telecrm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, email, source }),
  });
}
