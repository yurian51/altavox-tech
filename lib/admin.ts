/**
 * Centralized administrator allowlist.
 *
 * Configure BOOKSTORE_ADMIN_EMAILS as a comma-separated list of trusted,
 * already-authenticated staff email addresses in the deployment environment.
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
