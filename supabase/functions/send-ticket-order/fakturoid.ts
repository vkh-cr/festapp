import { supabaseAdmin } from "../_shared/supabaseUtil.ts";

export interface FakturoidConfig {
  client_id: string;
  client_secret: string;
  slug: string;
  subject_id: number;
}

export async function useFakturoid(
  { client_id, client_secret, slug, subject_id }: FakturoidConfig,
  order: any,
  unitName: string,
  attachments: Array<{
    filename: string;
    content: Uint8Array;
    contentType: string;
    encoding: "binary";
  }>,
): Promise<void> {
  // 1) Get OAuth token
  const creds = btoa(`${client_id}:${client_secret}`);
  const tokenRes = await fetch(
    `https://app.fakturoid.cz/api/v3/oauth/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${creds}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Festapp (no-reply@festapp.net)",
      },
      body: JSON.stringify({ grant_type: "client_credentials" }),
    },
  );
  if (!tokenRes.ok) throw new Error(`Token failed ${tokenRes.status}`);
  const { access_token } = await tokenRes.json();
  const apiHeaders = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "User-Agent": "Festapp (no-reply@festapp.net)",
  };

  // 2) Create Proforma with minimal payload
  const d = order.data;
  const today = new Date().toISOString().slice(0, 10);
  const total = Number(order.payment_info.amount).toFixed(2);

  const createBody = {
    document_type: "proforma",
    subject_id,
    issued_on: today,
    taxable_fulfillment_due: today,
    currency: order.payment_info.currency_code,
    iban: order.payment_info.account_number,
    bank_account: order.payment_info.account_number_human_readable,
    lines: [
      {
        name: unitName,
        quantity: 1,
        unit_name: unitName,
        unit_price: total,
        vat_rate: 0,
      },
    ],
  };

  const invRes = await fetch(
    `https://app.fakturoid.cz/api/v3/accounts/${slug}/invoices.json`,
    {
      method: "POST",
      headers: apiHeaders,
      body: JSON.stringify(createBody),
    },
  );
  const result = await invRes.json();
  console.log("Proforma created:", result);

  // 3) Update our payment_info.variable_symbol
  if (result.variable_symbol) {
    await supabaseAdmin.rpc("update_payment_info_variable_symbol", {
      p_payment_info_id: order.payment_info.id,
      p_variable_symbol: result.variable_symbol,
    });
    order.payment_info.variable_symbol = result.variable_symbol;
  }

  // 4) Patch in all the client_* fields via a second API call
  const patchBody: any = {
    client_name: `${d.name || ""} ${d.surname || ""}`.trim(),
    client_street: d.street,
    client_city: d.city,
    client_zip: d.zip,
    client_country: d.country,
    client_has_delivery_address: false,
    client_phone: d.phone,
  };

  const patchRes = await fetch(
    `https://app.fakturoid.cz/api/v3/accounts/${slug}/invoices/${result.id}.json`,
    {
      method: "PUT",
      headers: apiHeaders,
      body: JSON.stringify(patchBody),
    },
  );
  const patched = await patchRes.json();
  console.log("Invoice patched with client data:", patched);

  // 5) Fetch PDF with up to one retry on 204
  if (patched.pdf_url) {
    await new Promise((r) => setTimeout(r, 1000));
    let pdfRes = await fetch(patched.pdf_url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (pdfRes.status === 204) {
      console.log("PDF not ready, retrying in 1s…");
      await new Promise((r) => setTimeout(r, 1000));
      pdfRes = await fetch(patched.pdf_url, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
    }

    if (pdfRes.ok) {
      const buf = new Uint8Array(await pdfRes.arrayBuffer());
      attachments.push({
        filename: `proforma-${patched.id}.pdf`,
        content: buf,
        contentType: "application/pdf",
        encoding: "binary",
      });
      console.log("Fetched PDF successfully.");
    } else {
      console.error("Could not fetch PDF, status:", pdfRes.status);
    }
  }
}
