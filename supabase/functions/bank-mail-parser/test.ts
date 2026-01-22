import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { parseEmail } from "./parser.ts";

Deno.test("Fio Banka Email Parser - Valid Email", () => {
    const body = `
    Vážení klienti,
    
    na Vašem účtu 12345/2010 došlo k pohybu:
    
    Částka: 1 200,50 CZK
    Protiúčet: 987654321/0800
    VS: 2024001
    Datum: 24.01.2026
    Zpráva pro příjemce: Platba za listky
    
    S pozdravem
    Fio banka
    `;
    
    const result = parseEmail("fio_email", "Pohyb na uctu", body);
    
    assertEquals(result?.amount, 1200.50);
    assertEquals(result?.currency, "CZK");
    assertEquals(result?.counterparty, "987654321/0800");
    assertEquals(result?.vs, "2024001");
    assertEquals(result?.message, "Platba za listky");
});

Deno.test("Fio Banka Email Parser - Minimal Data", () => {
    const body = `
    Částka: 500,00 CZK
    `;
    // Should still parse amount/curr, others null
    const result = parseEmail("fio_email", "", body);
    
    assertEquals(result?.amount, 500.0);
    assertEquals(result?.counterparty, null);
});
