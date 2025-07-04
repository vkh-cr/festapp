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

    const currentProducts = getProductsFromOrder(currentOrderData);
    const referenceProducts = getProductsFromOrder(referenceOrderData);

    // Using maps for efficient lookup
    const currentProductMap = new Map(currentProducts.map(p => [p.id, p]));
    const referenceProductMap = new Map(referenceProducts.map(p => [p.id, p]));

    const added: Product[] = [];
    const removed: Product[] = [];
    const changed: { from: Product, to: Product }[] = [];

    // Find added and changed products
    for (const [id, currentP] of currentProductMap.entries()) {
        const refP = referenceProductMap.get(id);
        if (!refP) {
            added.push(currentP);
        } else if (currentP.price !== refP.price) {
            changed.push({ from: refP, to: currentP });
        }
    }

    // Find removed products
    for (const [id, refP] of referenceProductMap.entries()) {
        if (!currentProductMap.has(id)) {
            removed.push(refP);
        }
    }

    if (added.length === 0 && removed.length === 0 && changed.length === 0) {
        return ''; // No changes found, return empty string
    }

    // --- Calculate Totals ---
    const referenceTotal = referenceProducts.reduce((sum, p) => sum + p.price, 0);
    const currentTotal = currentProducts.reduce((sum, p) => sum + p.price, 0);
    const currency = currentProducts[0]?.currency_code || referenceProducts[0]?.currency_code || 'CZK';


    // Now, build the HTML string
    const tr = {
        cs: { title: "Změny v objednávce", added: "Přidané položky", removed: "Odebrané položky", changed: "Změna ceny", totalPriceChange: "Celková cena" },
        en: { title: "Changes in Your Order", added: "Added Items", removed: "Removed Items", changed: "Price Changes", totalPriceChange: "Total Price" }
    }[lang];

    let html = `<div style="margin: 20px auto; padding: 16px; font-family: sans-serif; color: #333; background-color: #fefce8; border: 1px solid #fde047; border-radius: 8px;">`;
    html += `<p style="font-size: 18px; font-weight: bold; margin: 0 0 16px 0;">${tr.title}</p>`;

    const renderList = (title: string, items: string[]) => {
        if (items.length === 0) return '';
        return `<p style="margin: 12px 0 4px 0; font-weight: 600;">${title}:</p><ul style="margin: 0; padding-left: 20px;">${items.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}</ul>`;
    }

    const addedItems = added.map(p => `${p.title} (${formatCurrency(p.price, p.currency_code)})`);
    html += renderList(tr.added, addedItems);

    const removedItems = removed.map(p => `<s style="color:#777">${p.title} (${formatCurrency(p.price, p.currency_code)})</s>`);
    html += renderList(tr.removed, removedItems);

    const changedItems = changed.map(c => `${c.to.title}: <s style="color:#777">${formatCurrency(c.from.price, c.from.currency_code)}</s> → <strong>${formatCurrency(c.to.price, c.to.currency_code)}</strong>`);
    html += renderList(tr.changed, changedItems);

    // --- Add Total Price Change Overview ---
    if (referenceTotal !== currentTotal) {
        html += `<p style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed #facc15; font-weight: bold;">
                    ${tr.totalPriceChange}:
                    <s style="color:#777">${formatCurrency(referenceTotal, currency)}</s> →
                    <strong>${formatCurrency(currentTotal, currency)}</strong>
                 </p>`;
    }

    html += `</div>`;

    return html;
}
