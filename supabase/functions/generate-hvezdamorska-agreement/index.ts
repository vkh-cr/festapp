import { PDFDocument, rgb, PageSizes, PDFFont } from "npm:pdf-lib";
import * as fontkit from "npm:fontkit";
import { encode as base64Encode } from "https://deno.land/std@0.170.0/encoding/base64.ts";
import { supabaseAdmin } from "../_shared/supabaseUtil.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// --- STATIC DATA (Used when not available from API) ---
const staticOrganizerData = {
    name: "CK Hvězda mořská s.r.o.",
    ico: "23146354",
    dic: "CZ 23146354",
    address: "Nové Sady 988/2, 602 00 Brno-střed",
    email: "info@hvezdamorska.cz",
    phone: "+420 774 292 428",
    account: "CZK - 2303165450/2010, EUR - 2503165455/2010  (Fio Banka a.s.)",
};
const staticPaymentClause = "Platba zálohy se uskutečňuje převodem na účet a platba doplatku v hotovosti v eurech při nástupu do autobusu.";
const staticTermsClause = "Zákazník svým podpisem potvrzuje, že tato smlouva je pro něj i ostatní přihlášené osoby ZÁVAZNÁ a že mu jsou známy Všeobecné obchodní podmínky cestovní kanceláře a SOUHLASÍ s nimi. Dále souhlasí, aby veškerá korespondence byla zasílána na jeho výše uvedený email a zavazuje se svoje spolucestující včas a plně informovat. Objednavatel a jeho spolucestující též souhlasí se zpracováním jejich osobních údajů ve smyslu platných právních předpisů (GDPR).";
const DEFAULT_FONT_URL = "https://fonts.cdnfonts.com/s/12165/Roboto-Regular.woff";
const LOGO_IMAGE_URL = "https://lwfpdjxsdmkfyrzqbrlk.supabase.co/storage/v1/object/public/public-files/hvezdamorska/fstapplogo.png";


// --- HELPER FUNCTIONS ---
function findFieldDataByType(fields: any[], formFields: any, type: string): any {
  if (!fields || !formFields) return null;
  const fieldDefinition = Object.values(formFields).find((field: any) => field.type === type);
  if (!fieldDefinition) return null;

  const fieldId = (fieldDefinition as any).id.toString();
  const fieldData = fields.find(f => f && f[fieldId] !== undefined);
  return fieldData ? fieldData[fieldId] : null;
}

function formatDate(isoString: string | null): string {
    if (!isoString) return "";
    try {
        const date = new Date(isoString);
        if (isNaN(date.getTime())) return "";
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    } catch (e) {
        return "";
    }
}

