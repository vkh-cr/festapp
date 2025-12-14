import { DbForms } from './db_forms.js';

export class FormDataReader {

    /**
     * Extracts data from the DOM using standard FormData API.
     * This method is robust and does NOT rely on DOM structure (divs, classes),
     * only on input 'name' attributes.
     */
    static getPayload(form, formModel) {
        const formData = new FormData(form);
        const payload = {
            fields: [],
            ticket: [],
            [DbForms.metaSecret]: formModel.secret, 
            [DbForms.metaForm]: formModel.key
        };

        // --- Helper: Find Option for Meta Data (Currency, Price, etc.) ---
        const findOption = (fieldOrSub, value) => {
             // 1. Product Type Products
             if (fieldOrSub.type === 'product_type' && fieldOrSub.data && fieldOrSub.data.product_type_data && fieldOrSub.data.product_type_data.products) {
                 return fieldOrSub.data.product_type_data.products.find(p => String(p.id) === String(value));
             }
             // 2. Standard Options
             const options = fieldOrSub.options || (fieldOrSub.data && fieldOrSub.data.options) || [];
             if (options.length > 0) {
                 return options.find(o => String(o.id) === String(value));
             }
             return null;
        };

        // --- 1. Standard Fields (Non-Ticket) ---
        formModel.relatedFields.forEach(field => {
             if (field.type === 'ticket') return;
             
             // Check if data exists in FormData
             const vals = formData.getAll(field.id.toString());
             // Filter empty strings
             const validVals = vals.filter(v => v !== '');
             
             if (validVals.length > 0) {
                 // Join if multiple (e.g. select_many)
                 const val = validVals.length > 1 ? validVals.join(' | ') : validVals[0];
                 
                 let fieldObj = {};
                 fieldObj[field.id.toString()] = val;
                 
                 // Attach currency if single value (complex logic for multi-currency items is rare/unsupported on standard fields)
                 if (validVals.length === 1) {
                      const opt = findOption(field, validVals[0]);
                      if (opt && opt.currency) fieldObj['currency_code'] = opt.currency;
                 }

                 payload.fields.push(fieldObj);
             }
        });

        // --- 2. Ticket Fields (Parsing Keys) ---
        // Strategy: Scan all FormData keys to find ticket entries: "{ticketId}_{index}_{subId}"
        
        // Structure: ticketData[ticketId][index][subId] = [values]
        const ticketData = {}; 

        for (const [key, value] of formData.entries()) {
            if (value === '') continue; // Skip empty values early

            const match = key.match(/^(\d+)_(\d+)_(.+)$/);
            if (match) {
                const ticketId = match[1];
                const index = parseInt(match[2], 10);
                const subId = match[3];

                if (!ticketData[ticketId]) ticketData[ticketId] = [];
                if (!ticketData[ticketId][index]) ticketData[ticketId][index] = {};
                
                if (!ticketData[ticketId][index][subId]) ticketData[ticketId][index][subId] = [];
                ticketData[ticketId][index][subId].push(value);
            }
        }

        // Now iterate the model to reconstruct objects in correct order/structure
        formModel.visibleFields.forEach(field => {
            if (field.type !== 'ticket') return;

            const ticketsForField = ticketData[field.id.toString()];
            if (!ticketsForField) return;

            // Iterate recognized indices (sparse array safely)
            // ticketsForField is an Array, but might have holes if IDs non-contiguous? 
            // Actually keys matching regex index group are typically 0, 1, 2...
            // But we used array. Let's use for..in or flat iteration.
            
            // Note: Use keys to handle potential sparse indices if deletion logic doesn't re-index (but it does in builder reset)
            Object.keys(ticketsForField).forEach(indexKey => {
                const subFieldsData = ticketsForField[indexKey]; // { subId: [values] }
                const ticketObj = { fields: [] };
                let hasData = false;

                // We need definitions to know types (spot vs standard)
                const subDefinitions = field.subFields || field.fields || (field.data && field.data.fields) || [];

                subDefinitions.forEach(sub => {
                    const rawVals = subFieldsData[sub.id.toString()];
                    if (!rawVals || rawVals.length === 0) return;

                    hasData = true;

                    // --- Processing Logic Same as Before ---
                    if (sub.type === 'spot') {
                        ticketObj['spot'] = parseInt(rawVals[0]);
                    } 
                    else if (sub.type === 'product_type') {
                        // Product Types (always array of objects)
                        rawVals.forEach(v => {
                             ticketObj.fields.push(createSubFieldObj(sub, v, findOption));
                        });
                    } 
                    else {
                        // Standard Sub Fields
                        const hasPrices = (sub.options || (sub.data && sub.data.options) || []).some(o => o.price);
                        
                        if (hasPrices && rawVals.length > 1) {
                            // Multiple priced items -> separate entries
                            rawVals.forEach(v => {
                                ticketObj.fields.push(createSubFieldObj(sub, v, findOption));
                            });
                        } else {
                            // Single entry (joined or single)
                            const val = rawVals.length > 1 ? rawVals.join(' | ') : rawVals[0];
                            if (rawVals.length === 1) {
                                ticketObj.fields.push(createSubFieldObj(sub, val, findOption));
                            } else {
                                // Multi-value but single field entry (e.g. checkbox list without prices)
                                let fObj = {};
                                fObj[sub.type] = val;
                                ticketObj.fields.push(fObj);
                            }
                        }
                    }
                });

                if (hasData) {
                    payload.ticket.push(ticketObj);
                }
            });
        });

        // --- 3. Hoist Email ---
        const emailField = formModel.visibleFields.find(f => f.type === 'email');
        if (emailField) {
            const emailEntry = payload.fields.find(f => f[emailField.id.toString()] !== undefined);
            if (emailEntry) {
                payload['email'] = emailEntry[emailField.id.toString()];
            }
        }

        return payload;
    }
}

// Helper to construct the sub-field object
function createSubFieldObj(sub, val, findOptionFn) {
    let fObj = {};
    fObj[sub.type] = val;
    fObj['_subFieldId'] = sub.id; 
    
    const opt = findOptionFn(sub, val);
    if (opt) {
        const isProduct = sub.type === 'product_type' || (opt.price !== undefined && opt.price !== null && opt.price !== "" && !isNaN(Number(opt.price)));
        
        if (isProduct) {
            fObj['product_type'] = val;
        }

        if (opt.currency) {
            fObj['currency_code'] = opt.currency;
        }
    }
    return fObj;
}

