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
const spaceBeforeText = '25px';
const spaceAfterText = '40px';

// Helper to create a paragraph with reset margins.
const styledParagraph = (text: string) => `<p style="margin:0; padding:0; color: #333;">${text}</p>`;

// Helper to create a div-based spacer with a specific height.
const verticalSpacer = (height: string) => `<div style="height:${height};"></div>`;

export const translations = {
  cs: {
    overpaid: (amount: string) => [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`Evidujeme na ní přeplatek ve výši ${bold(amount)}, který Ti bude brzy vrácen.`),
        verticalSpacer(spaceAfterText),
    ].join(''),
    underpaid: (
      paid: string, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string | null
    ) => {
      const mainText = deadline
        ? `Pro úplné dokončení objednávky, prosím, uhraď zbývající částku ${bold(remaining)} do ${bold(deadline)}.`
        : `Pro úplné dokončení objednávky, prosím, uhraď zbývající částku ${bold(remaining)}. Platbu můžeš provést online podle údajů níže (doporučeno) nebo v hotovosti na místě.`;

      return [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`Děkujeme za Tvou platbu ve výši ${bold(paid)}. ${mainText} Jakmile platbu obdržíme, pošleme Ti potvrzení.`),
        verticalSpacer('15px'),
        styledParagraph(`Pro zjednodušení platby přikládáme QR kód.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'cs' }),
      ].join('');
    },
    unpaid: (
      total: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string | null
    ) => {
      const mainText = deadline
        ? `Pro dokončení objednávky ji, prosím, uhraď do ${bold(deadline)}.`
        : `Pro dokončení objednávky, prosím, proveď platbu online podle údajů níže (doporučeno) nebo v hotovosti na místě.`;

      return [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`Zbývá uhradit celkovou částku ${bold(total)}. ${mainText} Jakmile platbu obdržíme, pošleme Ti potvrzení.`),
        verticalSpacer('15px'),
        styledParagraph(`Pro zjednodušení platby přikládáme QR kód.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: total, lang: 'cs' }),
      ].join('');
    },
    fullyPaid: () => [
        verticalSpacer(spaceBeforeText),
        styledParagraph("Je kompletně zaplacená. Děkujeme!"),
        verticalSpacer(spaceAfterText),
    ].join(''),
    zeroOrder: (currency: string) => [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`Je v hodnotě ${bold(`0 ${currency}`)} a je považována za uhrazenou.`),
        verticalSpacer(spaceAfterText),
    ].join(''),
    reminder_before_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      const paragraphs = [
          styledParagraph(`Připomínáme Ti blížící se termín splatnosti Tvé objednávky. Do splatnosti zbývá ${bold(`${days}&nbsp;${days === 1 ? "den" : days < 5 ? "dny" : "dní"}`)}.`)
      ];
      if (paidAmount > 0) {
        paragraphs.push(styledParagraph(`Již jsi uhradil/a částku ${bold(paid)}.`));
      }
      paragraphs.push(styledParagraph(`Zbývá uhradit částku ${bold(remaining)}.`));

      const textBlock = paragraphs.join('');

      return [
        verticalSpacer(spaceBeforeText),
        textBlock,
        verticalSpacer('15px'),
        styledParagraph(`Pro zjednodušení platby přikládáme QR kód. Jakmile ji obdržíme, pošleme Ti potvrzení.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'cs' }),
      ].join('');
    },
    reminder_after_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
       const paragraphs = [
          styledParagraph(`Upozorňujeme Tě, že Tvá objednávka je ${bold(`${days}&nbsp;${days === 1 ? "den" : days < 5 ? "dny" : "dní"}`)} po datu splatnosti.`)
      ];
      if (paidAmount > 0) {
        paragraphs.push(styledParagraph(`Již jsi uhradil/a částku ${bold(paid)}.`));
      }
      paragraphs.push(styledParagraph(`Zbývá uhradit částku ${bold(remaining)}.`));
      paragraphs.push(styledParagraph(`Prosíme o její co nejrychlejší uhrazení.`));

      const textBlock = paragraphs.join('');
      return [
        verticalSpacer(spaceBeforeText),
        textBlock,
        verticalSpacer('15px'),
        styledParagraph(`Pro zjednodušení platby přikládáme QR kód a jakmile ji obdržíme, pošleme Ti potvrzení.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'cs' }),
      ].join('');
    },
  },
  en: {
    overpaid: (amount: string) => [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`We've noticed an overpayment of ${bold(amount)} on it, which will be refunded to you shortly.`),
        verticalSpacer(spaceAfterText),
    ].join(''),
    underpaid: (
      paid: string, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string | null
    ) => {
      const mainText = deadline
        ? `To complete the order, please pay the remaining amount of ${bold(remaining)} by ${bold(deadline)}.`
        : `To complete the order, please pay the remaining amount of ${bold(remaining)} using the payment details below or in cash on-site.`;

      return [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`Thank you for your payment of ${bold(paid)}. ${mainText} We will send a confirmation once the payment is received.`),
        verticalSpacer('15px'),
        styledParagraph(`A QR code is attached to simplify the payment.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'en' }),
      ].join('');
    },
    // MODIFIED to handle null deadline
    unpaid: (
      total: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string | null
    ) => {
      const mainText = deadline
        ? `To complete your order, the total amount of ${bold(total)} is due by ${bold(deadline)}.`
        : `To complete your order, please pay the total amount of ${bold(total)} using the payment details below or in cash on-site.`;

      return [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`${mainText} We will send a confirmation once the payment is received.`),
        verticalSpacer('15px'),
        styledParagraph(`A QR code is attached to simplify the payment.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: total, lang: 'en' }),
      ].join('');
    },
    fullyPaid: () => [
        verticalSpacer(spaceBeforeText),
        styledParagraph("It is now fully paid. Thank you!"),
        verticalSpacer(spaceAfterText),
    ].join(''),
    zeroOrder: (currency: string) => [
        verticalSpacer(spaceBeforeText),
        styledParagraph(`Its total is ${bold(`0 ${currency}`)} and is considered paid.`),
        verticalSpacer(spaceAfterText),
    ].join(''),
    reminder_before_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      const paragraphs = [
          styledParagraph(`This is a friendly reminder that your payment is due soon. You have ${bold(days)} day(s) left to pay.`)
      ];
      if (paidAmount > 0) {
        paragraphs.push(styledParagraph(`You have already paid ${bold(paid)}.`));
      }
      paragraphs.push(styledParagraph(`The remaining amount to be paid is ${bold(remaining)}.`));

      const textBlock = paragraphs.join('');
      return [
        verticalSpacer(spaceBeforeText),
        textBlock,
        verticalSpacer('15px'),
        styledParagraph(`A QR code is attached to simplify the payment. We will send a confirmation once it's received.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'en' }),
      ].join('');
    },
    reminder_after_deadline: (
      days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string
    ) => {
      const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
      const paragraphs = [
          styledParagraph(`This is a reminder that your payment is overdue by ${bold(`${days}&nbsp;${days === 1 ? "day" : "days"}`)}.`)
      ];
      if (paidAmount > 0) {
        paragraphs.push(styledParagraph(`You have already paid ${bold(paid)}.`));
      }
      paragraphs.push(styledParagraph(`The remaining amount to be paid is ${bold(remaining)}.`));
      paragraphs.push(styledParagraph(`Please settle the payment as soon as possible.`));

      const textBlock = paragraphs.join('');
      return [
        verticalSpacer(spaceBeforeText),
        textBlock,
        verticalSpacer('15px'),
        styledParagraph(`A QR code is attached to simplify the payment, and we will send a confirmation once it's received.`),
        verticalSpacer(spaceAfterText),
        generatePaymentDetails({ accountNumber, iban, variableSymbol, amount: remaining, lang: 'en' }),
      ].join('');
    },
  },
};