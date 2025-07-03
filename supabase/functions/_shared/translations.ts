// Helper function to wrap text in HTML strong tags for bolding.
export const bold = (text: string | number) => `<strong>${text}</strong>`;

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

  return `<div style="margin-top: 16px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #f9fafb;">
            <p style="margin-top:0; margin-bottom: 8px; font-weight: bold; color: #333;">${title}</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>${rows}</tbody>
            </table>
          </div>`;
};

export const translations = {
  cs: {
    overpaid: (amount: string) =>
      `<p>Evidujeme na ní přeplatek ve výši ${bold(
        amount
      )}, který Ti bude brzy vrácen.</p>`,
    underpaid: (
      paid: string, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string
    ) =>
      `<p>Děkujeme za Tvou platbu ve výši ${bold(paid)}. Pro úplné dokončení objednávky, prosím, uhraď zbývající částku do ${bold(deadline)}. Jakmile platbu obdržíme, pošleme Ti potvrzení.</p>
       <p>Pro zjednodušení platby přikládáme QR kód.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'cs' })}`,
    unpaid: (
      total: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string
    ) =>
      `<p>Zbývá uhradit celkovou částku ${bold(total)}. Pro dokončení objednávky ji, prosím, uhraď do ${bold(deadline)}. Jakmile platbu obdržíme, pošleme Ti potvrzení.</p>
       <p>Pro zjednodušení platby přikládáme QR kód.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: total, lang: 'cs' })}`,
    fullyPaid: () => "<p>Je kompletně zaplacená. Děkujeme!</p>",
    zeroOrder: (currency: string) =>
      `<p>Je v hodnotě ${bold(
        `0 ${currency}`
      )} a je považována za uhrazenou.</p>`,
    reminder_before_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      let preamble = `<p>Připomínáme Ti blížící se termín splatnosti Tvé objednávky. Do splatnosti zbývá ${bold(`${days}&nbsp;${days === 1 ? "den" : days < 5 ? "dny" : "dní"}`)}.</p>`;
      if (paidAmount > 0) {
        preamble += `<p>Již jsi uhradil/a částku ${bold(paid)}.</p>`;
      }
      return `${preamble}
       <p>Pro zjednodušení platby přikládáme QR kód. Jakmile ji obdržíme, pošleme Ti potvrzení.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'cs' })}`;
    },
    reminder_after_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      let preamble = `<p>Upozorňujeme Tě, že Tvá objednávka je ${bold(`${days}&nbsp;${days === 1 ? "den" : days < 5 ? "dny" : "dní"}`)} po datu splatnosti.</p>`;
      if (paidAmount > 0) {
        preamble += `<p>Již jsi uhradil/a částku ${bold(paid)}.</p>`;
      }
      return `${preamble}
       <p>Prosíme o její co nejrychlejší uhrazení. Pro zjednodušení platby přikládáme QR kód a jakmile ji obdržíme, pošleme Ti potvrzení.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'cs' })}`;
    },
  },
  en: {
    overpaid: (amount: string) =>
      `<p>We've noticed an overpayment of ${bold(
        amount
      )} on it, which will be refunded to you shortly.</p>`,
    underpaid: (
      paid: string, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string
    ) =>
      `<p>Thank you for your payment of ${bold(paid)}. To complete the order, please pay the remaining amount of ${bold(remaining)} by ${bold(deadline)}. We will send a confirmation once the payment is received.</p>
       <p>A QR code is attached to simplify the payment.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'en' })}`,
    unpaid: (
      total: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string
    ) =>
      `<p>To complete your order, the total amount of ${bold(total)} is due by ${bold(deadline)}. We will send a confirmation once the payment is received.</p>
       <p>A QR code is attached to simplify the payment.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: total, lang: 'en' })}`,
    fullyPaid: () => "<p>It is now fully paid. Thank you!</p>",
    zeroOrder: (currency: string) =>
      `<p>Its total is ${bold(
        `0 ${currency}`
      )} and is considered paid.</p>`,
    reminder_before_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      let preamble = `<p>This is a friendly reminder that your payment is due soon. You have ${bold(days)} day(s) left to pay.</p>`;
      if (paidAmount > 0) {
        preamble += `<p>You have already paid ${bold(paid)}.</p>`;
      }
      return `${preamble}
       <p>A QR code is attached to simplify the payment. We will send a confirmation once it's received.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'en' })}`;
    },
    reminder_after_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      let preamble = `<p>This is a reminder that your payment is overdue by ${bold(`${days}&nbsp;${days === 1 ? "day" : "days"}`)}.</p>`;
      if (paidAmount > 0) {
        preamble += `<p>You have already paid ${bold(paid)}.</p>`;
      }
      return `${preamble}
       <p>Please settle the payment as soon as possible. A QR code is attached to simplify the payment, and we will send a confirmation once it's received.</p>
       ${generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'en' })}`;
    },
  },
};