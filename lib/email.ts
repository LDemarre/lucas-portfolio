// Allowed top-level domains for the contact form email field.
// Generous list of common gTLDs + ccTLDs (including multi-part like com.ar / co.uk).
export const ALLOWED_TLDS = [
  // generic
  "com", "net", "org", "io", "dev", "tech", "ai", "app", "co", "xyz", "info", "biz",
  "me", "online", "site", "store", "cloud", "digital", "studio", "design", "software",
  "solutions", "agency", "pro", "live", "world", "group", "work", "email", "link",
  "page", "blog", "space", "tv", "cc",
  // country
  "ar", "com.ar", "org.ar", "mx", "com.mx", "br", "com.br", "cl", "uy", "com.uy",
  "pe", "com.pe", "co.uk", "uk", "com.co", "ve", "ec", "bo", "py", "us", "ca", "es",
  "de", "fr", "it", "nl", "pt", "ch", "at", "be", "se", "no", "dk", "fi", "pl", "ru",
  "jp", "cn", "in", "au", "com.au", "nz", "za",
];

export function isValidEmail(email: string): boolean {
  const e = (email || "").trim().toLowerCase();
  if (e.length > 254) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return false;
  const domain = e.split("@")[1];
  return ALLOWED_TLDS.some((tld) => domain.endsWith("." + tld));
}
