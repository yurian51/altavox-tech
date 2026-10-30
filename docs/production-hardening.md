# Altavox production hardening

## Changes in this branch

- Removed the in-memory mock database fallback. Writes cannot silently succeed without persistent PostgreSQL.
- Production startup fails fast when BETTER_AUTH_SECRET is missing.
- Session cookies use HttpOnly, SameSite=Lax and Secure in production.
- Centralized the administrator email allowlist. Missing BOOKSTORE_ADMIN_EMAILS grants no admin access.
- Protected the enterprise inquiries dashboard with the same administrator authorization as bookstore management.
- Added .env.example with safe, non-working values.

## Required deployment configuration

1. Provision PostgreSQL and set DATABASE_URL using a TLS-enabled connection string.
2. Generate a unique BETTER_AUTH_SECRET (at least 32 random bytes) and store it only in hosting-provider secrets.
3. Set BETTER_AUTH_URL to the canonical HTTPS origin.
4. Set BOOKSTORE_ADMIN_EMAILS to verified staff accounts; avoid shared administrator logins.
5. Apply all SQL migrations in order and verify schema compatibility.
6. Run production build, type checks and smoke tests after configuration.

## Bookstore launch blockers requiring external services

- Private object storage and authenticated, expiring PDF/EPUB download links.
- Merchant-approved payment integrations for each selected mobile-money/bank channel.
- Signed webhook verification, idempotent event processing, reconciliation and refund handling.
- Checkout UI, persistent customer cart, order history, receipts and notifications.
- Configure BOOKSTORE_DEFAULT_DELIVERY_FEE_TZS before accepting printed orders, then implement fulfilment workflow and stock reconciliation. The order API now ignores client-supplied delivery fees and requires this server-side setting for printed items.

Never mark an order paid based on a browser redirect, screenshot or customer-supplied reference. Only verified server-to-server provider notifications or provider API status checks may grant paid status or digital library access.

## Validation

Repository edits do not execute package installation, type-checking, production build, browser tests or database migrations. Those checks must pass in CI or the deployment environment before merging.
