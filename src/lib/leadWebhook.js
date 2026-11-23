// Every website lead form POSTs its lead (JSON) here, alongside TeleCRM and Web3Forms.
// This replaced the Make.com webhook (hook.eu1.make.com/hwd03miu…) on 2026-11-23,
// after the Make organisation ran out of operations and paused.
// The n8n workflow must be active, with its Webhook node set to POST and CORS allowed
// for https://www.a2zsms.in.
export const LEAD_WEBHOOK_URL =
  "https://n8n.srv921255.hstgr.cloud/webhook/c680422e-de8e-471a-81e9-1305a17f702e";
