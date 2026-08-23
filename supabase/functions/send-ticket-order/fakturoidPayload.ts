export function buildFakturoidInvoicePayload(
  order: any,
  unitName: string,
  idempotencyKey: string,
  subjectId: number,
  note?: string,
  issuedOn = new Date().toISOString().slice(0, 10),
): Record<string, unknown> {
  const total = Number(order.payment_info.amount).toFixed(2);
  const isEur =
    String(order.payment_info.currency_code).toUpperCase() === "EUR";
  const body: Record<string, unknown> = {
    custom_id: idempotencyKey,
    document_type: "proforma",
    subject_id: subjectId,
    issued_on: issuedOn,
    taxable_fulfillment_due: issuedOn,
    currency: order.payment_info.currency_code,
    iban: order.payment_info.account_number,
    bank_account: order.payment_info.account_number_human_readable,
    lines: [{
      name: unitName,
      quantity: 1,
      unit_name: unitName.slice(0, 10),
      unit_price: total,
      vat_rate: 0,
    }],
  };
  if (isEur) body.variable_symbol = String(order.payment_info.variable_symbol);
  if (note) body.note = note;
  return body;
}
