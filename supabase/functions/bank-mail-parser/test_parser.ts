
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { parseEmail } from "./parser.ts";

const airbankEmailBody = `
Dobrý den,

zůstatek na účtu Běžný účet 1 číslo 2758626014/3030 se zvýšil o částku 1,00 CZK. Dostupný zůstatek k 24.01.2026 v 05:05 je 2 861,66 CZK.

Pro úplnost uvádíme detaily této úhrady:

Příchozí úhrada z účtu Bujnovský, Michael číslo 2300409288/2010
Částka: 1,00 CZK
Datum zaúčtování: 24.01.2026
Kód transakce: 148260268562

Přejeme Vám pěkný den.
`;

Deno.test("Parse Air Bank Email", () => {
    const result = parseEmail("airbank_email", "Subject", airbankEmailBody);
    
    // Assert structure
    if (!result) {
        throw new Error("Result is null");
    }
    
    console.log("Parsed result:", result);

    assertEquals(result.amount, 1.00);
    assertEquals(result.currency, "CZK");
    assertEquals(result.counterpartyAccount, "2300409288");
    assertEquals(result.counterpartyBankCode, "2010");
    assertEquals(result.transactionId, "148260268562");
    
    // Date verification (24.01.2026) -> ISO
    // Just check it contains year, month, day
    if (!result.date.includes("2026-01-24")) {
         throw new Error(`Date invalid: ${result.date}`);
    }
});
