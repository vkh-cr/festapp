import { PDFDocument, rgb, PageSizes, PDFFont } from "npm:pdf-lib";
import * as fontkit from "npm:fontkit";
import { encode as base64Encode } from "https://deno.land/std@0.170.0/encoding/base64.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DEFAULT_FONT_URL = "https://fonts.cdnfonts.com/s/12165/Roboto-Regular.woff";

// --- FAKE DATA ---
const fakeData = {
  contractNumber: "20250529-006",
  organizer: {
    name: "CK Hvězda mořská s.r.o.",
    ico: "23146354",
    dic: "CZ 23146354",
    address: "Nové Sady 988/2, 602 00 Brno-střed",
    email: "info@hvezdamorska.cz",
    phone: "+420 774 292 428",
    account: "2303165450/2010 (Fio Banka a.s.)",
    logoTextMain: "HVĚZDA MOŘSKÁ",
    logoTextSub: "cestovní kancelář",
  },
  tourInfo: {
    tourDate: "10.10.2025 - 17.10.2025",
    transport: "Autobusová doprava",
    departurePoint: "Brno, AN Zvonařka",
    notes: "Komfortní autobus s Wi-Fi a klimatizací.",
    tourName: "Podzimní wellness pobyt",
    placeOfStay: "Luhačovice, Hotel Alexandria",
    nights: "7",
  },
  client: {
    fullName: "Němec, Tomáš",
    address: "Polní 12, 779 00 Olomouc",
    nationality: "Česká",
    email: "tomas.nemec@example.com",
    idNumber: "QWERTY007",
    phone: "+420 721 122 334",
    dob: "12.11.1992",
    idValidUntil: "10.10.2031",
  },
  calculation: {
    items: [
      { description: "Základní cena pobytu:", pricePerPerson: 14800 },
      { description: "Příplatek (jednolůžkový pokoj):", pricePerPerson: 2800 },
      { description: "Komplexní cestovní pojištění:", pricePerPerson: 560 },
    ],
    zaloha: { castka: "9630 Kč", uhraditDo: "10.07.2025", uhrazeno: "ANO" },
    doplatek: { castka: "9630 Kč", uhraditDo: "10.09.2025", uhrazeno: "NE" },
  },
  paymentClause: "Platba zálohy se uskutečňuje převodem na účet a platba doplatku v hotovosti v eurech v místě ubytování.",
  termsClause: "Zákazník svým podpisem potvrzuje, že tato smlouva je pro něj i ostatní přihlášené osoby ZÁVAZNÁ a že mu jsou známy Všeobecné obchodní podmínky cestovní kanceláře a SOUHLASÍ s nimi. Dále souhlasí, aby veškerá korespondence byla zasílána na jeho výše uvedený email a zavazuje se svoje spolucestující včas a plně informovat. Objednavatel a jeho spolucestující též souhlasí se zpracováním jejich osobních údajů ve smyslu platných právních předpisů (GDPR).",
  signatureDate: "29.05.2025", // This will not be drawn on the signature line for date
};

