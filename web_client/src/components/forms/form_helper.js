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
        let currency = null;

        if (payload.ticket && payload.ticket.length > 0) {
            payload.ticket.forEach(t => {
                let ticketPrice = 0;
                
                // Spot Logic
                if (t.spotPrice) {
                    ticketPrice += parseFloat(t.spotPrice);
                }
                
                // Fields Logic
                if (t.fields) {
                    t.fields.forEach(f => {
                         // Use price on object if available (set by FormSession lookup)
                         if (f.price !== undefined) {
                             ticketPrice += parseFloat(f.price);
                         } 
                         
                         if (f.currency_code) currency = f.currency_code;
                    });
                }
                
                // If the ticket has a price (or is a valid item), count it
                // FIX: Count items even if price is 0 (User Request), BUT ONLY IF SELECTED.
                // We check if there are fields or a spot.
                const hasSelection = (t.fields && t.fields.length > 0) || t.spot || ticketPrice > 0;
                
                if (hasSelection) {
                    totalItems++;
                }
                
                if (ticketPrice > 0) {
                    totalPrice += ticketPrice;
                }
            });
        }

        return { totalPrice, totalItems, currency };
    }

}
