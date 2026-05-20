import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { parseEmail, detectProvider } from "./parser.ts";

// --- FIO BANK EXAMPLE ---
const fioEmailBody = `
Vážený kliente,

na Vašem účtu 2600000000/2010 byl zaznamenán pohyb:

Částka: 1 234,50 CZK
Protiúčet: 123456789/0100
Název protiúčtu: Jan Novak
VS: 5555
Zpráva pro příjemce: Test Payment Fio
ID pokynu: 111122223333

Zůstatek: 10 000,00 CZK

S pozdravem,
Fio banka, a.s.
`;

// --- AIR BANK EXAMPLE (Provided by User - Latest) ---
const airbankEmailBody = `
Dobrý den,

zůstatek na účtu Běžný účet 1 číslo 2758626014/3030 se zvýšil o částku 1,00 CZK. Dostupný zůstatek k 24.01.2026 v 05:24 je 2 863,66 CZK.

Pro úplnost uvádíme detaily této úhrady:

Příchozí úhrada z účtu Bujnovský, Michael číslo 2300409288/2010
Částka: 1,00 CZK
Datum zaúčtování: 24.01.2026
Variabilní symbol: 1
Konstantní symbol: 123
Specifický symbol: 12
Zpráva pro příjemce: hello
Kód transakce: 148260288562


Nechceme, aby Vás naše upozornění jakkoliv obtěžovala. 
...
`;

Deno.test("Parse FIO Bank Email", () => {
    const result = parseEmail("fio_email", "Pohyb na uctu", fioEmailBody);
    
    if (!result) throw new Error("FIO Result is null");
    console.log("FIO Parsed:", result);

    assertEquals(result.amount, 1234.50);
    assertEquals(result.currency, "CZK");
    assertEquals(result.counterpartyAccount, "123456789");
    assertEquals(result.counterpartyBankCode, "0100");
    assertEquals(result.counterpartyName, "Jan Novak"); // Verify Name Extraction
    assertEquals(result.vs, "5555");
    assertEquals(result.message, "Test Payment Fio");
    assertEquals(result.transactionId, "111122223333");
    assertEquals(result.counterpartyBankName, "Komerční banka, a.s."); // Code 0100 verified verification
});

Deno.test("Parse Air Bank Email (Comprehensive)", () => {
    const result = parseEmail("airbank_email", "Info o deni na uctu", airbankEmailBody);
    
    if (!result) throw new Error("Air Bank Result is null");
    console.log("Air Bank Parsed:", result);

    assertEquals(result.amount, 1.00);
    assertEquals(result.currency, "CZK");
    assertEquals(result.counterpartyAccount, "2300409288");
    assertEquals(result.counterpartyBankCode, "2010");
    assertEquals(result.vs, "1");
    assertEquals(result.ks, "123"); // Constant Symbol
    assertEquals(result.ss, "12"); // Specific Symbol
    assertEquals(result.message, "hello");
    // Date verification (24.01.2026) -> ISO
    if (!result.date.includes("2026-01-24")) {
         throw new Error(`Date invalid: ${result.date}`);
    }
    assertEquals(result.transactionId, "148260288562");
    assertEquals(result.counterpartyBankName, "Fio banka, a.s."); // Code 2010 verified verification
});

Deno.test("Detect Provider", () => {
    // Legacy Fio
    assertEquals(detectProvider("2600000000/2010", null), "fio_email");
    assertEquals(detectProvider("123456 / 2010", null), "fio_email");
    
    // Legacy AirBank
    assertEquals(detectProvider("12345/3030", null), "airbank_email");
    
    // IBAN Fio (CZkk 2010 ...)
    assertEquals(detectProvider("CZ1220100000000000001234", null), "fio_email");

    // IBAN AirBank (CZkk 3030 ...)
    assertEquals(detectProvider("CZ1230300000000000001234", null), "airbank_email");
    
    // Fallback Type
    assertEquals(detectProvider(null, "FIO"), "fio_email");
    assertEquals(detectProvider("000000/9999", "FIO"), "fio_email"); // Unknown code but explicit FIO type
    
    // Unknown
    assertEquals(detectProvider("1234/0800", "General"), "unknown");
});
