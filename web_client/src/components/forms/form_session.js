import { FormHelper } from './form_helper.js';
import { FormDataReader } from './form_data_reader.js';
import { DbForms } from './db_forms.js';
import { FormStrings } from './form_strings.js';
import { BlueprintStrings } from '../blueprint/blueprint_strings.js';

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
            validationErrors: {}, // { fieldId: errorMessage }
            tickets: [], // State Inversion: Single Source of Truth for Tickets
            fields: new Map() // State Inversion: Single Source of Truth for Standard Fields
        };
        
        // Initialize Payload with empty structure
        this.payload = {
            fields: [],
            ticket: [],
            [DbForms.metaSecret]: formModel.secret, 
            [DbForms.metaForm]: formModel.key
        };

        // --- Max Tickets Logic ---
        // Default to 1 if not specified (User Request)
        this.maxTickets = 1; 
        if (formModel && formModel.relatedFields) {
            const ticketField = formModel.relatedFields.find(f => f.type === 'ticket');
            if (ticketField && ticketField.data && ticketField.data.max_tickets) {
                const limit = parseInt(ticketField.data.max_tickets, 10);
                if (!isNaN(limit) && limit > 0) {
                    this.maxTickets = limit;
                }
            }
        }


        // UI State for persistence across re-renders (not part of payload)
        this.uiState = new Map();
        
        // --- Fix: Request Serialization Queue ---
        this._spotQueue = Promise.resolve();
    }

    getComponentState(key) {
        return this.uiState.get(key);
    }

    setComponentState(key, value) {
        this.uiState.set(key, value);
    }

    /**
     * Fully refreshes the payload from the DOM.
     * Use this on initialization or structure changes (add/remove ticket).
     */
    refreshPayload(form) {
        if (!form) return;
        
        // 1. Standard Fields (Initial Srape / Sync)
        if (this.state.fields.size === 0) {
           const scrapedPayload = FormDataReader.getPayload(form, this.formModel);
            
            // Populate State from Scraped Payload
            scrapedPayload.fields.forEach(fieldObj => {
                const key = Object.keys(fieldObj).find(k => k !== 'currency_code');
                if (key) {
                    this.state.fields.set(key, fieldObj[key]);
                }
            });
        }
        
        // Rebuild Payload from State
        // (fields logic moved to _syncPayloadFromState)
        
        // 2. Tickets: Sync from State (Strict Source of Truth)
        // If state.tickets is empty but scraped has tickets (Initial Load), adopt scraped?
        // Better: On initial load, we might need to populate state from DOM or just start empty.
        // Let's assume on refresh, we respect the current state if populated, 
        // OR if it's the very first load, we might want to parse?
        // For strictly "Split Brain" prevention, we rely on State.
        
        this._syncPayloadFromState();
        
        this._recalculate();
    }

    resetIncompatibleCurrencyFields(newCurrency) {
        if (!newCurrency) return;

        let hasChanges = false;

        // 1. Check Tickets
        this.state.tickets.forEach(ticket => {
             // Check spot
             // We don't have full spot model here easily without lookup, 
             // but usually spot price is fixed or adaptable.
             // If spot has specific currency, needed logic? 
             // Ideally we just clear products.

             if (ticket.fields) {
                 const fieldsToRemove = [];
                 ticket.fields.forEach((valObj, idx) => {
                     let itemCurrency = valObj.currency_code;
                     
                     if (!itemCurrency) {
                         const ticketFieldDef = this.formModel.visibleFields.find(f => f.type === 'ticket') || (this.formModel.relatedFields && this.formModel.relatedFields.find(f => f.type === 'ticket'));
                         if (ticketFieldDef) {
                             const subFields = ticketFieldDef.subFields || ticketFieldDef.fields || (ticketFieldDef.data && ticketFieldDef.data.fields) || [];
                             const subDef = subFields.find(s => String(s.id) === String(valObj._subFieldId));
                             
                             if (subDef) {
                                 // Look up option (Inclusive Strategy)
                                 const val = valObj[subDef.type];
                                 let found = null;
                                 
                                 if (subDef.type === 'product_type' && subDef.data && subDef.data.product_type_data) {
                                      found = subDef.data.product_type_data.products.find(p => String(p.id) === String(val));
                                 }
                                 if (!found) {
                                     const options = subDef.options || (subDef.data && subDef.data.options) || [];
                                     found = options.find(o => String(o.id) === String(val));
                                 }

                                 if (found && found.currency) {
                                     itemCurrency = found.currency;
                                     valObj.currency_code = itemCurrency;
                                 }
                             }
                         }
                     }
                     
                     // DEBUG: Trace logic
                     // console.error(`[FormSession] Check Currency: Item=${itemCurrency} New=${newCurrency}`);
                     
                     if (itemCurrency && itemCurrency !== newCurrency) {
                         fieldsToRemove.push(idx);
                     }
                 });
                 
                 // Remove incompatible fields (reverse order)
                 for (let i = fieldsToRemove.length - 1; i >= 0; i--) {
                     ticket.fields.splice(fieldsToRemove[i], 1);
                     hasChanges = true;
                 }
                 
                 // Auto-Select Logic REMOVED per user request.
     }
 });

        // 2. Check Standard Fields
        for (const [key, val] of this.state.fields.entries()) {
             // ... standard fields auto-select logic if needed ...
             // For now, focused on Ticket Products as per user report.
             
             // How to know currency of a simple value?
             // We need to look up the option again... inefficient but correct.
             const fieldDef = this.formModel.visibleFields.find(f => String(f.id) === String(key));
             if (fieldDef) {
                  // Helper to find option logic repeated from _syncPayloadFromState
                  // Refactor to helper?
                  const findOption = (v) => {
                     const options = fieldDef.options || (fieldDef.data && fieldDef.data.options) || [];
                     if (fieldDef.type === 'product_type' && fieldDef.data && fieldDef.data.product_type_data) {
                         return fieldDef.data.product_type_data.products.find(p => String(p.id) === String(v));
                     }
                     return options.find(o => String(o.id) === String(v));
                  };
                  
                  // Handle multi-values?
                  if (typeof val === 'string' && val.includes(' | ')) {
                      // complex... for now assume if ANY part is incompatible, we clear?
                      // Or just clear all on currency switch as requested?
                      // "deselect all products if you switch the currency"
                      // Safest to just clear everything that MIGHT be currency bound.
                  } else {
                      const opt = findOption(val);
                      if (opt && opt.currency && opt.currency !== newCurrency) {
                          this.state.fields.delete(key);
                          hasChanges = true;
                      }
                  }
             }
        }

        if (hasChanges) {
            this._syncPayloadFromState();
            this._recalculate();
            this._emitStateChanged();
        }
    }
    
    // --- State Inversion: Ticket Management ---

    addTicket(ticketData = {}) {
        // Ensure structure
        const nextIndex = this.state.tickets.length; // Use length as index or unique ID? 
        // Ideally we need unique IDs for rendering, but array index for payload is fine if ordered.
        // We use a simple object for now.
        // Check Limit
        if (this.state.tickets.length >= this.maxTickets) {
            console.warn("[FormSession] Max tickets reached");
            throw new Error(BlueprintStrings.maxTicketsReached);
        }

        const newTicket = {
            id: Date.now() + Math.random(), // Temporary ID for UI keys if needed (not payload)
            fields: [], // Array of field values
            ...ticketData
        };

        // --- Auto-Selection Logic (User Request) ---
        // Only if adding new tickets is enabled (maxTickets > 1)
        if (this.maxTickets > 1) {
            // Find Ticket Field Definition
            // Prefer visibleFields (UI Model) for options, fallback to relatedFields
            let ticketFieldDef = this.formModel.visibleFields.find(f => f.type === 'ticket');
            if (!ticketFieldDef && this.formModel.relatedFields) {
                 ticketFieldDef = this.formModel.relatedFields.find(f => f.type === 'ticket');
            }
            
            if (ticketFieldDef) {
                const subFields = ticketFieldDef.subFields || ticketFieldDef.fields || (ticketFieldDef.data && ticketFieldDef.data.fields) || [];
                
                subFields.forEach(subDef => {
                    // Check if already has value (from ticketData)
                    if (newTicket.fields.some(f => String(f._subFieldId) === String(subDef.id))) return;
                    
                    // Logic: Auto-select first valid option if available
                    // Use options or product_type_data
                    let options = subDef.options || (subDef.data && subDef.data.options) || [];
                     if (subDef.type === 'product_type' && subDef.data && subDef.data.product_type_data) {
                         options = subDef.data.product_type_data.products;
                     }
                     
                     // Filter by Currency
                     const currency = this.state.currency;
                     const validOptions = options.filter(o => !o.currency || o.currency === currency);
                     
                     

                     if (validOptions.length > 0) {
                         // Select first one as default
                         const autoSelect = validOptions[0];
                         
                         // Use ID if available, otherwise fallback to title (matches RadioFieldBuilder logic)
                         const autoSelectValue = (autoSelect.id !== undefined && autoSelect.id !== null) ? autoSelect.id : autoSelect.title;
                         
                         

                         const valObj = {
                             [subDef.type]: autoSelectValue,
                             _subFieldId: subDef.id,
                             currency_code: currency
                         };
                         
                         if (autoSelect.price !== undefined) valObj.price = autoSelect.price;
                         if (subDef.type === 'product_type') valObj.product_type = autoSelectValue;
                         
                         newTicket.fields.push(valObj);
                     }
                });
            }
        }
        
        this.state.tickets.push(newTicket);
        this._syncPayloadFromState();
        this._recalculate();
        
        this._emitStateChanged();
    }

    async removeTicket(index) {
        if (index >= 0 && index < this.state.tickets.length) {
            const ticket = this.state.tickets[index];
            
            // Sync with Backend: Deselect Spot if present
            if (ticket.spot) {
                try {
                    await DbForms.selectSpot(this.formModel.key, this.formModel.secret, ticket.spot, false);
                } catch (e) {
                    console.error("FormSession: Failed to deselect spot on removal", e);
                    // Continue anyway to sync local state? Or throw?
                    // User likely wants the ticket gone visually.
                }
            }

            this.state.tickets.splice(index, 1);
            this._syncPayloadFromState();
            this._recalculate();
            this._emitStateChanged();
        } else {
            console.error(`[FormSession] removeTicket failed: index ${index} out of bounds`);
        }
    }

    updateTicket(index, fieldId, value) {

        if (index < 0 || index >= this.state.tickets.length) return;
        
        const ticket = this.state.tickets[index];
        // Value structure: { type: 'x', value: 'y', _subFieldId: 'z' }
        // We need to support the value structure expected by payload.
        
        // Find existing field entry
        const existingIdx = ticket.fields.findIndex(f => f._subFieldId === fieldId || f._subFieldId === value?._subFieldId);
        
        if (existingIdx !== -1) {
             if (value === null || value === undefined) {
                 ticket.fields.splice(existingIdx, 1); // Remove
             } else {
                 ticket.fields[existingIdx] = value; // Update
             }
        } else if (value !== null && value !== undefined) {
             ticket.fields.push(value); // Add
        }
        // Special Case: Spot/Seat
        if (value && (value.type === 'spot' || value.spot !== undefined)) {
             ticket.spot = value.value || value.spot;
             if (value.price !== undefined) ticket.spotPrice = value.price;
             // Ensure product model/currency is tracked if needed? 
             // FormHelper.calculatePrice handles spotPrice on ticket object.
        }
        
        this._syncPayloadFromState();
        this._recalculate(); // Price update
        this._emitStateChanged();
    }

    async toggleSpot(spotObjOrId, isSelecting) {
        const spotId = typeof spotObjOrId === 'object' ? spotObjOrId.id : spotObjOrId;
        const spotObj = typeof spotObjOrId === 'object' ? spotObjOrId : { id: spotId };

        // Optimistic State Update Helper
        const updateState = (selecting) => {
             if (selecting) {
                 // ADD Ticket
                 const exists = this.state.tickets.some(t => String(t.spot) === String(spotId));
                 if (!exists) {
                     const ticketData = { 
                         spot: spotId,
                         spotName: spotObj.title || spotObj.name || `Spot ${spotId}`
                     };
                     
                     const product = spotObj.productModel || spotObj.product;
                     if (product) {
                         if (product.price) ticketData.spotPrice = product.price;
                     }
                     
                     this.addTicket(ticketData);
                 }
             } else {
                 // REMOVE Ticket
                 const idx = this.state.tickets.findIndex(t => String(t.spot) === String(spotId));
                 if (idx !== -1) {
                     this.removeTicket(idx);
                 }
             }
        };

        // Enqueue the operation
        const task = async () => {
             // 1. Apply Change Optimistically
            updateState(isSelecting);

            try {
                 const currentSecret = this.formModel.secret;
                 console.log(`[FormSession] Executing toggleSpot queue task. Spot: ${spotId}, Action: ${isSelecting ? 'Select' : 'Deselect'}, Secret: ${currentSecret}`);

                 // 2. Sync with Backend
                 // ALWAYS use the latest secret from the model (which might have been updated by previous queue task)
                 const resultData = await DbForms.selectSpot(this.formModel.key, currentSecret, spotId, isSelecting);
                 
                 // 3. Update Secret if provided (Handover)
                 // REMOVED: User SQL confirms select_spot does NOT return a secret.
                 // We strictly rely on the secret established at the start (get_blueprint).
                 // This guarantees (Select Secret) === (Deselect Secret).
                 
                 return resultData;
            } catch (e) {
                 console.error("FormSession: Spot selection failed, reverting state", e);
                 
                 // 3. Revert on Failure
                 updateState(!isSelecting); 
                 throw e; 
            }
        };

        // Append to Queue
        // We catch inside the chain to ensure the queue keeps moving, 
        // but we return a promise that rejects/resolves based on OUR task for the caller.
        
        // This constructs a "Branch" off the main queue for the caller, but the main queue 
        // 'this._spotQueue' MUST NOT break if 'task' fails.
        
        // Correct Pattern:
        // Main Queue = Main Queue.then(() => task().catch(swallow));
        // Caller gets: task();
        
        // Wait, we need to enforce ORDER.
        // So 'task' must not start until Main Queue resolves.
        
        const enqueuedTask = this._spotQueue.then(() => task());
        
        // Update Main Queue to wait for this new task (regardless of success/fail)
        this._spotQueue = enqueuedTask.catch(() => {});
        
        return enqueuedTask;
    }

    // --- Critical: Sync Payload from State ---
    _syncPayloadFromState() {
        // Rebuilds this.payload.ticket from this.state.tickets
        // Never relies on DOM scraping for tickets.
        
        this.payload.ticket = this.state.tickets.map((t, i) => {
            const rawFields = t.fields || [];
            const processedFields = [];
            
            rawFields.forEach(fObj => {
                // Check if any value in fObj contains pipe (Multi-Choice)
                // fObj structure: { [type]: val, _subFieldId: id, ... }
                // We know 'type' is dynamic.
                // Robust check: Look for string with pipe
                let hasPipe = false;
                let pipeVal = null;
                let pipeKey = null;
                
                Object.entries(fObj).forEach(([k, v]) => {
                    if (k === '_subFieldId' || k === 'currency_code') return;
                    if (typeof v === 'string' && v.includes(' | ')) {
                        hasPipe = true;
                        pipeVal = v;
                        pipeKey = k;
                    }
                });
                
                if (hasPipe && pipeVal) {
                    // Split and Expand
                    const parts = pipeVal.split(' | ');
                    parts.forEach(part => {
                        // Clone object
                        const newEntry = { ...fObj };
                        // Replace pipe value with single part
                        newEntry[pipeKey] = part;
                        
                        // Explicit fix for SQL
                        if (newEntry.product_type === pipeVal) newEntry.product_type = part; 

                        // Re-hydrate Price (Critical for Multi-Select)
                        // Because "A | B" lookup failed in handleInput, we must lookup A and B individually here.
                        try {
                            // Find Definition
                             let ticketFieldDef = this.formModel.visibleFields.find(f => f.type === 'ticket');
                             if (!ticketFieldDef && this.formModel.relatedFields) {
                                  ticketFieldDef = this.formModel.relatedFields.find(f => f.type === 'ticket');
                             }
                             if (ticketFieldDef) {
                                 const subFields = ticketFieldDef.subFields || ticketFieldDef.fields || (ticketFieldDef.data && ticketFieldDef.data.fields) || [];
                                 const subDef = subFields.find(s => String(s.id) === String(fObj._subFieldId));
                                 
                                 if (subDef) {
                                     // Find Option (Inclusive Logic)
                                     let opt = null;
                                     if (subDef.type === 'product_type' && subDef.data && subDef.data.product_type_data) {
                                          opt = subDef.data.product_type_data.products.find(p => String(p.id) === String(part));
                                     }
                                     if (!opt) {
                                         const options = subDef.options || (subDef.data && subDef.data.options) || [];
                                         opt = options.find(o => String(o.id) === String(part));
                                     }

                                     if (opt && opt.price !== undefined) {
                                         newEntry.price = parseFloat(opt.price);
                                     }
                                     if (opt && opt.currency) {
                                         newEntry.currency_code = opt.currency;
                                     }
                                 }
                             }
                        } catch (e) {
                            console.warn('[FormSession] Failed to re-hydrate price for multi-select part:', part, e);
                        }
                        
                        processedFields.push(newEntry);
                    });
                } else {
                     processedFields.push(fObj);
                }
            });

            const ticketObj = {
                fields: processedFields,
                _ticketIndex: i
            };
            
            // Map special top-level props expected by Backend/Calc
            if (t.spot) ticketObj.spot = t.spot;
            if (t.spotPrice) ticketObj.spotPrice = t.spotPrice;
            if (t.spotName) ticketObj.spotName = t.spotName;
            
            return ticketObj;
        });
        
        // console.log('FormSession: Synced Payload from State:', this.payload.ticket);

        // --- Standard Fields Sync ---
        this.payload.fields = [];
        for (const [fieldId, value] of this.state.fields.entries()) {
            if (value === null || value === undefined || value === '') continue;

            const fieldDef = this.formModel.visibleFields.find(f => String(f.id) === String(fieldId));
            if (!fieldDef) continue; // Should not happen

            const entry = { [fieldId]: value };
            
             // Currency Logic (Shared with old scraper)
            if (typeof value === 'string' && !value.includes(' | ')) {
                 const findOption = (val) => {
                     const options = fieldDef.options || (fieldDef.data && fieldDef.data.options) || [];
                      if (fieldDef.type === 'product_type' && fieldDef.data && fieldDef.data.product_type_data) {
                         return fieldDef.data.product_type_data.products.find(p => String(p.id) === String(val));
                     }
                     return options.find(o => String(o.id) === String(val));
                 };
                 const opt = findOption(value);
                 if (opt && opt.currency) {
                     entry['currency_code'] = opt.currency;
                 }
            }
            // TODO: Multi-value currency logic? (Usually ignored for Checkboxes)
            
            this.payload.fields.push(entry);
        }
    }

    /**
     * Incrementally updates the payload based on a single input change.
     * Prevents full DOM scraping on every keystroke.
     */
    handleInput(e, form) {
        if (!e.target) return;
        const target = e.target;
        const name = target.name || (target.getAttribute && target.getAttribute('name'));
        
        if (!name) {
             // Check if it's a structural update (e.g. from TicketFieldBuilder container)
             // identified by dataset.fieldId
             if (target.dataset && target.dataset.fieldId) {
                  // For strict state inversion, we should ideally know WHAT changed.
                  // But for ticket Add/Remove, we use specific methods.
                  // This is likely for legacy or dynamic field containers.
                  
                  // REFACTOR: We no longer rescrape on generic structural events.
                  // Components must call addTicket/removeTicket explicitly.
             }
             return; 
        }
        
        // 1. Check for Structured Data Attributes (Robust)
        if (target.dataset.ticketId && target.dataset.index !== undefined && target.dataset.subId) {
             const ticketId = target.dataset.ticketId;
             const index = parseInt(target.dataset.index, 10);
             const subId = target.dataset.subId;
             
             // Directly call refactored handler with pre-parsed data
             this._handleTicketInputRefactored(target, form, [null, ticketId, index, subId]); // Mock match array
             return;
        }

        // 2. Fallback: Regex Parsing (Legacy support)
        // Format: ticketId_index_subId
        // Regex: starts with digits, underscore, digits, underscore...
        const ticketMatch = name.match(/^(\d+)_(\d+)_(.+)$/);
        
        if (ticketMatch) {
            // New Logic: parse input and call updateTicket instead of _handleTicketInput logic
            this._handleTicketInputRefactored(target, form, ticketMatch);
        } else {
            this._handleStandardInput(target, form, name);
        }
    }
    
    _handleTicketInputRefactored(target, form, match) {
         // match: [full, fieldId, domIndex, subId]
         // Or direct array from dataset logic
         const ticketFieldId = match[1];
         // Ensure index is number
         const index = typeof match[2] === 'number' ? match[2] : parseInt(match[2], 10);
         const subId = match[3];
         
         // Resolve Value Object expected by updateTicket
         // We need the SubField Definition to know the Type
         const parentField = this.formModel.visibleFields.find(f => String(f.id) === String(ticketFieldId));
         if (!parentField) return;
         
         const subFields = parentField.subFields || parentField.fields || (parentField.data && parentField.data.fields) || [];
         const subDef = subFields.find(s => String(s.id) === String(subId));
         
         if (!subDef) {
             console.warn(`[FormSession] subDef failed for subId ${subId}`);
             return;
         }
                  // Extract Value
          let val = target.value;
          let type = target.type;
         
         // Multi-Choice Checkbox Logic
         if (type === 'checkbox') {
             const name = target.name;
             if (name) {
                 // Gather all checked inputs for this field group
                 const checked = form.querySelectorAll(`input[name="${name}"]:checked`);
                 const vals = Array.from(checked).map(c => c.value);
                 // Join with pipe for consistent storage
                 val = vals.length > 0 ? vals.join(' | ') : null;
             } else {
                 if (!target.checked) val = null; 
             }
         } else if (type === 'radio') {
             if (!target.checked) val = null;
         }
         
         // Construct Value Object
         // Similar to _readSingleTicket logic but isolated
         if (val !== null) {
              // Find Option for Price/Currency
             const findOption = (v) => {
                 const opts = subDef.options || (subDef.data && subDef.data.options) || [];
                 let found = null;
                 
                 // 1. Try Product Type Data
                 if (subDef.type === 'product_type' && subDef.data && subDef.data.product_type_data) {
                     found = subDef.data.product_type_data.products.find(p => String(p.id) === String(v));
                 }
                 
                 // 2. Fallback to Standard Options (if not found above)
                 if (!found) {
                     found = opts.find(o => String(o.id) === String(v));
                 }
                 return found;
             };
             
             const valueObj = {
                 [subDef.type]: val,
                 _subFieldId: subDef.id
             };
             
             // Add product_type prop if needed by calculator
             if (subDef.type === 'product_type') {
                 valueObj['product_type'] = val;
             }
             
             // --- Price Calculation (Handle Multiselect) ---
             let totalPrice = 0;
             let currency = null;
             let pricesFound = false;

             const parts = String(val).split(' | ');
             parts.forEach(part => {
                 const opt = findOption(part);
                 if (opt) {
                     if (opt.price !== undefined) {
                         totalPrice += parseFloat(opt.price);
                         pricesFound = true;
                     }
                     if (opt.currency) currency = opt.currency;
                 }
             });

             if (pricesFound) {
                 valueObj['price'] = totalPrice;
             }
             if (currency) {
                 valueObj['currency_code'] = currency;
             }
              
              // Fallback: If price/currency missing from Model, check DOM dataset (Robustness)
              // Only valid for Single Select (otherwise dataset is ambiguity of last clicked)
              if (!pricesFound && parts.length === 1 && target.dataset.price) {
                   valueObj['price'] = parseFloat(target.dataset.price);
              }
              if (!currency && target.dataset.currency) {
                   valueObj['currency_code'] = target.dataset.currency;
              }
              // Also check selected option if target is SELECT
              if (target.tagName === 'SELECT' && target.options[target.selectedIndex]) {
                   const selOpt = target.options[target.selectedIndex];
                   if (!pricesFound && selOpt.dataset.price) {
                        valueObj['price'] = parseFloat(selOpt.dataset.price);
                   }
                   if (!currency && selOpt.dataset.currency) {
                        valueObj['currency_code'] = selOpt.dataset.currency;
                   }
              }
             
             // Special Spot handling
              if (subDef.type === 'spot') {
                  // Ensure we grabbed the price from the option (handled above if option found)
                  // If option NOT found (e.g. dynamic spot?), we might fail. 
                  // But for "Variant 1", it is an option.
              }
              
              this.updateTicket(index, subDef.id, valueObj);
         } else {
             // Remove field
             this.updateTicket(index, subDef.id, null);
         }
    }

    initialize(form) {
        // 1. Hydrate Tickets (One-time from DOM)
        const initialTickets = FormDataReader.getTicketDataFromDom(form, this.formModel);
        if (initialTickets.length > 0) {
            this.state.tickets = initialTickets;
            console.log('FormSession: Hydrated tickets from DOM:', this.state.tickets);
        }

        // 2. Hydrate/Refresh Standard Fields & Calc
        this.refreshPayload(form);
    }

    _handleStandardInput(target, form, fieldId) {
        // Find field definition
        const field = this.formModel.visibleFields.find(f => String(f.id) === fieldId);
        if (!field) return; 

        // Get value(s)
        let val = target.value;
        const type = target.type;
        
        // For Checkboxes/SelectMany, we must read the group state
        // DOM READ: We still read DOM for multi-inputs because handling array state 
        // purely from single event is complex without React.
        if (type === 'checkbox' || field.type === 'select_many') {
            const checked = form.querySelectorAll(`input[name="${fieldId}"]:checked`);
            const vals = Array.from(checked).map(c => c.value);
            val = vals.length > 1 ? vals.join(' | ') : (vals[0] || '');
            
            if (vals.length === 0) val = null;
        }

        // UPDATE STATE
        if (val) {
            this.state.fields.set(String(fieldId), val);
        } else {
            this.state.fields.delete(String(fieldId));
        }

        // SYNC & CALC
        this._syncPayloadFromState();
        this._recalculate();
    }

    _handleStandardInput_LEGACY(target, form, fieldId) {
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

    _recalculate() {
        // Debug Logging
        // console.log('FormSession: Recalculating with Payload:', JSON.parse(JSON.stringify(this.payload)));
        const priceData = FormHelper.calculatePrice(this.payload, this.formModel);
        
        // --- Currency Persistence Logic ---
        // If calculator found a bound currency (because items were selected), use it.
        // If calculator returned null (no items selected), KEEP existing session currency.
        if (!priceData.currency) {
            priceData.currency = this.state.currency;
        }

        // console.log('FormSession: Calculated Price Data:', priceData);
        this.updateState(priceData);
    }


    // --- Helper: Emit State Changed ---
    _emitStateChanged() {
         // Force emit current state
         this.dispatchEvent(new CustomEvent('state-changed', { detail: this.state }));
    }

    setCurrency(currencyCode) {
        if (this.state.currency !== currencyCode) {
            this.state.currency = currencyCode;
            this.resetIncompatibleCurrencyFields(currencyCode);
            this._syncPayloadFromState();
            this._recalculate();
            this._emitStateChanged();
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
