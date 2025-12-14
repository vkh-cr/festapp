import { FormHelper } from './form_helper.js';
import { FormDataReader } from './form_data_reader.js';
import { DbForms } from './db_forms.js';

export class FormSession extends EventTarget {

    constructor(formModel) {
        super();
        this.formModel = formModel;
        
        const availableCurrencies = FormHelper.getAvailableCurrencies(formModel);
        
        this.state = {
            totalPrice: 0,
            totalItems: 0,
            currency: availableCurrencies[0], // Default execution
            availableCurrencies: availableCurrencies,
            validationErrors: {} // { fieldId: errorMessage }
        };
        
        // Initialize Payload with empty structure
        this.payload = {
            fields: [],
            ticket: [],
            [DbForms.metaSecret]: formModel.secret, 
            [DbForms.metaForm]: formModel.key
        };
    }

    /**
     * Fully refreshes the payload from the DOM.
     * Use this on initialization or structure changes (add/remove ticket).
     */
    refreshPayload(form) {
        if (!form) return;
        this.payload = FormDataReader.getPayload(form, this.formModel);
        this._recalculate();
    }

    /**
     * Incrementally updates the payload based on a single input change.
     * Prevents full DOM scraping on every keystroke.
     */
    handleInput(e, form) {
        const target = e.target;
        const name = target.name;
        
        if (!name) return; // Ignore unnamed inputs
        
        // 1. Check for Ticket Field (Format: ticketId_index_subId)
        // Regex: starts with digits, underscore, digits, underscore...
        const ticketMatch = name.match(/^(\d+)_(\d+)_(.+)$/);
        
        if (ticketMatch) {
            this._handleTicketInput(target, form, ticketMatch);
        } else {
            this._handleStandardInput(target, form, name);
        }
    }

    _handleStandardInput(target, form, fieldId) {
        // Find field definition
        const field = this.formModel.visibleFields.find(f => String(f.id) === fieldId);
        if (!field) return; 

        // Get value(s)
        let val = target.value;
        const type = target.type;
        
        // For Checkboxes/SelectMany, we must read the group state
        if (type === 'checkbox' || field.type === 'select_many') {
            const checked = form.querySelectorAll(`input[name="${fieldId}"]:checked`);
            const vals = Array.from(checked).map(c => c.value);
            val = vals.length > 1 ? vals.join(' | ') : (vals[0] || '');
            
            // If empty, remove from payload? Or keep empty string?
            // FormDataReader removes empty entries usually, but keeping empty string is safe.
        }

        // Update Payload
        // Remove existing entry for this field
        const existingIdx = this.payload.fields.findIndex(f => f[fieldId] !== undefined);
        if (existingIdx !== -1) {
            this.payload.fields.splice(existingIdx, 1);
        }
        
        if (val) {
            const entry = { [fieldId]: val };
            
            // Find option for currency/meta
            const findOption = (val) => {
                 const options = field.options || (field.data && field.data.options) || [];
                 if (field.type === 'product_type' && field.data && field.data.product_type_data) {
                     return field.data.product_type_data.products.find(p => String(p.id) === String(val));
                 }
                 return options.find(o => String(o.id) === String(val));
            };
            
            // If single value, attach currency
            if (!val.includes(' | ')) {
                const opt = findOption(val);
                if (opt && opt.currency) {
                     entry['currency_code'] = opt.currency;
                }
            }
            
            this.payload.fields.push(entry);
        }
        
        this._recalculate();
    }

    _handleTicketInput(target, form, match) {
        // match: [full, fieldId, domIndex, subId]
        const fieldId = match[1];
        const domIndex = match[2];
        
        // Find the Ticket Item Container in DOM to determine actual Ticket List Index
        let ticketContainer = target.closest('.ticket-item');
        let ticketIndex = -1;

        if (ticketContainer) {
             const listContainer = ticketContainer.parentNode;
             ticketIndex = Array.from(listContainer.children).indexOf(ticketContainer);
        } else {
             // Simple Mode Fallback: Check for Ticket Field Container
             // In simple mode, fields are direct children of .ticket-field
             ticketContainer = target.closest('.ticket-field');
             if (ticketContainer && String(domIndex) === '0') {
                  ticketIndex = 0;
             }
        }
        
        if (ticketIndex === -1 || !ticketContainer) return;

        // Re-read ONLY this ticket
        const ticketObj = this._readSingleTicket(ticketContainer, fieldId, domIndex);
        
        // Update Payload Array
        // Ensure array is large enough (it should be if synced)
        // If out of bounds (race condition?), we should probably force full refresh
        if (ticketIndex >= this.payload.ticket.length) {
            // Fallback: Structure weirdness detected, just refresh all
            console.warn('FormSession: Payload out of sync with DOM, refreshing full payload.');
            this.refreshPayload(form);
            return;
        }
        
        this.payload.ticket[ticketIndex] = ticketObj;
        this._recalculate();
    }
    
