import { PDFDocument, rgb, PageSizes, PDFFont } from "npm:pdf-lib";
import * as fontkit from "npm:fontkit";
import { supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { authorizeRequest, AuthError } from "../_shared/auth.ts";
import { Buffer } from "node:buffer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// --- STATIC DATA (Used when not available from API) ---
const staticOrganizerData = {
    name: "CK Hvězda Mořská s.r.o.",
    ico: "23146354",
    dic: "CZ 23146354",
    address: "Nové Sady 988/2, 602 00 Brno-střed",
    email: "info@hvezdamorska.cz",
    phone: "+420 774 292 428",
    account: "CZK - 2303165450/2010, EUR - 2503165455/2010  (Fio Banka a.s.)",
};
const staticPaymentClause = "Platba zálohy probíhá převodem na účet, doplatek se hradí v hotovosti v eurech při příjezdu na místo ubytování.";
const staticTermsClause = "Zákazník svým podpisem/zaplacením zálohy potvrzuje, že tato smlouva je pro něj i ostatní přihlášené osoby ZÁVAZNÁ a že mu jsou známy Všeobecné obchodní podmínky cestovní kanceláře a SOUHLASÍ s nimi. Dále souhlasí, aby veškerá korespondence byla zasílána na jeho výše uvedený email a zavazuje se svoje spolucestující včas a plně informovat. Objednavatel a jeho spolucestující též souhlasí se zpracováním jejich osobních údajů ve smyslu platných právních předpisů (GDPR).";
const DEFAULT_FONT_URL = "https://raw.githubusercontent.com/googlefonts/roboto/main/src/hinted/Roboto-Regular.ttf";
const LOGO_IMAGE_URL = "https://lwfpdjxsdmkfyrzqbrlk.supabase.co/storage/v1/object/public/public-files/hvezdamorska/hvezdamorskaCKlogo.png";


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
    boldFont = font; // Reusing regular font as bold as requested

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
  const logoDims = logoImage.scale(logoAreaWidth / logoImage.width * 0.90); // Made logo bigger
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
  y -= smallFontSize; drawLabel("Nástupní místo:", margin, y); drawLabel("Počet dní:", margin + contentWidth/2 + gap, y);
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

  // New Single Row: Nationality | Phone | Email
  // Ratios: ~20% | ~30% | ~50%
  const widthNat = (contentWidth - 2 * gap) * 0.20;
  const widthPhone = (contentWidth - 2 * gap) * 0.30;
  const widthEmail = (contentWidth - 2 * gap) * 0.50;

  y = rowY;
  y -= smallFontSize; 
  drawLabel("Státní příslušnost:", margin, y); 
  drawLabel("Tel. číslo:", margin + widthNat + gap, y); 
  drawLabel("Email:", margin + widthNat + gap + widthPhone + gap, y);

  y -= spaceBelowLabel; const clientFieldTop3 = y;
  
  drawField(data.client.nationality || '', margin, clientFieldTop3, widthNat, fieldHeight);
  drawField(data.client.phone || '', margin + widthNat + gap, clientFieldTop3, widthPhone, fieldHeight);
  drawField(data.client.email || '', margin + widthNat + gap + widthPhone + gap, clientFieldTop3, widthEmail, fieldHeight);
  
  y = clientFieldTop3 - fieldHeight - spaceBetweenRows;
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

  const totalSurcharge = (data.calculation.doplatek?.totalAmount || 0);
  const depositLabel = totalSurcharge > 0 ? "Záloha:" : "Cena celkem:";

  page.drawText(depositLabel, { x: paymentBlockX, y: rightY, font: boldFont, size: regularFontSize, color: colorDataText });
  rightY -= paymentLineHeight;
  page.drawText("Částka:", { x: paymentBlockX + 10, y: rightY, font: font, size: smallFontSize, color: colorLabelText });
  page.drawText(data.calculation.zaloha.castka || '', { x: paymentValueX, y: rightY, font: font, size: regularFontSize, color: colorDataText });
  rightY -= paymentLineHeight;
  page.drawText("Uhradit do:", { x: paymentBlockX + 10, y: rightY, font: font, size: smallFontSize, color: colorLabelText });
  page.drawText(data.calculation.zaloha.uhraditDo || '', { x: paymentValueX, y: rightY, font: font, size: regularFontSize, color: colorDataText });
  rightY -= (paymentLineHeight + 4);
  page.drawLine({start: {x: paymentBlockX, y: rightY}, end: {x: paymentBlockX + paymentBlockWidth, y: rightY}, thickness: lineThickness, color: colorSeparatorLine});
  rightY -= (paymentLineHeight + 2);

  if (totalSurcharge > 0) {
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
  }

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

    const { requestSecret, order: orderInput, orderId: orderIdInput } = await req.json();

    // Support both direct 'orderId' input and 'order.id' input for backward compatibility
    const orderId = orderIdInput || orderInput?.id;

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

    // --- AUTHORIZATION ---
    // Authorize using the shared helper. Supports secret (backend) or user token (frontend).
    const authorizationHeader = req.headers.get("Authorization");
    await authorizeRequest({ requestSecret, authorizationHeader, occasionId: occasion.id });
    // ---------------------

    const orderFields = rpcOrder?.data?.fields;

    const surname = findFieldDataByType(orderFields, form_fields, 'surname') || '';
    const name = findFieldDataByType(orderFields, form_fields, 'name') || '';
    const clientData = {
        fullName: [surname, name].filter(Boolean).join(', ') || 'N/A',
        address: findFieldDataByType(orderFields, form_fields, 'address') || 'N/A',
        nationality: findFieldDataByType(orderFields, form_fields, 'nationality') || 'N/A',
        email: findFieldDataByType(orderFields, form_fields, 'email') || rpcOrder?.data?.email || 'N/A',
        phone: findFieldDataByType(orderFields, form_fields, 'phone') || rpcOrder?.data?.phone || 'N/A',
        dob: formatDate(findFieldDataByType(orderFields, form_fields, 'birth_date')),
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

    const contractFeatureRaw = occasion?.features?.find((f:any) => f.code === 'contract');
    // Only use the feature data if it is explicitly enabled
    const contractFeature = contractFeatureRaw?.is_enabled ? contractFeatureRaw : null;

    const tourInfoData = {
        tourDate: contractFeature?.tour_date || `${formatDate(occasion?.start_time)} - ${formatDate(occasion?.end_time)}`,
        transport: contractFeature?.transport || transportMatch?.[1] || "Bude upřesněno",
        departurePoint: contractFeature?.departure_point || "Podle domluvy",
        notes: contractFeature?.notes || "",
        tourName: contractFeature?.tour_name || occasion?.title || 'N/A',
        placeOfStay: contractFeature?.place_of_stay || "Medjugorje",
        nights: contractFeature?.number_of_days || nights,
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
                let raw = fullDescription.substring(0, MAX_LENGTH - 3);
                // Trim trailing single characters (e.g. "Title A" -> "Title")
                raw = raw.replace(/(\s\S)+$/, "").trim();
                finalDescription = raw + '...';
            } else {
                // Otherwise, the "smart" approach: truncate the main title and append the full suffix.
                // This preserves the (type_title) information completely.
                let raw = title.substring(0, maxTitleLength - 3);
                // Trim trailing single characters
                raw = raw.replace(/(\s\S)+$/, "").trim();
                finalDescription = `${raw}...${suffix}`;
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

    // Calculate total surcharge
    let totalSurcharge = 0;
    let surchargeCurrency = '';

    (rpcOrder?.data?.tickets || []).forEach((t: any) => {
        (t.products || []).forEach((p: any) => {
            // Check for surcharge in product data
            // Structure: p.data.surcharge.amount / currency
            const surcharge = p.data?.surcharge;
            if (surcharge && surcharge.amount) {
                totalSurcharge += Number(surcharge.amount);
                if (!surchargeCurrency && surcharge.currency) {
                    surchargeCurrency = surcharge.currency;
                }
            }
        });
    });

    // If no currency found but amount > 0 (should shouldn't happen if validation works), fallback to order currency or 'EUR' as per contract defaults
    if (totalSurcharge > 0 && !surchargeCurrency) {
        surchargeCurrency = 'EUR'; // Defaulting to EUR as per "doplatek se hradí .. v eurech" in the static text, though dynamic is better.
    }
    
    // Format surcharge string
    const surchargeString = totalSurcharge > 0 
        ? `${totalSurcharge.toLocaleString('cs-CZ')} ${surchargeCurrency}`
        : "0";

    const calculationData = {
        items: calculationItems,
        zaloha: {
            castka: payment_info?.amount != null ? `${payment_info.amount.toLocaleString('cs-CZ')} ${payment_info.currency_code || 'Kč'}` : 'Dle pokynů',
            uhraditDo: formatDate(payment_info?.deadline),
        },
        doplatek: {
            totalAmount: totalSurcharge,
            castka: totalSurcharge > 0 ? surchargeString : "Dle pokynů", // Only used if rendered
            uhraditDo: "Dle pokynů" // Static for now as usually paid on arrival
        },
        totalPriceForDisplay: totalSurcharge > 0 
            ? fallbackTotal + " + " + surchargeString + " doplatek" 
            : fallbackTotal
    };

    const dataForPdf = {
        contractNumber: payment_info?.variable_symbol?.toString() || '',
        organizer: staticOrganizerData,
        tourInfo: tourInfoData,
        client: clientData,
        calculation: calculationData,
        paymentClause: contractFeature?.payment_info || staticPaymentClause,
        termsClause: staticTermsClause,
        signatureDate: '',
    };

    const pdfBytes = await generateAgreement(dataForPdf);
    const base64Pdf = Buffer.from(pdfBytes).toString('base64');
    
    // Use contract number or order ID for filename
    const filenameCode = payment_info?.variable_symbol?.toString() || orderId.toString();

    return new Response(
      JSON.stringify({ file: base64Pdf, filename: `contract_${filenameCode}.pdf` }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    const isAuthError = error instanceof AuthError;
    const status = isAuthError ? error.status : 500;
    const message = error.message || "Unknown error";
    
    if (!isAuthError) {
        console.error("Error generating agreement PDF:", error);
    }

    return new Response(
      JSON.stringify({ error: message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: status,
      }
    );
  }
});