import {
  bold,
  generatePaymentDetails,
  styledParagraph,
  verticalSpacer,
  spaceBeforeText,
  spaceAfterText
} from './payment-details.helpers.ts';
import type { Tone } from './payment-details.helpers.ts';

export const enTranslations = {
  overpaid: (amount: string, _tone: Tone) => [
      verticalSpacer(spaceBeforeText),
      styledParagraph(`We've noticed an overpayment of ${bold(amount)} on it, which will be refunded to you shortly.`),
      verticalSpacer(spaceAfterText),
  ].join(''),
  underpaid: (
    paid: string, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string | null, _tone: Tone
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
  unpaid: (
    total: string, accountNumber: string, iban: string | null, variableSymbol: string, deadline: string | null, _tone: Tone
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
  fullyPaid: (_tone: Tone) => [
      verticalSpacer(spaceBeforeText),
      styledParagraph("It is now fully paid. Thank you!"),
      verticalSpacer(spaceAfterText),
  ].join(''),
  zeroOrder: (currency: string, _tone: Tone) => [
      verticalSpacer(spaceBeforeText),
      styledParagraph(`Its total is ${bold(`0 ${currency}`)} and is considered paid.`),
      verticalSpacer(spaceAfterText),
  ].join(''),
  reminder_before_deadline: (
    days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string, _tone: Tone
  ) => {
    const paidAmount = parseFloat(paid.replace(/[^0-9.,]+/g, "").replace(",", "."));
    const paragraphs = [
        styledParagraph(`This is a friendly reminder that your payment is due soon. You have ${bold(`${days}&nbsp;${days === 1 ? "day" : "days"}`)} left to pay.`)
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
    days: number, remaining: string, accountNumber: string, iban: string | null, variableSymbol: string, paid: string, _tone: Tone
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
  days_remaining: (days: number) => {
    return `${days} ${days === 1 ? "day" : "days"}`;
  },
};