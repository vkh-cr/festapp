// Helper function to wrap text in HTML strong tags for bolding, preventing line breaks.
export const bold = (text: string | number) => `<strong style="white-space: nowrap;">${text}</strong>`;

/**
 * Defines the options for the payment details component.
 */
export interface PaymentDetailsOptions {
  accountNumber: string;
  variableSymbol: string;
  amount: string;
  iban?: string | null;
  note?: string | null;
  lang?: 'cs' | 'en';
}

/**
 * Defines the supported tones for translations.
 */
export type Tone = 'formal' | 'informal';

/**
 * Creates a styled, readable block for payment details.
 * The 'note' parameter is now a standard detail row.
 * @param options - The payment details configuration.
 * @returns An HTML string for the payment details block.
 */
export const generatePaymentDetails = (options: PaymentDetailsOptions) => {
  const { accountNumber, variableSymbol, amount, iban, note, lang = 'cs' } = options;
  const title = lang === 'cs' ? 'Platební údaje:' : 'Payment Details:';

  const details = [
    { label: lang === 'cs' ? "Číslo účtu:" : "Account Number:", value: accountNumber },
  ];

  if (iban) {
    details.push({ label: "IBAN:", value: iban });
  }

  details.push({ label: lang === 'cs' ? "Variabilní symbol:" : "Variable Symbol:", value: variableSymbol });

  if (note) {
    details.push({
        label: lang === 'cs' ? "Zpráva pro příjemce:" : "Message for recipient:",
        value: note
    });
  }

  details.push({ label: lang === 'cs' ? "Částka:" : "Amount:", value: amount });

  const rows = details
    .map(
      (d) =>
        `<tr>
          <td style="padding: 4px 8px; text-align: left; color: #555;">${d.label}</td>
          <td style="padding: 4px 8px; text-align: left;"><strong>${d.value}</strong></td>
         </tr>`
    )
    .join("");

  // margin-top is set to 0 as spacing is now handled by the verticalSpacer function.
  return `<div style="margin-top: 0; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #f9fafb;">
            <p style="margin-top:0; margin-bottom: 8px; font-weight: bold; color: #333;">${title}</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>${rows}</tbody>
            </table>
          </div>`;
};

// Constants to control spacing around the main text block.
export const spaceBeforeText = '25px';
export const spaceAfterText = '40px';

// Helper to create a paragraph with reset margins.
export const styledParagraph = (text: string) => `<p style="margin:0; padding:0; color: #333;">${text}</p>`;

// Helper to create a div-based spacer with a specific height.
export const verticalSpacer = (height: string) => `<div style="height:${height};"></div>`;