    _readSingleTicket(ticketContainer, fieldId, domIndex) {
        // Replicates FormDataReader logic for one ticket item
        const ticketObj = { fields: [] };
        
        // We need field definition to know subfields
        const field = this.formModel.visibleFields.find(f => String(f.id) === String(fieldId));
        if (!field) return ticketObj;

        const subFields = field.subFields || field.fields || (field.data && field.data.fields) || [];
        
        // We can query inputs scoped to this ticket container
        subFields.forEach(sub => {
            const inputName = FormHelper.getTicketInputName(fieldId, domIndex, sub.id);
            
            // Note: Radio buttons might be tricky if unchecked?
            // querySelectorAll works.
            const inputs = ticketContainer.querySelectorAll(`[name="${inputName}"]`);
            const vals = [];
            
            inputs.forEach(inp => {
                if ((inp.type === 'radio' || inp.type === 'checkbox') && !inp.checked) return;
                if (inp.value) vals.push(inp.value);
            });
            
            if (vals.length > 0) {
                 if (sub.type === 'spot') {
                     ticketObj['spot'] = parseInt(vals[0]);
                 } else {
                     // Find options for Price/Currency check
                     const findOption = (v) => {
                         const opts = sub.options || (sub.data && sub.data.options) || [];
                         if (sub.type === 'product_type' && sub.data && sub.data.product_type_data) {
                             return sub.data.product_type_data.products.find(p => String(p.id) === String(v));
                         }
                         return opts.find(o => String(o.id) === String(v));
                     };

                     const processVal = (v) => {
                         let fObj = {};
                         fObj[sub.type] = v;
                         fObj['_subFieldId'] = sub.id;
                         
                         const opt = findOption(v);
                         if (opt) {
                             const isProduct = sub.type === 'product_type' || (opt.price !== undefined && opt.price !== null && opt.price !== "" && !isNaN(Number(opt.price)));
                             if (isProduct) fObj['product_type'] = v;
                             if (opt.currency) fObj['currency_code'] = opt.currency;
                         }
                         return fObj;
                     };

                     if (vals.length > 1) {
                         vals.forEach(v => ticketObj.fields.push(processVal(v)));
                     } else {
                         // Check if multi-option product needing array? 
                         // Logic from Reader: "If hasPrices and validVals.length > 1".
                         // Usually 1 val = 1 entry. 
                         ticketObj.fields.push(processVal(vals[0]));
                     }
                 }
            }
        });
        
        return ticketObj;
    }

    _recalculate() {
        // Debug Logging
        console.log('FormSession: Recalculating with Payload:', JSON.parse(JSON.stringify(this.payload)));
        const priceData = FormHelper.calculatePrice(this.payload, this.formModel);
        console.log('FormSession: Calculated Price Data:', priceData);
        this.updateState(priceData);
    }

    setCurrency(currencyCode) {
        if (this.state.currency !== currencyCode) {
            this.updateState({ currency: currencyCode });
        }
    }

    updateState(newState) {
        // Simple distinct check to avoid event spam?
        // Or just emit always? Let's emit always to be safe for now, 
        // as "User Typed" might not change price but might signify activity.
        // Actually, we only care about price/items for the widget.
        
        const hasChanged = 
            newState.totalPrice !== this.state.totalPrice || 
            newState.totalItems !== this.state.totalItems ||
            newState.currency !== this.state.currency;

        if (hasChanged) {
            this.state = { ...this.state, ...newState };
            this.dispatchEvent(new CustomEvent('state-changed', { detail: this.state }));
        }
    }

    setValidationErrors(errors) {
        this.state = { ...this.state, validationErrors: errors };
        this.dispatchEvent(new CustomEvent('validation-changed', { detail: this.state.validationErrors }));
    }
    
    setIsReady(ready) {
        // Force emit current state (useful for initial rendering sync)
        this.dispatchEvent(new CustomEvent('state-changed', { detail: this.state }));
    }

    get currentState() {
        return this.state;
    }
}