// --- PDF GENERATION LOGIC ---
async function generateAgreement(data: any): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const page = pdfDoc.addPage(PageSizes.A4);
  const { width, height } = page.getSize();

  let font: PDFFont, boldFont: PDFFont;
  try {
    const fontResponse = await fetch(DEFAULT_FONT_URL);
    if (!fontResponse.ok) throw new Error(`Font fetch failed: ${fontResponse.statusText}`);
    const fontData = await fontResponse.arrayBuffer();
    font = await pdfDoc.embedFont(new Uint8Array(fontData));
    boldFont = font;
  } catch (e) {
    console.error("CRITICAL: Custom font failed to load. PDF will likely have encoding errors.", e);
    throw new Error("Custom font loading failed. Cannot generate PDF.");
  }

  const logoImageBytes = await fetch(LOGO_IMAGE_URL).then(res => res.arrayBuffer());
  const logoImage = await pdfDoc.embedPng(logoImageBytes);


  const colorPrimaryBlue = rgb(0.10, 0.25, 0.45);
  const colorSecondaryBlue = rgb(0.3, 0.5, 0.7);
  const fieldBorderColor = rgb(0.9, 0.9, 0.9);
  const colorSeparatorLine = rgb(0.82, 0.85, 0.92);
  const colorLabelText = rgb(0.25, 0.25, 0.25);
  const colorDataText = rgb(0.1, 0.1, 0.1);
  const colorBlack = rgb(0,0,0);

  const margin = 40;
  let y = height - margin - 12;

  const lineThickness = 0.3;
  const fieldTextPadding = 4;
  const fieldHeight = 18;

  const smallFontSize = 7.5;
  const regularFontSize = 9;
  const dataFontSize = 9;
  const sectionTitleFontSize = 12;
  const mainTitleFontSize = 16;

  const spaceBetweenRows = 5;
  const spaceBetweenSections = 14;
  const spaceBelowSectionTitle = 8;
  const spaceBelowLabel = 1.5;

  function getTextBaselineInField(fieldTopY: number, fHeight: number, textFontSize: number): number {
    return fieldTopY - fHeight + (fHeight - textFontSize) / 2 + (textFontSize / 10) + 1;
  }

  function drawField(text: string, x: number, fieldTopY: number, fieldWidth: number, fHeight: number, align: 'left' | 'center' | 'right' = 'left', currentFont = font, fontSize = dataFontSize, textColor = colorDataText) {
    page.drawRectangle({
      x, y: fieldTopY - fHeight, width: fieldWidth, height: fHeight,
      borderColor: fieldBorderColor, borderWidth: lineThickness,
    });
    let textX = x + fieldTextPadding;
    const textWidthVal = currentFont.widthOfTextAtSize(text, fontSize);
    if (align === 'center') textX = x + (fieldWidth - textWidthVal) / 2;
    else if (align === 'right') textX = x + fieldWidth - textWidthVal - fieldTextPadding;
    const textY = getTextBaselineInField(fieldTopY, fHeight, fontSize);
    page.drawText(text, { x: textX, y: textY, font: currentFont, size: fontSize, color: textColor });
  }

  function drawLabel(text: string, x: number, labelBaselineY: number, currentFont = font, fontSize = smallFontSize, color = colorLabelText) {
    page.drawText(text, { x, y: labelBaselineY, font: currentFont, size: fontSize, color: color });
  }

  y -= mainTitleFontSize;
  const mainTitleBaselineY = y;
  page.drawText("SMLOUVA O ZÁJEZDU", { x: margin, y: mainTitleBaselineY, font: boldFont, size: mainTitleFontSize, color: colorPrimaryBlue });

  const contractNoText = data.contractNumber || '';
  const contractNoLabelText = "č. smlouvy:";
  const contractNoFieldWidth = 120;
  const contractNoLabelWidth = font.widthOfTextAtSize(contractNoLabelText, regularFontSize);
  const contractNoX = width - margin - contractNoFieldWidth;

  const tempFieldTextBaselineOffset = fieldHeight - (fieldHeight - dataFontSize) / 2 - (dataFontSize / 10) - 1;
  const contractNoLabelBaselineY = mainTitleBaselineY + (mainTitleFontSize - regularFontSize) / 2;
  const contractNoFieldTopY = contractNoLabelBaselineY + tempFieldTextBaselineOffset;

  drawField(contractNoText, contractNoX, contractNoFieldTopY, contractNoFieldWidth, fieldHeight, 'left');
  drawLabel(contractNoLabelText, contractNoX - contractNoLabelWidth - 8, contractNoLabelBaselineY, boldFont, regularFontSize, colorPrimaryBlue);

  y = mainTitleBaselineY - (mainTitleFontSize * 0.3) - spaceBetweenSections;

  y = Math.min(y, contractNoFieldTopY - fieldHeight - spaceBetweenSections * 0.5);
  const orgSectionTopY = y;
  y -= regularFontSize;
  drawLabel("Pořadatel zájezdu:", margin, y, font, regularFontSize - 0.5, colorSecondaryBlue);
  y -= (spaceBelowLabel + regularFontSize + 2);

  const orgTextLineHeight = regularFontSize + 2;
  const orgDataX = margin;
  let orgTextCurrentY = y;

  page.drawText(data.organizer.name || '', { x: orgDataX, y: orgTextCurrentY, font: boldFont, size: regularFontSize, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`IČO: ${data.organizer.ico || ''}  DIČ: ${data.organizer.dic || ''}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Sídlo firmy: ${data.organizer.address || ''}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Email: ${data.organizer.email || ''}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Telefon: ${data.organizer.phone || ''}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Číslo účtu: ${data.organizer.account || ''}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });

  const logoAreaWidth = 170;
  const logoAreaX = width - margin - logoAreaWidth;
  const logoDims = logoImage.scale(logoAreaWidth / logoImage.width * 0.65); // Made logo bigger
  page.drawImage(logoImage, {
      x: logoAreaX,
      y: orgSectionTopY - logoDims.height,
      width: logoDims.width,
      height: logoDims.height,
  });

  y = Math.min(orgTextCurrentY, orgSectionTopY - logoDims.height);
  y -= (spaceBetweenSections * 0.8);
  page.drawLine({ start: { x: margin, y: y }, end: { x: width - margin, y: y }, thickness: lineThickness, color: colorSeparatorLine });

  y -= spaceBetweenSections;
  y -= sectionTitleFontSize;
  page.drawText("INFORMACE K ZÁJEZDU", { x: margin , y: y, font: boldFont, size: sectionTitleFontSize, color: colorPrimaryBlue });
  y -= spaceBelowSectionTitle;

  const contentWidth = width - 2 * margin;
  const gap = 8;
  const rightEdge = width - margin;

  let rowY = y;
  y -= smallFontSize; drawLabel("Termín zájezdu:", margin, y); drawLabel("Název zájezdu:", margin + contentWidth/2 + gap, y);
  y -= spaceBelowLabel; const fieldTopInfo1 = y;
  drawField(data.tourInfo.tourDate || '', margin, fieldTopInfo1, contentWidth/2 - gap, fieldHeight);
  drawField(data.tourInfo.tourName || '', margin + contentWidth/2 + gap, fieldTopInfo1, contentWidth/2 - gap, fieldHeight);
  rowY = fieldTopInfo1 - fieldHeight - spaceBetweenRows;

  y = rowY;
  y -= smallFontSize; drawLabel("Doprava:", margin, y); drawLabel("Místo pobytu:", margin + contentWidth/2 + gap, y);
  y -= spaceBelowLabel; const fieldTopInfo2 = y;
  drawField(data.tourInfo.transport || '', margin, fieldTopInfo2, contentWidth/2 - gap, fieldHeight);
  drawField(data.tourInfo.placeOfStay || '', margin + contentWidth/2 + gap, fieldTopInfo2, contentWidth/2 - gap, fieldHeight);
  rowY = fieldTopInfo2 - fieldHeight - spaceBetweenRows;

  y = rowY;
  y -= smallFontSize; drawLabel("Nástupní místo:", margin, y); drawLabel("Počet nocí:", margin + contentWidth/2 + gap, y);
  y -= spaceBelowLabel; const fieldTopInfo3 = y;
  drawField(data.tourInfo.departurePoint || '', margin, fieldTopInfo3, contentWidth/2 - gap, fieldHeight);
  drawField(data.tourInfo.nights || '', margin + contentWidth/2 + gap, fieldTopInfo3, contentWidth/2 - gap, fieldHeight);
  y = fieldTopInfo3 - fieldHeight - spaceBetweenRows;

  y -= spaceBetweenSections;
  y -= sectionTitleFontSize;
  page.drawText("ZÁKAZNÍK (OBJEDNATEL)", { x: margin , y: y, font: boldFont, size: sectionTitleFontSize, color: colorPrimaryBlue });
  y -= spaceBelowSectionTitle;

  // --- START: RIGHT-ALIGNED CUSTOMER FIELDS ---
  const dobFieldWidth = 140;
  const dobFieldX = rightEdge - dobFieldWidth;
  const nameFieldWidth = dobFieldX - margin - gap;
  rowY = y;
  y -= smallFontSize; drawLabel("Příjmení, jméno:", margin, y); drawLabel("Datum nar.:", dobFieldX, y);
  y -= spaceBelowLabel; const clientFieldTop1 = y;
  drawField(data.client.fullName || '', margin, clientFieldTop1, nameFieldWidth, fieldHeight);
  drawField(data.client.dob || '', dobFieldX, clientFieldTop1, dobFieldWidth, fieldHeight);
  rowY = clientFieldTop1 - fieldHeight - spaceBetweenRows;

  y = rowY;
  y -= smallFontSize; drawLabel("Adresa včetně PSČ:", margin, y);
  y -= spaceBelowLabel; const clientFieldTop2 = y;
  drawField(data.client.address || '', margin, clientFieldTop2, contentWidth, fieldHeight);
  rowY = clientFieldTop2 - fieldHeight - spaceBetweenRows;

  const threeColWidth = (contentWidth - 2 * gap) / 3;
  y = rowY;
  y -= smallFontSize; drawLabel("Státní příslušnost:", margin, y); drawLabel("Číslo OP/pasu:", margin + threeColWidth + gap, y); drawLabel("Platný do:", margin + 2*threeColWidth + 2*gap, y);
  y -= spaceBelowLabel; const clientFieldTop3 = y;
  drawField(data.client.nationality || '', margin, clientFieldTop3, threeColWidth, fieldHeight);
  drawField(data.client.idNumber || '', margin + threeColWidth + gap, clientFieldTop3, threeColWidth, fieldHeight);
  drawField(data.client.idValidUntil || '', margin + 2*threeColWidth + 2*gap, clientFieldTop3, threeColWidth, fieldHeight);
  rowY = clientFieldTop3 - fieldHeight - spaceBetweenRows;

  const twoColWidth = (contentWidth - gap) / 2;
  y = rowY;
  y -= smallFontSize; drawLabel("Email:", margin, y); drawLabel("Tel. číslo:", margin + twoColWidth + gap, y);
  y -= spaceBelowLabel; const clientFieldTop4 = y;
  drawField(data.client.email || '', margin, clientFieldTop4, twoColWidth, fieldHeight);
  drawField(data.client.phone || '', margin + twoColWidth + gap, clientFieldTop4, twoColWidth, fieldHeight);
  y = clientFieldTop4 - fieldHeight - spaceBetweenRows;
  // --- END: RIGHT-ALIGNED CUSTOMER FIELDS ---

  y -= spaceBetweenSections;
  y -= sectionTitleFontSize;
  page.drawText("CENA A PLATBA", { x: margin, y: y, font: boldFont, size: sectionTitleFontSize, color: colorPrimaryBlue });
  y -= spaceBelowSectionTitle;

  const calculationTableWidth = contentWidth * 0.55;
  const colDescW = calculationTableWidth * 0.40;
  const colPrice1W = calculationTableWidth * 0.25;
  const colNumPersW = calculationTableWidth * 0.15;
  const colTotalItemW = calculationTableWidth * 0.20;

  let leftY = y;

  let currentHeaderX = margin;
  const headerLabelY = leftY - smallFontSize;
  drawLabel("KALKULACE", currentHeaderX, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentHeaderX += colDescW;
  drawLabel("Cena za 1 osobu", currentHeaderX, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentHeaderX += colPrice1W;
  drawLabel("Počet osob", currentHeaderX, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentHeaderX += colNumPersW;
  drawLabel("Cena", currentHeaderX, headerLabelY, boldFont, smallFontSize, colorBlack);

  leftY -= (smallFontSize + spaceBelowLabel + 4);

  (data.calculation.items || []).forEach((item: any) => {
    let currentTableX = margin;
    const pricePerPersonText = (item.pricePerPerson ?? 0).toLocaleString('cs-CZ') + ` ${item.currency || 'Kč'}`;
    drawField(item.description || '', currentTableX, leftY, colDescW, fieldHeight, 'left');
    currentTableX += colDescW;
    drawField(pricePerPersonText, currentTableX, leftY, colPrice1W, fieldHeight, 'right');
    currentTableX += colPrice1W;
    drawField("1", currentTableX, leftY, colNumPersW, fieldHeight, 'center');
    currentTableX += colNumPersW;
    drawField(pricePerPersonText, currentTableX, leftY, colTotalItemW, fieldHeight, 'right');
    leftY -= (fieldHeight + spaceBetweenRows * 0.6);
  });

  const paymentBlockX = margin + calculationTableWidth + 20;
  const paymentBlockWidth = rightEdge - paymentBlockX;
  let rightY = y;

  drawLabel("PLATBA", paymentBlockX, headerLabelY, boldFont, smallFontSize, colorBlack);
  rightY -= (smallFontSize + spaceBelowLabel + 10);

  const paymentLineHeight = regularFontSize + 3;
  const paymentValueX = paymentBlockX + 55;

  page.drawText("Záloha:", { x: paymentBlockX, y: rightY, font: boldFont, size: regularFontSize, color: colorDataText });
  rightY -= paymentLineHeight;
  page.drawText("Částka:", { x: paymentBlockX + 10, y: rightY, font: font, size: smallFontSize, color: colorLabelText });
  page.drawText(data.calculation.zaloha.castka || '', { x: paymentValueX, y: rightY, font: font, size: regularFontSize, color: colorDataText });
  rightY -= paymentLineHeight;
  page.drawText("Uhradit do:", { x: paymentBlockX + 10, y: rightY, font: font, size: smallFontSize, color: colorLabelText });
  page.drawText(data.calculation.zaloha.uhraditDo || '', { x: paymentValueX, y: rightY, font: font, size: regularFontSize, color: colorDataText });
  rightY -= (paymentLineHeight + 4);
  page.drawLine({start: {x: paymentBlockX, y: rightY}, end: {x: paymentBlockX + paymentBlockWidth, y: rightY}, thickness: lineThickness, color: colorSeparatorLine});
  rightY -= (paymentLineHeight + 2);

  page.drawText("Doplatek:", { x: paymentBlockX, y: rightY, font: boldFont, size: regularFontSize, color: colorDataText });
  rightY -= paymentLineHeight;
  page.drawText("Částka:", { x: paymentBlockX + 10, y: rightY, font: font, size: smallFontSize, color: colorLabelText });
  page.drawText(data.calculation.doplatek.castka || '', { x: paymentValueX, y: rightY, font: font, size: regularFontSize, color: colorDataText });
  rightY -= paymentLineHeight;
  page.drawText("Uhradit do:", { x: paymentBlockX + 10, y: rightY, font: font, size: smallFontSize, color: colorLabelText });
  page.drawText(data.calculation.doplatek.uhraditDo || '', { x: paymentValueX, y: rightY, font: font, size: regularFontSize, color: colorDataText });
  rightY -= (paymentLineHeight + 4);
  page.drawLine({start: {x: paymentBlockX, y: rightY}, end: {x: paymentBlockX + paymentBlockWidth, y: rightY}, thickness: lineThickness, color: colorSeparatorLine});
  rightY -= (paymentLineHeight + 1);

  page.drawText("Celkem:", { x: paymentBlockX, y: rightY, font: boldFont, size: regularFontSize, color: colorDataText });
  const totalPriceString = data.calculation.totalPriceForDisplay || '';
  page.drawText(totalPriceString, { x: paymentValueX, y: rightY, font: boldFont, size: regularFontSize + 1, color: colorBlack });

  y = Math.min(leftY, rightY) - 20; // Increased space

  const paymentClauseLines = wrapText(data.paymentClause || '', font, smallFontSize, contentWidth);
  paymentClauseLines.forEach(line => {
    const textWidth = font.widthOfTextAtSize(line, smallFontSize);
    page.drawText(line, { x: margin + (contentWidth - textWidth)/2, y: y, font: font, size: smallFontSize, color: colorLabelText});
    y -= (smallFontSize + 2);
  });

  const signatureLineWidth = (contentWidth - gap) / 2;
  const signatureLineY = margin + 30;
  const signatureLabelBaselineY = signatureLineY - smallFontSize - 3;

  const termsLineHeight = smallFontSize + 2.5;
  const termsLines = wrapText(data.termsClause || '', font, smallFontSize, contentWidth - 10);
  const termsBlockHeight = termsLines.length * termsLineHeight;
  let termsBlockTopY = signatureLineY + 15 + termsBlockHeight; // Positioned relative to signature

  for (const line of termsLines) {
    page.drawText(line, { x: margin + 5, y: termsBlockTopY, font: font, size: smallFontSize, color: colorDataText });
    termsBlockTopY -= termsLineHeight;
  }

  const podpisZakaznikaLabelText = "Podpis zákazníka";
  page.drawLine({ start: {x: margin, y: signatureLineY}, end: {x: margin + signatureLineWidth, y: signatureLineY}, thickness: lineThickness, color: colorBlack });
  drawLabel(podpisZakaznikaLabelText, margin + (signatureLineWidth - font.widthOfTextAtSize(podpisZakaznikaLabelText,smallFontSize))/2 , signatureLabelBaselineY, font, smallFontSize, colorBlack);

  const dateLabelText = "Datum";
  const dateText = data.signatureDate || '';
  const dateFieldX = rightEdge - signatureLineWidth;
  page.drawLine({ start: {x: dateFieldX, y: signatureLineY}, end: {x: rightEdge, y: signatureLineY}, thickness: lineThickness, color: colorBlack });
  page.drawText(dateText, {
      x: dateFieldX + (signatureLineWidth - font.widthOfTextAtSize(dateText, regularFontSize)) / 2,
      y: signatureLineY + 5,
      font: font,
      size: regularFontSize,
      color: colorDataText,
  });
  drawLabel(dateLabelText, dateFieldX + (signatureLineWidth - font.widthOfTextAtSize(dateLabelText,smallFontSize))/2, signatureLabelBaselineY, font, smallFontSize, colorBlack);

  return pdfDoc.save();
}

function wrapText(text: string, currentFont: PDFFont, fontSize: number, maxWidth: number): string[] {
  if (!text) return [];
  const words = text.split(' ');
  const lines: string[] = [];
  if (words.length === 0 || !words[0]) return [""];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (!word) continue;
    const testLine = currentLine + " " + word;
    try {
        if (currentFont.widthOfTextAtSize(testLine, fontSize) < maxWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    } catch (e) {
        console.warn("Warning: Error during text wrapping width calculation.", e);
        if (currentLine.length > word.length || lines.length === 0 ) lines.push(currentLine);
        currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

// --- MAIN DENO SERVER ---
Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const { requestSecret, order } = await req.json();

    if (!requestSecret) {
        return new Response(JSON.stringify({ error: "Request secret is required" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        });
    }

    const { data: secretValid, error: secretError } = await supabaseAdmin.rpc("check_request_secret", { p_secret: requestSecret });
    if (secretError || !secretValid) {
        console.error("Invalid request secret", secretError);
        return new Response(JSON.stringify({ error: "Invalid request secret" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 403,
        });
    }

    const orderId = order?.id;
    if (!orderId) {
        throw new Error("Order ID is missing from the request");
    }

    const { data: rpcData, error: rpcError } = await supabaseAdmin.rpc('get_order_details', {
        orderid: orderId
    });

    if (rpcError) {
      console.error("Error fetching order details:", rpcError);
      throw new Error(`Supabase RPC Error: ${rpcError.message}`);
    }
    if (!rpcData || !rpcData.data) {
        throw new Error(`No data returned from RPC for orderId: ${orderId}`);
    }

    const { order: rpcOrder, occasion, form_fields, payment_info } = rpcData.data;
    const orderFields = rpcOrder?.data?.fields;

    const idDocumentData = findFieldDataByType(orderFields, form_fields, 'id_document') || {};
    const surname = findFieldDataByType(orderFields, form_fields, 'surname') || '';
    const name = findFieldDataByType(orderFields, form_fields, 'name') || '';
    const clientData = {
        fullName: [surname, name].filter(Boolean).join(', ') || 'N/A',
        address: findFieldDataByType(orderFields, form_fields, 'address') || 'N/A',
        nationality: findFieldDataByType(orderFields, form_fields, 'nationality') || 'N/A',
        email: findFieldDataByType(orderFields, form_fields, 'email') || rpcOrder?.data?.email || 'N/A',
        idNumber: idDocumentData.id_document_number || 'N/A',
        phone: findFieldDataByType(orderFields, form_fields, 'phone') || rpcOrder?.data?.phone || 'N/A',
        dob: formatDate(findFieldDataByType(orderFields, form_fields, 'birth_date')),
        idValidUntil: formatDate(idDocumentData.id_document_expiry_date),
    };

    const startTime = occasion?.start_time ? new Date(occasion.start_time) : null;
    const endTime = occasion?.end_time ? new Date(occasion.end_time) : null;
    let nights = 'N/A';
    if(startTime && endTime) {
        const diffTime = Math.abs(endTime.getTime() - startTime.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        nights = String(diffDays);
    }

    const occasionDescription = occasion?.description || '';
    const transportMatch = occasionDescription.match(/Doprava (.*?)\./);
    const departureMatch = occasionDescription.match(/Nástupní místa: (.*?)(<br>|\n)/);

    const tourInfoData = {
        tourDate: `${formatDate(occasion?.start_time)} - ${formatDate(occasion?.end_time)}`,
        transport: transportMatch ? transportMatch[1] : "Bude upřesněno",
        departurePoint: departureMatch ? departureMatch[1].trim() : "Bude upřesněno",
        notes: "",
        tourName: occasion?.title || 'N/A',
        placeOfStay: "Medjugorje",
        nights: nights,
    };

    const calculationItems = (rpcOrder?.data?.tickets?.[0]?.products || []).map((p: any) => {
        const title = p.title || '';
        const typeTitle = p.type_title || '';
        // Define the absolute maximum character length for the entire description field.
        const MAX_LENGTH = 30;

        // 1. Construct the ideal, full description string.
        const fullDescription = typeTitle ? `${title} (${typeTitle})` : title;

        let finalDescription = fullDescription;

        // 2. Check if the full description exceeds the maximum length.
        if (fullDescription.length > MAX_LENGTH) {
            const suffix = typeTitle ? ` (${typeTitle})` : '';
            const maxTitleLength = MAX_LENGTH - suffix.length;

            // 3. Decide on the truncation strategy.
            // If the suffix is too long and leaves no meaningful space for the title (e.g., < 5 chars),
            // then we just truncate the entire combined string. This is our fallback.
            if (maxTitleLength < 5) {
                finalDescription = fullDescription.substring(0, MAX_LENGTH - 3) + '...';
            } else {
                // Otherwise, the "smart" approach: truncate the main title and append the full suffix.
                // This preserves the (type_title) information completely.
                const truncatedTitle = title.substring(0, maxTitleLength - 3) + '...';
                finalDescription = `${truncatedTitle}${suffix}`;
            }
        }

        return {
            description: finalDescription,
            pricePerPerson: p.price ?? 0,
            currency: p.currency_code || 'Kč'
        };
    });

    const totalFromFeatures = occasion?.features?.find((f:any) => f.code === 'form')?.external_price;
    const fallbackTotal = rpcOrder?.price != null ? `${rpcOrder.price.toLocaleString('cs-CZ')} ${rpcOrder.currency_code || 'Kč'}` : 'N/A';

    const calculationData = {
        items: calculationItems,
        zaloha: {
            castka: payment_info?.amount != null ? `${payment_info.amount.toLocaleString('cs-CZ')} ${payment_info.currency_code || 'Kč'}` : 'Dle pokynů',
            uhraditDo: formatDate(payment_info?.deadline),
        },
        doplatek: {
            castka: "Dle pokynů",
            uhraditDo: "Dle pokynů"
        },
        totalPriceForDisplay: totalFromFeatures || fallbackTotal
    };

    const dataForPdf = {
        contractNumber: payment_info?.variable_symbol?.toString() || '',
        organizer: staticOrganizerData,
        tourInfo: tourInfoData,
        client: clientData,
        calculation: calculationData,
        paymentClause: staticPaymentClause,
        termsClause: staticTermsClause,
        signatureDate: '',
    };

    const pdfBytes = await generateAgreement(dataForPdf);
    const base64PdfData = base64Encode(pdfBytes);

    return new Response(
      JSON.stringify({ data: base64PdfData, contentType: "application/pdf" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error generating agreement PDF:", error);
    let errorMessage = "Failed to generate agreement PDF";
    if (error instanceof Error) {
        errorMessage += `: ${error.message}`;
        if (error.stack) errorMessage += `\nStack: ${error.stack}`;
    }
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});