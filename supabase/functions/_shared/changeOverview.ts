import { formatCurrency } from "./utilities.ts";

// A simplified model for comparison
interface Product {
    id: number;
    title: string;
    price: number;
    currency_code: string;
}

// Function to extract a flat list of all products from an order data blob
const getProductsFromOrder = (orderData: any): Product[] => {
    if (!orderData || !Array.isArray(orderData.tickets)) {
        return [];
    }
    const allProducts: Product[] = [];
    for (const ticket of orderData.tickets) {
        if (Array.isArray(ticket.products)) {
            for (const p of ticket.products) {
                allProducts.push({
                    id: p.id,
                    title: p.title,
                    price: Number(p.price) || 0,
                    currency_code: p.currency_code || 'CZK'
                });
            }
        }
    }
    return allProducts;
};

export function generateChangeOverview(currentOrderData: any, referenceOrderData: any, lang: 'cs' | 'en' = 'cs'): string {
    if (!referenceOrderData) {
        return ''; // No reference to compare against, so no overview.
    }

    // Get the complete, original lists of products
    const allCurrentProducts = getProductsFromOrder(currentOrderData);
    const allReferenceProducts = getProductsFromOrder(referenceOrderData);

    // --- MODIFICATION START: New matching logic to handle duplicate IDs ---

    const added: Product[] = [];
    const removed: Product[] = [];
    const changed: { from: Product, to: Product }[] = [];

    // Create mutable copies to track matches
    const currentProdsMutable = [...allCurrentProducts];
    const referenceProdsMutable = [...allReferenceProducts];

    // First pass: Find and remove identical products (same id and price)
    for (let i = currentProdsMutable.length - 1; i >= 0; i--) {
        const currentP = currentProdsMutable[i];
        const matchIndex = referenceProdsMutable.findIndex(refP => refP.id === currentP.id && refP.price === currentP.price);

        if (matchIndex > -1) {
            // Found a perfect match. Remove it from both lists so it's not processed further.
            currentProdsMutable.splice(i, 1);
            referenceProdsMutable.splice(matchIndex, 1);
        }
    }

    // Second pass: From the remaining items, find products with the same ID but different prices
    for (let i = currentProdsMutable.length - 1; i >= 0; i--) {
        const currentP = currentProdsMutable[i];
        const matchIndex = referenceProdsMutable.findIndex(refP => refP.id === currentP.id);

        if (matchIndex > -1) {
            // Found an item with the same ID. Since identicals are already removed, this must be a price change.
            changed.push({ from: referenceProdsMutable[matchIndex], to: currentP });
            currentProdsMutable.splice(i, 1);
            referenceProdsMutable.splice(matchIndex, 1);
        }
    }

    // Final pass: Any remaining items are purely added or removed
    added.push(...currentProdsMutable);
    removed.push(...referenceProdsMutable);

    // --- MODIFICATION END ---


    if (added.length === 0 && removed.length === 0 && changed.length === 0) {
        return ''; // No changes found, return empty string
    }

    // --- Calculate Totals (uses the original, non-mutated lists for accuracy) ---
    const referenceTotal = allReferenceProducts.reduce((sum, p) => sum + p.price, 0);
    const currentTotal = allCurrentProducts.reduce((sum, p) => sum + p.price, 0);
    const currency = allCurrentProducts[0]?.currency_code || allReferenceProducts[0]?.currency_code || 'CZK';


    // --- Build the HTML string (this part of the logic remains unchanged) ---
    const tr = {
        cs: { title: "Změny v objednávce", added: "Přidané položky", removed: "Odebrané položky", changed: "Změna ceny položek", totalPriceChange: "Celková cena" },
        en: { title: "Changes in Your Order", added: "Added Items", removed: "Removed Items", changed: "Price Changes", totalPriceChange: "Total Price" }
    }[lang];

    const renderSection = (title: string, contentRows: string) => {
        if (!contentRows) return '';
        return `<div style="margin-bottom: 20px;">
                    <p style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: #4b5563;">${title}</p>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tbody>
                            ${contentRows}
                        </tbody>
                    </table>
                </div>`;
    }

    const addedHtml = added.map(p =>`
        <tr>
            <td style="padding: 4px 8px 4px 0; color: #166534;">+ ${p.title}</td>
            <td style="padding: 4px 0 4px 8px; color: #166534; text-align: right; white-space: nowrap; font-weight: 500;">${formatCurrency(p.price, p.currency_code)}</td>
        </tr>`
    ).join('');

    const removedHtml = removed.map(p => `
        <tr>
            <td style="padding: 4px 8px 4px 0; color: #991b1b;">- ${p.title}</td>
            <td style="padding: 4px 0 4px 8px; color: #991b1b; text-align: right; white-space: nowrap; font-weight: 500;">${formatCurrency(p.price, p.currency_code)}</td>
        </tr>`
    ).join('');

    const changedHtml = changed.map(c => `
        <tr>
            <td style="padding: 4px 8px 4px 0;">${c.to.title}</td>
            <td style="padding: 4px 0 4px 8px; text-align: right; white-space: nowrap;">
                <span style="color:#6b7280; font-size: 90%;">${formatCurrency(c.from.price, c.from.currency_code)}</span>
                <span style="color: #d97706; font-weight: bold; margin: 0 4px;">→</span>
                <strong>${formatCurrency(c.to.price, c.to.currency_code)}</strong>
            </td>
        </tr>`
    ).join('');

    const totalChangeHtml = referenceTotal !== currentTotal ? `
        <div style="text-align: right; padding-top: 16px; margin-top: 8px; border-top: 2px solid #333; font-weight: bold;">
            <span style="font-size: 18px;">${tr.totalPriceChange}:&nbsp;</span>
            <span style="white-space: nowrap;">
                <span style="color:#6b7280; font-weight: normal; font-size: 90%;">${formatCurrency(referenceTotal, currency)}</span>
                <span style="color: #d97706; margin: 0 4px;">→</span>
                <span>${formatCurrency(currentTotal, currency)}</span>
            </span>
        </div>` : '';

    // --- Final Assembly ---
    let html = `<div style="margin: 20px auto; padding: 24px; font-family: sans-serif; color: #333; background-color: #f9fafb; border: 1px solid #e2e8f0; border-radius: 8px;">`;
    html += `<p style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;">${tr.title}</p>`;

    html += renderSection(tr.added, addedHtml);
    html += renderSection(tr.removed, removedHtml);
    html += renderSection(tr.changed, changedHtml);
    html += totalChangeHtml;

    html += `</div>`;

    return html;
}