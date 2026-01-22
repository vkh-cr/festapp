export interface ParsedTransaction {
  amount: number;
  currency: string;
  counterpartyAccount: string | null; // Split Account Number
  counterpartyBankCode: string | null; // Split Bank Code
  counterpartyName: string | null; 
  counterpartyBankName: string | null; 
  vs: string | null;
  ks: string | null;
  ss: string | null;
  message: string | null;
  date: string;
  transactionId: string | null;

}

const BANK_CODES: Record<string, string> = {
    '0100': 'Komerční banka, a.s.',
    '0300': 'Československá obchodní banka, a. s.',
    '0600': 'MONETA Money Bank, a.s.',
    '0800': 'Česká spořitelna, a.s.',
    '2010': 'Fio banka, a.s.',
    '2700': 'UniCredit Bank Czech Republic and Slovakia, a.s.',
    '3030': 'Air Bank a.s.',
    '5500': 'Raiffeisenbank a.s.',
    '6210': 'mBank S.A.',
    '6000': 'PPF banka a.s.',
    '4000': 'Expobank CZ a.s.',
    '2250': 'Banka CREDITAS a.s.'
};

export function parseEmail(provider: string, subject: string | undefined, body: string): ParsedTransaction | null {
  // Simple Regex Parsers

  if (provider === 'fio_email') {
    // Fio Banka Notification

    const amountMatch = body.match(/(?:Částka|Castka|Amount):\s*([\d\s,.-]+)\s*([A-Z]{3})/i);
    const accountMatch = body.match(/(?:Protiúčet|Account):\s*([0-9\/]+)/i);
    const vsMatch = body.match(/VS:\s*([0-9]+)/i);
    const ksMatch = body.match(/KS:\s*([0-9]+)/i);
    const ssMatch = body.match(/SS:\s*([0-9]+)/i);
    const msgMatch = body.match(/(?:Zpráva pro příjemce|Message):\s*(.*)/i);
    const nameMatch = body.match(/(?:Název protiúčtu|Account Name):\s*(.*)/i);
    const idMatch = body.match(/(?:ID pokynu|ID):\s*([0-9]+)/i);

    if (amountMatch) {
      let amountStr = amountMatch[1].replace(/\s/g, '').replace(',', '.');
      if (amountStr.includes(',') && !amountStr.includes('.')) {
          amountStr = amountStr.replace(',', '.');
      } else if (amountStr.includes(',') && amountStr.includes('.')) {
          const lastComma = amountStr.lastIndexOf(',');
          const lastDot = amountStr.lastIndexOf('.');
          if (lastComma > lastDot) {
             amountStr = amountStr.replace('.', '').replace(',', '.');
          } else {
             amountStr = amountStr.replace(',', '');
          }
      }

      const amount = parseFloat(amountStr);
      const currency = amountMatch[2];

      let counterpartyAccount = null;
      let counterpartyBankCode = null;
      const rawAccount = accountMatch ? accountMatch[1] : null;

      if (rawAccount) {
         const parts = rawAccount.split('/');
         counterpartyAccount = parts[0];
         if (parts.length > 1) counterpartyBankCode = parts[1];
      }


      const lookedUpBankName = counterpartyBankCode ? (BANK_CODES[counterpartyBankCode] || null) : null;

      return {
        amount,
        currency,
        counterpartyAccount,
        counterpartyBankCode,
        counterpartyName: nameMatch ? nameMatch[1].trim() : null,
        counterpartyBankName: lookedUpBankName,
        vs: vsMatch ? vsMatch[1] : null,
        ks: ksMatch ? ksMatch[1] : null,
        ss: ssMatch ? ssMatch[1] : null,
        message: msgMatch ? msgMatch[1].trim() : null,
        date: new Date().toISOString(),
        transactionId: idMatch ? idMatch[1] : null
      };
    }
  }

  if (provider === 'airbank_email') {
    // Air Bank Notification

    // Regex improvements:
    // 1. [\s\S]*? instead of .*? to match across newlines
    // 2. Loose matching for "Castka"/"Částka" (sometimes encoding issues)

    const amountMatch = body.match(/(?:Částka|Castka|Amount)[\s\S]*?:\s*([\d\s,.-]+)\s*([A-Z]{3})/i);
    // Modified to capture Name if present: "z účtu Name Name číslo Number"
    // Using [\s\S]*? to capture across lines if necessary
    const accountLineMatch = body.match(/z účtu\s+([\s\S]*?)\s+číslo\s*([0-9\/]+)/i);
    const simpleAccountMatch = body.match(/z účtu\s*([0-9\/]+)/i); // Fallback


    // VS/KS/SS - strict matching (avoid headers)
    // Use \b to ensure we don't match substrings like "Messa(ge)" containing "ss" or "Addre(ss)"
    // Use \s* to ensure the colon is relatively close (matches whitespace/newlines but not other text)
    const vsMatch = body.match(/(?:Variabilní symbol|\bVS\b)\s*:\s*([0-9]+)/i);
    const ksMatch = body.match(/(?:Konstantní symbol|\bKS\b)\s*:\s*([0-9]+)/i);
    const ssMatch = body.match(/(?:Specifický symbol|\bSS\b)\s*:\s*([0-9]+)/i);

    // Message often wraps or has label "Zprava"
    // For message we accept anything after colon until newline? Or just use existing logic but stricter label
    const msgMatch = body.match(/(?:Zpráva pro příjemce|Zprava)\s*:\s*(.*)/i);

    // Transaction Code
    const idMatch = body.match(/(?:Kód transakce|Kod transakce)\s*:\s*([0-9]+)/i);

    // Date
    const dateMatch = body.match(/(?:Datum zaúčtování|Datum zauctovani)\s*:\s*(\d{2}\.\d{2}\.\d{4})/i);

    if (amountMatch) {
      let amountStr = amountMatch[1].replace(/\s/g, '').replace(',', '.');
      // If result is empty or just dots/commas due to bad regex, might be issue.
      if (!amountStr || amountStr.length === 0) return null;

      const amount = parseFloat(amountStr);
      const currency = amountMatch[2];

      let isoDate = new Date().toISOString();
      if (dateMatch) {
         const [d, m, y] = dateMatch[1].split('.');
         const parsedDate = new Date(`${y}-${m}-${d}T12:00:00Z`);
         if (!isNaN(parsedDate.getTime())) {
             isoDate = parsedDate.toISOString();
         }
      }

      let counterpartyAccount = null;
      let counterpartyBankCode = null;
      let counterpartyName = null;
      let rawAccount = null;

      if (accountLineMatch) {
          counterpartyName = accountLineMatch[1].trim();
          // Cleanup name if it contains newlines or excessive layout chars
          counterpartyName = counterpartyName.replace(/\s+/g, ' ');
          rawAccount = accountLineMatch[2];
      } else if (simpleAccountMatch) {
          rawAccount = simpleAccountMatch[1];
      }

      if (rawAccount) {
         const parts = rawAccount.split('/');
         counterpartyAccount = parts[0];
         if (parts.length > 1) counterpartyBankCode = parts[1];
      }

      const lookedUpBankName = counterpartyBankCode ? (BANK_CODES[counterpartyBankCode] || null) : null;

      return {
        amount,
        currency,
        counterpartyAccount,
        counterpartyBankCode,
        counterpartyName: counterpartyName,
        counterpartyBankName: lookedUpBankName,
        vs: vsMatch ? vsMatch[1] : null,
        ks: ksMatch ? ksMatch[1] : null,
        ss: ssMatch ? ssMatch[1] : null,
        message: msgMatch ? msgMatch[1].trim() : null,
        date: isoDate,
        transactionId: idMatch ? idMatch[1] : null
      };
    }
  }

  return null;
}

export function detectProvider(accountNumber: string | null, bankType: string | null): string {
    let provider = 'unknown';
    
    if (accountNumber) {
        const accNum = accountNumber.replace(/\s/g, '');
        
        // 1. Check Legacy format (e.g. 12345/3030)
        if (accNum.includes('/2010')) {
            provider = 'fio_email';
        } else if (accNum.includes('/3030')) {
            provider = 'airbank_email'; 
        }
        // 2. Check IBAN format (e.g. CZkk 3030 ...) -> Extract indices 4-8
        else if (accNum.toUpperCase().startsWith('CZ') && accNum.length >= 8) {
            const bankCode = accNum.substring(4, 8);
            if (bankCode === '2010') {
                provider = 'fio_email';
            } else if (bankCode === '3030') {
                provider = 'airbank_email';
            }
        }
    }
    
    // Fallback: If type is FIO, assume Fio
    if (provider === 'unknown' && bankType === 'FIO') {
        provider = 'fio_email';
    }

    return provider;
}
