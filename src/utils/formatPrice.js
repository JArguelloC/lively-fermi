/**
 * Formats a price in cents to a localized currency string.
 * @param cents - The price in cents (e.g., 1000 for $10.00)
 * @param currency - The ISO 4217 currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns The formatted price string
 */
export function formatPrice(cents, currency = 'USD', locale = 'en-US') {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    });
    return formatter.format(cents / 100);
}
