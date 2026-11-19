// Cleans what a visitor types, pastes or autofills into an Indian mobile field.
//
// The old fields kept only the first 10 digits, so "+91 98450 12345" became
// "9198450123", a wrong number that still passed validation. This helper:
//   - drops spaces, dashes, brackets and "+"
//   - drops leading zeros ("09845012345" -> "9845012345")
//   - drops the 91 country code when 12 digits remain ("919845012345" -> "9845012345")
// It keeps up to 12 digits so the "91" can be removed once the full number is in.
// A 10-digit number starting with 91 (e.g. 9198765432) is left as it is.
// Validation (^[6-9]\d{9}$) still decides whether the final value is accepted.
export function normalizeIndianMobile(value) {
  let d = String(value || "").replace(/\D/g, "").replace(/^0+/, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  return d.slice(0, 12);
}
