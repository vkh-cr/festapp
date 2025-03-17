export function formatCurrency(amount, currencyCode = "CZK") {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}