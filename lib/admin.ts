/**
 * Centralized administrator allowlist.
 * An empty or missing allowlist intentionally grants no administrator access.
 */
const adminEmails = new Set(
  (process.env.BOOKSTORE_ADMIN_EMAILS ?? '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
)

export function isAltavoxAdmin(email: string | null | undefined): boolean {
  return Boolean(email && adminEmails.has(email.trim().toLowerCase()))
}
