/**
 * Formats a price with the given currency code.
 * @param {number} price - The price value.
 * @param {string} currencyCode - The currency code (e.g., 'CZK', 'USD').
 * @param {number} [decimals=2] - Number of decimal places.
 * @param {string} [locale='cs-CZ'] - The locale to use for formatting.
 * @returns {string} The formatted price string.
 */
export function formatPrice(price, currencyCode, decimals = 2, locale = 'cs-CZ') {
    if (price === null || price === undefined) return '';
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode || 'CZK',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(price);
    } catch (e) {
        console.error("Error formatting price:", e);
        return `${price} ${currencyCode || ''}`;
    }
}
