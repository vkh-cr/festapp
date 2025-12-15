export class FormHelper {
    static get metaFields() { return 'fields'; }
    static get metaSecret() { return 'secret'; }
    static get metaForm() { return 'form'; }
    static get metaValues() { return 'values'; }

    static getTicketInputName(ticketFieldId, index, subFieldId) {
        return `${ticketFieldId}_${index}_${subFieldId}`;
    }
    
    // Extracts data from the form DOM based on the model
    // getDataFromForm removed - Use FormDataReader.getPayload instead

    static getAvailableCurrencies(formModel) {
        const currencies = new Set();
        const fields = formModel.visibleFields || [];
        
        fields.forEach(field => {
             // Debug log
             if (field.type === 'product_type' || field.type === 'ticket') {
                 console.log(`FormHelper: Inspecting field [${field.id}] type=${field.type}`, field);
             }

             // Check top level options (product_type mapped to fields)
             if (field.data && field.data.product_type_data && field.data.product_type_data.products) {
                 field.data.product_type_data.products.forEach(p => {
                     if (p.currency) currencies.add(p.currency);
                     if (p.currencyCode) currencies.add(p.currencyCode);
                     if (p.currency_code) currencies.add(p.currency_code);
                 });
             }
             
             // Check standard options
             if (field.options) {
                 field.options.forEach(o => {
                     if (o.currency) currencies.add(o.currency);
                     if (o.currencyCode) currencies.add(o.currencyCode);
                     if (o.currency_code) currencies.add(o.currency_code);
                 });
             }
             
             // Tickets
             if (field.type === 'ticket') {
                 const subFields = field.subFields || field.fields || (field.data && field.data.fields) || [];
                 // console.log(`FormHelper: Ticket [${field.id}] subfields:`, subFields);
                 subFields.forEach(sf => {
                     // Check 'options' as FormFieldModel parses product_type_data into options
                     if (sf.options) {
                         sf.options.forEach(o => {
                             if (o.currency) currencies.add(o.currency);
                             if (o.currencyCode) currencies.add(o.currencyCode);
                             if (o.currency_code) currencies.add(o.currency_code);
                         });
                     }
                     
                     // Fallback for raw objects (if not using FormFieldModel but raw json)
                     if (sf.data && sf.data.product_type_data && sf.data.product_type_data.products) {
                         sf.data.product_type_data.products.forEach(p => {
                            if (p.currency) currencies.add(p.currency);
                            if (p.currencyCode) currencies.add(p.currencyCode);
                            if (p.currency_code) currencies.add(p.currency_code);
                         });
                     }
                     // Raw fallback level 2
                     if (sf.product_type_data && sf.product_type_data.products) {
                          sf.product_type_data.products.forEach(p => {
                            if (p.currency) currencies.add(p.currency);
                            if (p.currencyCode) currencies.add(p.currencyCode);
                            if (p.currency_code) currencies.add(p.currency_code);
                         });
                     }
                 });
             }
        });
        
        if (currencies.size === 0) {
            console.log('FormHelper: No currencies found, defaulting to CZK');
            return ['CZK']; // Default
        }
        
        console.log('FormHelper: Found currencies:', Array.from(currencies));
        
        // Ensure CZK is first if present (Priority)
        const arr = Array.from(currencies);
        if (arr.includes('CZK')) {
            return ['CZK', ...arr.filter(c => c !== 'CZK')];
        }
        return arr;
    }

    
    static replaceSpotWithId(data) {
        // Placeholder if needed, logic depends on if 'spot' is used
        return data; 
    }
    static calculatePrice(payload, formModel) {
        let totalPrice = 0;
        let totalItems = 0;
        let currency = 'CZK'; // Default fallback

        // Helper to find option and price
        const findPrice = (fieldOrSub, value) => {
             let options = fieldOrSub.options || (fieldOrSub.data && fieldOrSub.data.options) || [];
             if (fieldOrSub.type === 'product_type' && fieldOrSub.data && fieldOrSub.data.product_type_data && fieldOrSub.data.product_type_data.products) {
                  options = fieldOrSub.data.product_type_data.products;
             }
             
             if (!options || options.length === 0) return 0;
             
             const valStr = String(value);
             const opt = options.find(o => o.id != null && String(o.id) === valStr);
             
             if (opt) {
                 if (currency === 'CZK' && opt.currency) { 
                     currency = opt.currency;
                 }
                 const p = Number(opt.price);
                 return isNaN(p) ? 0 : p;
             }
             return 0;
        };

        // 1. Process Tickets
        // Payload.ticket is array of ticket objects (standardized)
        const tickets = payload.ticket || [];
        
        if (tickets.length > 0) {
             // Gather ALL ticket subfields definitions once to find prices
             // Flatten all ticket fields' subfields into one list/map
             const allSubFields = [];
             formModel.visibleFields.forEach(f => {
                 if (f.type === 'ticket') {
                     const subs = f.subFields || f.fields || (f.data && f.data.fields) || [];
                     allSubFields.push(...subs);
                 }
             });

             // Iterate tickets ONCE
             tickets.forEach((ticket, tIdx) => {
                  totalItems++; // 1 Ticket = 1 Item
                  
                  // Spot Price
                  if (ticket.spotPrice) {
                      totalPrice += ticket.spotPrice;
                  }

                  if (ticket.fields && Array.isArray(ticket.fields)) {
                      ticket.fields.forEach(fObj => {
                           // Refactored to avoid double counting from multiple keys (e.g. type + product_type)
                           // We process the Object as ONE entry.
                           
                           let subDef = null;
                           let val = null;

                           // 1. Find Definition
                           if (fObj['_subFieldId']) {
                               subDef = allSubFields.find(s => String(s.id) === String(fObj['_subFieldId']));
                           } else {
                               // Fallback: Try to infer from keys (Legacy/Unreliable)
                               const keys = Object.keys(fObj).filter(k => k !== 'currency_code' && k !== '_subFieldId');
                               if (keys.length > 0) {
                                   const key = keys[0]; // Pick first candidate
                                   subDef = allSubFields.find(s => s.type === key);
                                   val = fObj[key];
                               }
                           }

                           // 2. Calculate Price
                           if (subDef) {
                               // If val not resolved by fallback, get it from type
                               if (val === null) {
                                   val = fObj[subDef.type];
                                   // Double check: if subDef.type is 'product_type' but key was distinct?
                                   // The Reader puts value into [sub.type].
                                   // If sub.type mismatch? (Should not happen if Reader is consistent)
                                   if (val === undefined) {
                                        // Try finding any value
                                        const keys = Object.keys(fObj).filter(k => k !== 'currency_code' && k !== '_subFieldId');
                                        if (keys.length > 0) val = fObj[keys[0]];
                                   }
                               }

                               const p = findPrice(subDef, val);
                               if (p > 0) {
                                   // console.log(`Ticket [${tIdx}] Price: ${p}`);
                                   totalPrice += p;
                               }
                           }
                      });
                  }
             });
        }


        // 2. Regular Fields
        // Payload.fields is array of { ID: val }
        const pFields = payload.fields || [];
        pFields.forEach(fObj => {
             Object.keys(fObj).forEach(key => {
                  if (key === 'currency_code') return;
                  const val = fObj[key];
                  // Find field def by ID
                  const field = formModel.visibleFields.find(f => String(f.id) === key);
                  if (field) {
                      const price = findPrice(field, val);
                      if (price > 0) {
                          totalPrice += price;
                          totalItems++;
                      }
                  }
             });
        });
        
        return { totalPrice, totalItems, currency };
    }
}
