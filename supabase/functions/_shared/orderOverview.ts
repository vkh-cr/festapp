import { formatCurrency } from "./utilities.ts";

export function generateFullOrder(orderData: any, tickets: any[], occasionFeatures: any[]): string {
  const { name, surname, email, phone, note } = orderData;

  // Build personal info section
  let personalInfo = "";
  if (name) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Jméno: ${name}</div>`;
  }
  if (surname) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Příjmení: ${surname}</div>`;
  }
  if (email) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">E-mail: ${email}</div>`;
  }
  if (phone) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Telefon: ${phone}</div>`;
  }
  if (note) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Poznámka: ${note}</div>`;
  }

  // Start the order container - using table-based layout for better email compatibility
  const orderHeader =
    `<table cellspacing="0" cellpadding="0" border="0" style="width:100%; max-width:600px; margin:20px auto; border-collapse: separate; border-spacing: 0;">
      <tr>
        <td style="padding:20px; border:2px solid #122640; border-radius:10px;">
          <table cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
            <tr>
              <td align="center" style="padding-bottom:15px;">
                <strong>Rekapitulace Vaší objednávky:</strong>
              </td>
            </tr>
            <tr>
              <td>
                ${personalInfo}
              </td>
            </tr>`;

  let overallTotal = 0;
  const ticketFeature = occasionFeatures?.find(f => f.code === "ticket");
  const itemLabel = ticketFeature?.is_enabled ? "Vstupenka" : "Přihláška";

  const ticketsDetails = tickets.map((ticket) => {
    const ticketSymbol = ticket.ticket_symbol;

    const productsRows = ticket.products
      .map((product: any) => {
        const price = Number(product.price || 0);
        overallTotal += price;
        const formattedPrice = formatCurrency(
          price,
          product.currency_code || ticket.products[0].currency_code
        );

        // Product entry using table for better alignment
        return `<tr>
                  <td valign="top" colspan="3" style="padding-top:8px;">
                    <table cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
                      <tr>
                        <td style="padding-left:12px; padding-right:8px; vertical-align:top;">
                          ${product.type_title}: ${product.title}
                        </td>
                        <td width="80" style="text-align:right; white-space:nowrap; vertical-align:bottom; padding-right:12px;">
                          ${formattedPrice}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:0 12px;">
                          <div style="border-bottom:1px dotted #ccc; margin:2px 0 4px 0;"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`;
      })
      .join("");

    return `<tr>
              <td style="padding-top:20px;">
                <table cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="padding-left:12px; padding-bottom:8px;">
                      <strong>${itemLabel} ${ticketSymbol}</strong>
                    </td>
                  </tr>
                  ${productsRows}
                  ${ticket.note ?
                    `<tr>
                      <td style="padding:5px 12px 0;">Poznámka: ${ticket.note}</td>
                    </tr>` :
                    ""}
                </table>
              </td>
            </tr>`;
  }).join("");

  const currencyCode =
    tickets &&
    tickets.length > 0 &&
    tickets[0].products &&
    tickets[0].products.length > 0
      ? tickets[0].products[0].currency_code
      : "";
  const formattedOverallTotal = formatCurrency(overallTotal, currencyCode);

  const totalSection =
    `<tr>
      <td style="padding-top:20px; padding-right:12px; text-align:right;">
        <strong>Celková cena: ${formattedOverallTotal}</strong>
      </td>
    </tr>`;

  const orderFooter =
    `      </table>
        </td>
      </tr>
    </table>`;

  return `${orderHeader}${ticketsDetails}${totalSection}${orderFooter}`;
}