// --- PDF Generation Logic ---
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
    const customFontBytes = new Uint8Array(fontData);
    font = await pdfDoc.embedFont(customFontBytes);
    // For simplicity, using the same font for bold. Ideally, embed a separate bold weight.
    boldFont = font;
  } catch (e) {
    console.error("CRITICAL: Custom font failed to load. PDF will likely have encoding errors.", e);
    throw new Error("Custom font loading failed. Cannot generate PDF.");
  }

  const colorPrimaryBlue = rgb(0.10, 0.25, 0.45);
  const colorSecondaryBlue = rgb(0.3, 0.5, 0.7);
  const fieldBorderColor = rgb(0.9, 0.9, 0.9);
  const colorSeparatorLine = rgb(0.82, 0.85, 0.92);
  const colorLabelText = rgb(0.25, 0.25, 0.25);
  const colorDataText = rgb(0.1, 0.1, 0.1);
  const colorBlack = rgb(0,0,0);

  const margin = 40;
  let y = height - margin - 15;

  const lineThickness = 0.3;
  const fieldTextPadding = 4;
  const fieldHeight = 19;

  const smallFontSize = 7.5;
  const regularFontSize = 9;
  const dataFontSize = 9;
  const sectionTitleFontSize = 12;
  const mainTitleFontSize = 16;

  const spaceBetweenRows = 7;
  const spaceBetweenSections = 18;
  const spaceBelowSectionTitle = 9;
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

  // ----- Main Title & Contract Number -----
  y -= mainTitleFontSize;
  const mainTitleBaselineY = y;
  page.drawText("SMLOUVA O ZÁJEZDU", { x: margin, y: mainTitleBaselineY, font: boldFont, size: mainTitleFontSize, color: colorPrimaryBlue });

  const contractNoText = data.contractNumber;
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


  // ----- Pořadatel zájezdu (Organizer) & Logo -----
  y = Math.min(y, contractNoFieldTopY - fieldHeight - spaceBetweenSections * 0.5);
  const orgSectionTopY = y;
  y -= regularFontSize;
  drawLabel("Pořadatel zájezdu:", margin, y, font, regularFontSize - 0.5, colorSecondaryBlue);
  y -= (spaceBelowLabel + regularFontSize + 3);

  const orgTextLineHeight = regularFontSize + 2;
  const orgDataX = margin;
  let orgTextCurrentY = y;

  page.drawText(data.organizer.name, { x: orgDataX, y: orgTextCurrentY, font: boldFont, size: regularFontSize, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`IČO: ${data.organizer.ico}  DIČ: ${data.organizer.dic}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Sídlo firmy: ${data.organizer.address}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Email: ${data.organizer.email}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Telefon: ${data.organizer.phone}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });
  orgTextCurrentY -= orgTextLineHeight;
  page.drawText(`Číslo účtu: ${data.organizer.account}`, { x: orgDataX, y: orgTextCurrentY, font: font, size: smallFontSize + 0.5, color: colorDataText });

  const logoAreaWidth = 170;
  const logoAreaX = width - margin - logoAreaWidth;
  let logoCurrentY = orgSectionTopY - regularFontSize;

  page.drawText(data.organizer.logoTextMain, { x: logoAreaX, y: logoCurrentY, font: boldFont, size: mainTitleFontSize - 4, color: colorPrimaryBlue });
  logoCurrentY -= (mainTitleFontSize - 4 + 3);
  page.drawText(data.organizer.logoTextSub, { x: logoAreaX, y: logoCurrentY, font: font, size: regularFontSize - 1.5, color: colorSecondaryBlue });
  logoCurrentY -= (regularFontSize -1.5 + 8);
  page.drawRectangle({ x: logoAreaX + 10, y: logoCurrentY - 40, width: 50, height: 40, borderColor: fieldBorderColor, borderWidth: lineThickness });

  y = Math.min(orgTextCurrentY, logoCurrentY - 40 );
  y -= (spaceBetweenSections * 0.8);
  page.drawLine({ start: { x: margin, y: y }, end: { x: width - margin, y: y }, thickness: lineThickness, color: colorSeparatorLine });

  // ----- INFORMACE K ZÁJEZDU -----
  y -= spaceBetweenSections;
  y -= sectionTitleFontSize;
  page.drawText("INFORMACE K ZÁJEZDU", { x: margin , y: y, font: boldFont, size: sectionTitleFontSize, color: colorPrimaryBlue });
  y -= spaceBelowSectionTitle;

  const col1X = margin;
  const col2X = margin + (width - 2 * margin) / 2 + 10;
  const fieldWidthHalf = (width - 2 * margin) / 2 - 12;

  y -= smallFontSize; drawLabel("Termín zájezdu:", col1X, y); drawLabel("Název zájezdu:", col2X, y);
  y -= spaceBelowLabel; const fieldTopInfo1 = y;
  drawField(data.tourInfo.tourDate, col1X, fieldTopInfo1, fieldWidthHalf, fieldHeight);
  drawField(data.tourInfo.tourName, col2X, fieldTopInfo1, fieldWidthHalf, fieldHeight);
  y = fieldTopInfo1 - fieldHeight - spaceBetweenRows;

  y -= smallFontSize; drawLabel("Doprava:", col1X, y); drawLabel("Místo pobytu:", col2X, y);
  y -= spaceBelowLabel; const fieldTopInfo2 = y;
  drawField(data.tourInfo.transport, col1X, fieldTopInfo2, fieldWidthHalf, fieldHeight);
  drawField(data.tourInfo.placeOfStay, col2X, fieldTopInfo2, fieldWidthHalf, fieldHeight);
  y = fieldTopInfo2 - fieldHeight - spaceBetweenRows;

  y -= smallFontSize; drawLabel("Nástupní místo:", col1X, y); drawLabel("Počet nocí:", col2X, y);
  y -= spaceBelowLabel; const fieldTopInfo3 = y;
  drawField(data.tourInfo.departurePoint, col1X, fieldTopInfo3, fieldWidthHalf, fieldHeight);
  drawField(data.tourInfo.nights, col2X, fieldTopInfo3, fieldWidthHalf, fieldHeight);
  y = fieldTopInfo3 - fieldHeight - spaceBetweenRows;

  y -= smallFontSize; drawLabel("Poznámka:", col1X, y);
  y -= spaceBelowLabel; const fieldTopInfo4 = y;
  drawField(data.tourInfo.notes, col1X, fieldTopInfo4, (width - 2 * margin) -4, fieldHeight);
  y = fieldTopInfo4 - fieldHeight - spaceBetweenRows;

  // ----- ZÁKAZNÍK (OBJEDNATEL) -----
  y -= spaceBetweenSections;
  y -= sectionTitleFontSize;
  page.drawText("ZÁKAZNÍK (OBJEDNATEL)", { x: margin , y: y, font: boldFont, size: sectionTitleFontSize, color: colorPrimaryBlue });
  y -= spaceBelowSectionTitle;

  const clientColWidth = (width - 2 * margin) / 3 - 8;

  y -= smallFontSize; drawLabel("Příjmení, jméno:", col1X, y);
  drawLabel("Datum nar.:", col1X + clientColWidth * 2 + 16, y);
  y -= spaceBelowLabel; const clientFieldTop1 = y;
  drawField(data.client.fullName, col1X, clientFieldTop1, clientColWidth * 2 + 8, fieldHeight);
  drawField(data.client.dob, col1X + clientColWidth * 2 + 16, clientFieldTop1, clientColWidth, fieldHeight);
  y = clientFieldTop1 - fieldHeight - spaceBetweenRows;

  y -= smallFontSize; drawLabel("Adresa včetně PSČ:", col1X, y);
  y -= spaceBelowLabel; const clientFieldTop2 = y;
  drawField(data.client.address, col1X, clientFieldTop2, (width - 2 * margin)-4, fieldHeight);
  y = clientFieldTop2 - fieldHeight - spaceBetweenRows;

  y -= smallFontSize; drawLabel("Státní příslušnost:", col1X, y);
  drawLabel("Číslo OP/pasu:", col1X + clientColWidth + 8, y);
  drawLabel("Platný do:", col1X + (clientColWidth + 8) * 2, y);
  y -= spaceBelowLabel; const clientFieldTop3 = y;
  drawField(data.client.nationality, col1X, clientFieldTop3, clientColWidth, fieldHeight);
  drawField(data.client.idNumber, col1X + clientColWidth + 8, clientFieldTop3, clientColWidth, fieldHeight);
  drawField(data.client.idValidUntil, col1X + (clientColWidth + 8) * 2, clientFieldTop3, clientColWidth, fieldHeight);
  y = clientFieldTop3 - fieldHeight - spaceBetweenRows;

  y -= smallFontSize; drawLabel("Email:", col1X, y);
  drawLabel("Tel. číslo:", col2X, y);
  y -= spaceBelowLabel; const clientFieldTop4 = y;
  drawField(data.client.email, col1X, clientFieldTop4, fieldWidthHalf, fieldHeight);
  drawField(data.client.phone, col2X, clientFieldTop4, fieldWidthHalf, fieldHeight);
  y = clientFieldTop4 - fieldHeight - spaceBetweenRows;

  // ----- CENA A PLATBA -----
  y -= spaceBetweenSections;
  y -= sectionTitleFontSize;
  page.drawText("CENA A PLATBA", { x: margin, y: y, font: boldFont, size: sectionTitleFontSize, color: colorPrimaryBlue });
  y -= spaceBelowSectionTitle;

  const contentW = width - 2*margin;
  const colDescW = contentW * 0.22;
  const colPrice1W = contentW * 0.12;
  const colNumPersW = contentW * 0.07;
  const colTotalItemW = contentW * 0.12;
  const colPayLabelOuterW = contentW * 0.07;
  const colPayDetailsContainerW = contentW * 0.40;

  let currentTableX = margin;
  const headerLabelY = y - smallFontSize;

  drawLabel("KALKULACE", currentTableX + colDescW/2 - font.widthOfTextAtSize("KALKULACE", smallFontSize)/2, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentTableX += colDescW;
  drawLabel("Cena za 1 osobu", currentTableX + colPrice1W/2 - font.widthOfTextAtSize("Cena za 1 osobu", smallFontSize)/2, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentTableX += colPrice1W;
  drawLabel("Počet osob", currentTableX + colNumPersW/2 - font.widthOfTextAtSize("Počet osob", smallFontSize)/2, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentTableX += colNumPersW;
  drawLabel("Celkem v Kč", currentTableX + colTotalItemW/2 - font.widthOfTextAtSize("Celkem v Kč", smallFontSize)/2, headerLabelY, boldFont, smallFontSize, colorBlack);
  currentTableX += colTotalItemW;
  drawLabel("PLATBA", currentTableX + (colPayLabelOuterW + colPayDetailsContainerW)/2 - font.widthOfTextAtSize("PLATBA", smallFontSize)/2, headerLabelY, boldFont, smallFontSize, colorBlack);
  y -= (smallFontSize + spaceBelowLabel + 4);

  let totalCalculatedPrice = 0;
  const paymentMiniFieldDataFontSize = smallFontSize;
  const paymentMiniFieldLabelFontSize = smallFontSize - 1;
  const paymentMiniFieldGap = 4;
  const paymentMiniTextPadding = 3;

  // Define the vertical offset for mini-labels to sit just above the mini-fields
  const MINI_LABEL_OFFSET_ABOVE_FIELD_TOP = 2; // Baseline of label text will be this many points above the field's top border.

  function drawPaymentMiniField(text: string, x: number, fieldTopY: number, fieldWidth: number, fHeight: number, align: 'left' | 'center' | 'right' = 'left') {
    page.drawRectangle({ x, y: fieldTopY - fHeight, width: fieldWidth, height: fHeight, borderColor: fieldBorderColor, borderWidth: lineThickness });
    let textX = x + paymentMiniTextPadding;
    const textWidthVal = font.widthOfTextAtSize(text, paymentMiniFieldDataFontSize);
    if (align === 'center') textX = x + (fieldWidth - textWidthVal) / 2;
    else if (align === 'right') textX = x + fieldWidth - textWidthVal - paymentMiniTextPadding;
    const textY = getTextBaselineInField(fieldTopY, fHeight, paymentMiniFieldDataFontSize);
    page.drawText(text, { x: textX, y: textY, font: font, size: paymentMiniFieldDataFontSize, color: colorDataText });
  }

  data.calculation.items.forEach((item: any, index: number) => {
    y -= fieldHeight;
    currentTableX = margin;
    totalCalculatedPrice += item.pricePerPerson;
    drawField(item.description, currentTableX, y, colDescW, fieldHeight, 'left');
    currentTableX += colDescW;
    drawField(item.pricePerPerson.toLocaleString('cs-CZ'), currentTableX, y, colPrice1W, fieldHeight, 'right');
    currentTableX += colPrice1W;
    drawField("1", currentTableX, y, colNumPersW, fieldHeight, 'center');
    currentTableX += colNumPersW;
    drawField(item.pricePerPerson.toLocaleString('cs-CZ'), currentTableX, y, colTotalItemW, fieldHeight, 'right');
    currentTableX += colTotalItemW;

    const paymentDataFieldTopY = y;
    const paymentMiniFieldWidth = (colPayDetailsContainerW - (2 * paymentMiniFieldGap)) / 3;
    // Position mini-labels ABOVE the data fields they describe
    // The baseline of the label text will be slightly above the top border of the mini-field.
    const miniLabelBaselineY = paymentDataFieldTopY + MINI_LABEL_OFFSET_ABOVE_FIELD_TOP;

    let paymentAreaStartX = currentTableX + colPayLabelOuterW;

    if (index === 0) {
        drawLabel("Záloha:", currentTableX + 3, paymentDataFieldTopY - (fieldHeight-regularFontSize)/2, font, regularFontSize -1, colorBlack);

        let miniFieldX = paymentAreaStartX;
        drawLabel("Částka", miniFieldX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Částka", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY, font, paymentMiniFieldLabelFontSize);
        drawPaymentMiniField(data.calculation.zaloha.castka, miniFieldX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'right');
        miniFieldX += paymentMiniFieldWidth + paymentMiniFieldGap;
        drawLabel("Uhradit do", miniFieldX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Uhradit do", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.zaloha.uhraditDo, miniFieldX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'center');
        miniFieldX += paymentMiniFieldWidth + paymentMiniFieldGap;
        drawLabel("Uhrazeno", miniFieldX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Uhrazeno", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.zaloha.uhrazeno, miniFieldX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'center');
    } else if (index === 1 && data.calculation.items.length > 1) {  // Ensure this is for the second item if more than one exists
        drawLabel("Doplatek:", currentTableX + 3, paymentDataFieldTopY - (fieldHeight-regularFontSize)/2, font, regularFontSize -1, colorBlack);
        let miniFieldX = paymentAreaStartX;
        drawLabel("Částka", miniFieldX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Částka", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.doplatek.castka, miniFieldX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'right');
        miniFieldX += paymentMiniFieldWidth + paymentMiniFieldGap;
        drawLabel("Uhradit do", miniFieldX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Uhradit do", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.doplatek.uhraditDo, miniFieldX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'center');
        miniFieldX += paymentMiniFieldWidth + paymentMiniFieldGap;
        drawLabel("Uhrazeno", miniFieldX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Uhrazeno", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.doplatek.uhrazeno, miniFieldX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'center');
    } else {
        // For other items, draw an empty spanned field in the payment area
        drawField("", currentTableX, paymentDataFieldTopY, colPayLabelOuterW + colPayDetailsContainerW, fieldHeight);
    }
    y -= (spaceBetweenRows * 0.6);
  });

   // If there's only one item, we still need to show "Doplatek" details,
   // assuming "Záloha" was shown with the first (and only) item.
   // This logic might need review based on how many rows 'doplatek' should occupy if items > 1.
   // The original code had a separate block for data.calculation.items.length === 1 for doplatek.
   // If items.length > 1, doplatek is handled by index === 1. This is fine.
   // The following block handles `doplatek` if there's ONLY ONE item in total,
   // meaning `zaloha` was drawn at index 0, and `doplatek` needs its own row.
   if (data.calculation.items.length === 1) {
        y -= fieldHeight;
        currentTableX = margin + colDescW + colPrice1W + colNumPersW + colTotalItemW;
        const paymentDataFieldTopY = y;
        const paymentMiniFieldWidth = (colPayDetailsContainerW - 2*paymentMiniFieldGap)/3;
        const miniLabelBaselineY = paymentDataFieldTopY + MINI_LABEL_OFFSET_ABOVE_FIELD_TOP;

        drawLabel("Doplatek:", currentTableX + 3, paymentDataFieldTopY - (fieldHeight-regularFontSize)/2, font, regularFontSize-1, colorBlack);
        let payX = currentTableX + colPayLabelOuterW;
        drawLabel("Částka", payX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Částka", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.doplatek.castka, payX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'right');
        payX += paymentMiniFieldWidth + paymentMiniFieldGap;
        drawLabel("Uhradit do", payX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Uhradit do", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.doplatek.uhraditDo, payX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'center');
        payX += paymentMiniFieldWidth + paymentMiniFieldGap;
        drawLabel("Uhrazeno", payX + paymentMiniFieldWidth/2 - font.widthOfTextAtSize("Uhrazeno", paymentMiniFieldLabelFontSize)/2, miniLabelBaselineY);
        drawPaymentMiniField(data.calculation.doplatek.uhrazeno, payX, paymentDataFieldTopY, paymentMiniFieldWidth, fieldHeight, 'center');

        // Draw empty fields for the calculation part on this "Doplatek" row
        drawField("", margin, paymentDataFieldTopY, colDescW + colPrice1W + colNumPersW + colTotalItemW, fieldHeight);
        y -= (spaceBetweenRows * 0.6);
   }


  // Celkem Line
  y -= (fieldHeight + 6);  // Add a bit more space before "Celkem"
  const celkemFieldTopY = y;
  currentTableX = margin;
  const celkemLabelText = "Celkem:";
  const celkemLabelWidth = boldFont.widthOfTextAtSize(celkemLabelText, regularFontSize);
  // Align "Celkem:" label to the right of the third calculation column
  const celkemLabelX = margin + colDescW + colPrice1W + colNumPersW - celkemLabelWidth - 15;
  drawLabel(celkemLabelText, celkemLabelX, celkemFieldTopY - (fieldHeight-regularFontSize)/2, boldFont, regularFontSize, colorBlack);

  currentTableX = margin + colDescW + colPrice1W + colNumPersW;  // Start of the "Celkem v Kč" field for the total
  drawField(totalCalculatedPrice.toLocaleString('cs-CZ'), currentTableX, celkemFieldTopY, colTotalItemW, fieldHeight, 'right', boldFont, regularFontSize, colorBlack);
  currentTableX += colTotalItemW;
  // Empty field for the payment details part of the "Celkem" row
  drawField("", currentTableX, celkemFieldTopY, colPayLabelOuterW + colPayDetailsContainerW, fieldHeight);
  y = celkemFieldTopY - fieldHeight - spaceBetweenRows;

  // Payment Clause
  y -= (fieldHeight * 0.5);
  const paymentClauseLines = wrapText(data.paymentClause, font, smallFontSize, width - 2*margin);
  paymentClauseLines.forEach(line => {
    const textWidth = font.widthOfTextAtSize(line, smallFontSize);
    page.drawText(line, { x: margin + (width - 2*margin - textWidth)/2, y: y, font: font, size: smallFontSize, color: colorLabelText});
    y -= (smallFontSize + 3);
  });

  // Terms Clause
  y -= (spaceBetweenRows * 1.5);
  const termsLineHeight = smallFontSize + 2.5;
  const termsLines = wrapText(data.termsClause, font, smallFontSize, width - 2*margin - 10);
  for (const line of termsLines) {
    if (y < margin + 70) { // Ensure there's enough space for signatures
        // Potentially add new page here if terms are too long
        break;
    }
    page.drawText(line, { x: margin + 5, y: y, font: font, size: smallFontSize, color: colorDataText, lineHeight: termsLineHeight });
    y -= termsLineHeight;
  }

  // Signatures
  y = margin + 35; // Fixed position from bottom for signatures
  const signatureLineWidth = (width - 2 * margin - 40) / 2;  // Width for each signature line
  const signatureLineY = y;
  const signatureLabelBaselineY = y - smallFontSize - 3; // Position label below the line

  const podpisZakaznikaLabelText = "Podpis zákazníka";
  page.drawLine({ start: {x: margin, y: signatureLineY}, end: {x: margin + signatureLineWidth, y: signatureLineY}, thickness: lineThickness, color: colorBlack });
  drawLabel(podpisZakaznikaLabelText, margin + (signatureLineWidth - font.widthOfTextAtSize(podpisZakaznikaLabelText,smallFontSize))/2 , signatureLabelBaselineY, font, smallFontSize, colorBlack);

  const dateFieldX = width - margin - signatureLineWidth;
  page.drawLine({ start: {x: dateFieldX, y: signatureLineY}, end: {x: dateFieldX + signatureLineWidth, y: signatureLineY}, thickness: lineThickness, color: colorBlack });
  const datumLabel = "Datum"; // Label for the date field
  drawLabel(datumLabel, dateFieldX + (signatureLineWidth - font.widthOfTextAtSize(datumLabel,smallFontSize))/2, signatureLabelBaselineY, font, smallFontSize, colorBlack);
  // REMOVED: Do not pre-fill the signature date. The line and "Datum" label remain.
  // page.drawText(data.signatureDate, {x: dateFieldX + (signatureLineWidth - font.widthOfTextAtSize(data.signatureDate,regularFontSize))/2, y: signatureLineY + 3, font: font, size: regularFontSize, color: colorDataText});

  return pdfDoc.save();
}

function wrapText(text: string, currentFont: PDFFont, fontSize: number, maxWidth: number): string[] {
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
        // Fallback for any font metric errors, though less likely with widthOfTextAtSize
        console.warn("Warning: Error during text wrapping width calculation.", e);
        // Simple split if error occurs, try to push current line and start new one
        if (currentLine.length > word.length || lines.length === 0 ) lines.push(currentLine);
        currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    // const requestData = await req.json(); // If you were to pass data in request
    const pdfBytes = await generateAgreement(fakeData); // Using fakeData for now
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