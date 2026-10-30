# Altavox production hardening

## Changes in this branch

- Removed the in-memory mock database fallback. Application writes must not appear successful when PostgreSQL is unavailable.
- Production startup now fails fast when `BETTER_AUTH_SECRET` is missing.
- Session cookies use HttpOnly, SameSite=Lax and production-only Secure attributes.
- Added one centralized administrator allowlist helper. Missing `BOOKSTORE_ADMIN_EMAILS` grants no administrator access.
- Protected the enterprise inquiries admin page with the same administrator check used by the bookstore management API.
- Added `.env.example` with variable names and safe, non-working example values only.

## Required deployment configuration

1. Provision PostgreSQL and set `DATABASE_URL` using the provider's TLS-enabled connection string.
2. Generate a unique `BETTER_AUTH_SECRET` (at least 32 random bytes) and store it only in the hosting provider's encrypted environment settings.
3. Set `BETTER_AUTH_URL` to the canonical HTTPS origin.
4. Set `BOOKSTORE_ADMIN_EMAILS` to verified staff accounts. Do not use a shared administrator login.
5. Apply every SQL migration in order and verify the schema against the application.
6. Run the production build and smoke tests after configuration.

## Bookstore launch blockers still requiring external services

- Private object storage and authenticated, expiring download URLs for PDF/EPUB assets.
- A merchant-approved payment integration for each selected mobile-money/bank channel.
- Signed webhook verification, idempotent payment event processing, reconciliation and refund handling.
- An order checkout UI, customer cart persistence, order history, receipts and customer notifications.
- Physical-book delivery pricing, fulfilment workflow and stock reconciliation.

Do not mark an order paid based on a browser redirect, a screenshot or a customer-supplied transaction reference. Only a verified server-to-server provider notification or a provider API status check may grant paid status or digital library access.

## Validation

The GitHub connector can update repository files but does not run the project's package installation, type-check, production build, browser tests or database migrations. Those checks must pass in CI or the deployment environment before merging this branch.
