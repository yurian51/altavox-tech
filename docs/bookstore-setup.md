# Altavox Bookstore setup

The bookstore uses the existing PostgreSQL connection configured by the application.

## Database

Apply `db/migrations/20261030_bookstore.sql` to the same PostgreSQL database used by Altavox Tech. The migration creates the product catalogue, orders, order items, payment records, customer library and download audit tables.

Do not publish the bookstore until the migration has completed successfully.

## Administrator access

Set `BOOKSTORE_ADMIN_EMAILS` in the production environment to a comma-separated list of existing, authenticated Altavox user email addresses. Only those accounts can create book records through the management API. New records are saved as drafts.

## Current operational boundary

- Public catalogue reads only published records.
- Order creation requires a signed-in customer and calculates prices from database records.
- Orders remain pending until a real payment provider confirms settlement.
- Digital library access is based on rows in `book_library`; the application does not expose private file keys to browsers.
- Printed stock and delivery are recorded, but no courier integration is implied.

## Required before live selling

1. Configure and test a real payment provider and its signed callback/webhook.
2. On verified payment only, update payment and order status and create the matching digital library grants.
3. Configure private object storage for PDF/EPUB files and issue short-lived, authenticated download links.
4. Configure actual delivery rates, fulfilment workflow and customer notifications.
5. Test database migration, order rollback, duplicate payment callbacks, stock concurrency and access control.

No payment is treated as successful based on a browser redirect or customer-submitted reference alone.
