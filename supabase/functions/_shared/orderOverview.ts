import { formatCurrency } from "./utilities.ts";

export function generateFullOrder(orderData: any, tickets: any[], occasionFeatures: any[], lang: 'cs' | 'en' = 'cs'): string {
    const { name, surname, email, phone, note } = orderData;

    const tr = {
        cs: {
            overviewTitle: "Přehled objednávky",
            name: "Jméno",
            email: "E-mail",
            phone: "Telefon",
            orderNote: "Poznámka k objednávce",
            ticket: "Vstupenka",
            application: "Přihláška",
            itemNote: "Poznámka",
            totalPrice: "Celková cena",
        },
        en: {
            overviewTitle: "Order Overview",
            name: "Name",
            email: "E-mail",
            phone: "Phone",
            orderNote: "Order Note",
            ticket: "Ticket",
            application: "Application",
            itemNote: "Note",
            totalPrice: "Total Price",
        }
    }[lang];

    // --- 1. Personal Info ---
    let personalInfoHtml = '';
    const fullName = [name, surname].filter(Boolean).join(' ');

    if (fullName) {
        personalInfoHtml += `<div style="margin-bottom:4px;">${tr.name}: <strong>${fullName}</strong></div>`;
    }
    if (email) {
        personalInfoHtml += `<div style="margin-bottom:4px;">${tr.email}: <strong>${email}</strong></div>`;
    }
    if (phone) {
        personalInfoHtml += `<div style="margin-bottom:4px;">${tr.phone}: <strong>${phone}</strong></div>`;
    }
    if (note) {
        personalInfoHtml += `<div style="margin-top:8px;">${tr.orderNote}: <div><em>${note}</em></div></div>`;
    }
    if (personalInfoHtml) {
        personalInfoHtml = `<div style="margin-bottom: 24px;">${personalInfoHtml}</div>`;
    }

    // --- 2. Tickets / Applications ---
    let overallTotal = 0;
    const ticketFeature = occasionFeatures?.find(f => f.code === "ticket");
    const itemLabel = ticketFeature?.is_enabled ? tr.ticket : tr.application;
    const currencyCode = tickets?.[0]?.products?.[0]?.currency_code || "CZK";

    const ticketsDetails = tickets.map((ticket) => {
        const productsRows = ticket.products.map((product: any) => {
            const price = Number(product.price || 0);
            overallTotal += price;
            const formattedPrice = formatCurrency(price, product.currency_code || currencyCode);
            // Added vertical-align: top to keep text aligned properly on line breaks
            return `
                <tr>
                    <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; vertical-align: top;">${product.type_title}: ${product.title}</td>
                    <td style="padding: 12px 0; text-align: right; white-space: nowrap; vertical-align: top; padding-left: 16px; border-top: 1px solid #f1f5f9;"><strong>${formattedPrice}</strong></td>
                </tr>`;
        }).join("").replace('border-top: 1px solid #f1f5f9;', 'border-top: none;'); // Removes the line from the very first item

        const ticketNote = ticket.note ? `
            <tr>
                <td colspan="2" style="padding: 8px 0 4px 0; color: #555; font-size: 13px;">
                    <em>${tr.itemNote}: ${ticket.note}</em>
                </td>
            </tr>` : '';

        return `
            <div style="margin-bottom: 24px;">
                <p style="margin:0 0 12px 0;"><strong>${itemLabel} ${ticket.ticket_symbol}</strong></p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tbody>
                        ${productsRows}
                        ${ticketNote}
                    </tbody>
                </table>
            </div>`;
    }).join("");

    // --- 3. Total Price ---
    const formattedOverallTotal = formatCurrency(overallTotal, currencyCode);

    const totalSection = `
        <div style="text-align: right; padding-top: 16px; margin-top: 8px; border-top: 2px solid #333;">
            <span style="font-size: 18px;">${tr.totalPrice}: <strong>${formattedOverallTotal}</strong></span>
        </div>`;

    // --- 4. Final Assembly ---
    // The whole component is wrapped in a single, clean "card"
    return `
        <div style="margin: 20px auto; padding: 24px; font-family: sans-serif; color: #333; background-color: #f9fafb; border: 1px solid #e2e8f0; border-radius: 8px;">
            <p style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;">${tr.overviewTitle}</p>
            ${personalInfoHtml}
            ${ticketsDetails}
            ${totalSection}
        </div>`;
}
