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
        cs: { title: "Změny v objednávce", added: "Přidané položky", removed: "Odebrané položky", changed: "Změna ceny položek", totalPriceChange: "Celková cena" },
        en: { title: "Changes in Your Order", added: "Added Items", removed: "Removed Items", changed: "Price Changes", totalPriceChange: "Total Price" }
    }[lang];

    const renderSection = (title: string, content: string) => {
        if (!content) return '';
        return `<div style="margin-bottom: 16px;">
                    <p style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: #4b5563;">${title}</p>
                    ${content}
                </div>`;
    }

    const addedHtml = added.map(p =>
        `<div style="padding-left: 8px; color: #166534;">+ ${p.title} (${formatCurrency(p.price, p.currency_code)})</div>`
    ).join('');

    const removedHtml = removed.map(p =>
        `<div style="padding-left: 8px; color: #991b1b;">- ${p.title} (${formatCurrency(p.price, p.currency_code)})</div>`
    ).join('');

    const changedHtml = changed.map(c => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding-left: 8px;">
            <span>${c.to.title}</span>
            <span style="white-space: nowrap; padding-left: 16px;">
                <s style="color:#6b7280; font-size: 90%;">${formatCurrency(c.from.price, c.from.currency_code)}</s>
                <span style="color: #d97706; font-weight: bold; margin: 0 4px;">→</span>
                <strong>${formatCurrency(c.to.price, c.to.currency_code)}</strong>
            </span>
        </div>`
    ).join('');

    const totalChangeHtml = referenceTotal !== currentTotal ? `
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #fde68a; font-weight: bold;">
            <span>${tr.totalPriceChange}:&nbsp;</span>
            <span style="white-space: nowrap;">
                <s style="color:#6b7280; font-weight: normal; font-size: 90%;">${formatCurrency(referenceTotal, currency)}</s>
                <span style="color: #d97706; margin: 0 4px;">→</span>
                <span>${formatCurrency(currentTotal, currency)}</span>
            </span>
        </div>` : '';

    let html = `<div style="margin: 20px auto; padding: 24px; font-family: sans-serif; color: #1f2937; background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px;">`;
    html += `<p style="font-size: 20px; font-weight: bold; margin: 0 0 20px 0;">${tr.title}</p>`;

    html += renderSection(tr.added, addedHtml);
    html += renderSection(tr.removed, removedHtml);
    html += renderSection(tr.changed, changedHtml);
    html += totalChangeHtml;

    html += `</div>`;

    return html;
}
