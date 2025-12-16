import { FormFieldBuilder } from './form_field_builder.js';
import { FormStrings } from '../form_strings.js';
import { CommonStrings } from '../../shared/common_strings.js';
import { OrdersStrings } from '../../eshop/orders_strings.js';
import { FormHelper } from '../form_helper.js';
// import { BlueprintSelector } from '../../blueprint/blueprint_selector.js';
import { DbForms } from '../db_forms.js';

export class TicketFieldBuilder {
    static _uniqueIndexCounter = 0;

    static reset() {
        TicketFieldBuilder._uniqueIndexCounter = 0;
    }

    static create(field, formModel, session) {
        const container = document.createElement('div');
        container.className = 'form-field-container ticket-field';
        container.dataset.fieldId = field.id;
        
        // --- State Inversion: Sync DOM with Session State ---
        // If session already has tickets (restored state), we should render them?
        // Subscribe to session events for reactivity.
        
        const subFields = field.subFields || field.fields || (field.data && field.data.fields) || [];
        const hasSpotField = subFields.some(f => f.type === 'spot');

        // Setup Reactivity: Re-render list on state change
        // We only do this for Complex Mode? Simple mode (0) might also change if tickets cleared.
        // Let's create a Render Function.
        
        const updateListFromSession = () => {
             // To be implemented inside Complex Mode helper or globally?
             // Accessing 'listContainer' or 'container' here is fine if defined.
        };

        // Blueprint Button Logic
        if (formModel.blueprint) {
             const blueprintBtn = document.createElement('button');
             blueprintBtn.type = 'button';
             blueprintBtn.className = 'btn btn-primary btn-block'; // Bootstrap classes for full width/margin
             blueprintBtn.style.width = '100%';
             blueprintBtn.style.marginBottom = '24px';
             blueprintBtn.innerHTML = `<i class="material-icons" style="vertical-align: middle; margin-right: 8px;">event_seat</i> ${FormStrings.seatSelection || 'Select Seat'}`;
             
             blueprintBtn.onclick = () => {
                 import('../../blueprint/blueprint_selector.js').then(({ BlueprintSelector }) => {
                     const selector = new BlueprintSelector();
                     // Pass session instead of formModel. No callback relying on Session Events.
                     selector.open(session, field, container.selectedSeats || []);
                 });
             };
             
             container.appendChild(blueprintBtn);
        }

        if (!hasSpotField) {
            // --- Simple Mode (Direct Fields) ---
            
            // Render subfields directly
            subFields.forEach((subDef, idx) => {
                // Ensure Unique ID for Label/Input association (crucial for A11y and Validation)
                // Use a stable index '0' for Simple Mode as it's a single ticket.
                const scopedDef = { ...subDef, id: FormHelper.getTicketInputName(field.id, 0, subDef.id) };
                
                // --- Validation: Explicit Required Attribute ---
                if (scopedDef.isRequired) {
                    // This is handled inside individual field builders (TextFieldBuilder etc),
                    // but we must ensure they process 'isRequired' correctly.
                }

                if (scopedDef.type === 'product_type' && scopedDef.data && scopedDef.data.product_type_data && scopedDef.data.product_type_data.products) {
                     if (!scopedDef.options || scopedDef.options.length === 0) {
                         scopedDef.options = scopedDef.data.product_type_data.products.map(p => ({
                             id: p.id,
                             title: p.title,
                             description: p.description,
                             price: p.price
                         }));
                     }
                }

                if (scopedDef.type === 'product_type') {
                     delete scopedDef._hideLabel; 
                }

                const subComp = FormFieldBuilder.createFormField(scopedDef, formModel);
                
                // --- Robustness: Attach Data Attributes ---
                const inputs = subComp.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    input.dataset.ticketId = field.id;
                    input.dataset.index = '0';
                    input.dataset.subId = subDef.id;
                });
                
                container.appendChild(subComp);
            });
            
            // Register initial ticket in session if not present?
            // Simple mode = 1 ticket always.
            if (session && session.state.tickets.length === 0) {
                session.addTicket(); 
            }
            
            return container;

        } else {
            // --- Complex Mode (Seat Selection / Multiple Items) ---
            
             if (field.title && field.title !== 'Tickets' && field.title !== OrdersStrings.tickets) {
                 const label = document.createElement('label');
                 label.className = 'form-field-label';
                 label.textContent = field.title;
                 container.appendChild(label);
            }
    
            if (field.description) {
                const desc = document.createElement('div');
                desc.className = 'form-field-description';
                desc.innerHTML = field.description;
                container.appendChild(desc);
            }

            const listContainer = document.createElement('div');
            listContainer.className = 'tickets-list';
            container.appendChild(listContainer);
            
            // --- Helper to Add Ticket Item ---
            const renderTicketItem = (index, seat = null) => {
                const ticketItem = document.createElement('div');
                ticketItem.className = 'ticket-item';
                if (seat) ticketItem.dataset.seatId = seat.id;

                ticketItem.dataset.index = index; 

                // Resolve Ticket Data from Session
                let ticketData = null;
                if (session && session.state.tickets[index]) {
                    ticketData = session.state.tickets[index];
                } 
                
                const header = document.createElement('div');
                header.className = 'ticket-header';
                
                const titleSpan = document.createElement('span');
                titleSpan.style.fontWeight = 'bold';
                titleSpan.style.fontSize = '1.3rem'; 
                
                // If it's a seat ticket, show seat name instead of "Ticket X"
                if (seat && seat.objectModel) {
                     titleSpan.textContent = seat.objectModel.name || `${FormStrings.ticket} ${index + 1}`;
                } else {
                     titleSpan.textContent = `${FormStrings.ticket} ${index + 1}`;
                }
                header.appendChild(titleSpan);

                const removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                removeBtn.className = 'btn-remove-ticket'; 
                removeBtn.title = CommonStrings.remove;
                removeBtn.innerHTML = '<i class="material-icons">close</i>';
                
                removeBtn.onclick = async () => {
                    // API Deselection handled by FormSession.removeTicket
                    
                    // --- STATE INVERSION: Call Session ---
                    if (session) {
                        // Find current index in DOM (safe fallback)
                        const currentIdx = Array.from(listContainer.children).indexOf(ticketItem);
                        session.removeTicket(currentIdx);
                    }
                    
                    ticketItem.remove();
                    
                    // Always update indices
                    Array.from(listContainer.children).forEach((child, i) => {
                       const span = child.querySelector('.ticket-header span');
                       // Only update if it contains "Ticket" string to avoid overwriting custom names?
                       if (span && span.textContent.startsWith(FormStrings.ticket)) {
                           span.textContent = `${FormStrings.ticket} ${i + 1}`;
                       }
                    });
                    
                    // If seat was removed, update selectedSeats locally
                    if (container.selectedSeats && seat) {
                        container.selectedSeats = container.selectedSeats.filter(s => s.id !== seat.id);
                    }
                };
                header.appendChild(removeBtn);
                ticketItem.appendChild(header);
                
                // Sort fields to ensure Spot is first
                const sortedSubFields = [...subFields].sort((a, b) => (a.type === 'spot' ? -1 : 1));

                if (sortedSubFields.length > 0) {
                    sortedSubFields.forEach(subDef => {
                        // Create scoped definition with UNIQUE ID using list index
                        // WARN: using 'index' passed to renderTicketItem might overlap if not managed?
                        // Actually, 'index' comes from loop or counter.
                        // Ideally session gives us an ID.
                        // Create scoped definition with UNIQUE ID using list index
                        // WARN: using 'index' passed to renderTicketItem might overlap if not managed?
                        // Actually, 'index' comes from loop or counter.
                        // Ideally session gives us an ID.
                        const scopedDef = { ...subDef, id: FormHelper.getTicketInputName(field.id, index, subDef.id) };

                        // --- Restore Value from Session ---
                        if (ticketData && ticketData.fields) {
                            // Find field entry
                            // console.log(`[TicketFieldBuilder] Looking for ${subDef.id} in ticket fields`, ticketData.fields);
                            const fieldEntry = ticketData.fields.find(f => String(f._subFieldId) === String(subDef.id));
                            if (fieldEntry) {
                                // Extract Value
                                // entry = { type: val, _subFieldId: id }
                                const val = fieldEntry[subDef.type];
                                if (val !== undefined) {
                                    scopedDef.value = val;
                                }
                            }
                        }
                        
                        // --- Validation: JS Required ---
                        // Ensure required logic is passed down.
                        if (subDef.isRequired) scopedDef.isRequired = true;

                        // --- SPOT FIELD HANDLING ---
                        if (scopedDef.type === 'spot') { 
                            scopedDef.isRequired = true; 
                            
                            // If we have a seat, we do special rendering
                            if (seat) {
                                // 1. Hidden Value Input
                                let priceVal = 0;
                                let currency = FormStrings.currencyDefault || 'CZK'; 
                                let productTitle = '';
                                
                                const product = seat.productModel || (typeof seat.product === 'object' ? seat.product : null);
                                
                                if (product) {
                                    productTitle = product.title || '';
                                    if (product.price) {
                                        priceVal = product.price;
                                    }
                                    if (product.currency) {
                                        currency = product.currency;
                                    } else if (formModel.currencyCode) {
                                        currency = formModel.currencyCode;
                                    }
                                }

                                const seatName = seat.title || seat.name || `Seat #${seat.id}`;

                                const hiddenInput = document.createElement('input');
                                hiddenInput.type = 'hidden';
                                hiddenInput.name = scopedDef.id;
                                hiddenInput.value = seat.id; // Spot ID
                                hiddenInput.dataset.name = seatName; 
                                if (priceVal > 0) hiddenInput.dataset.price = priceVal; 
                                
                                ticketItem.appendChild(hiddenInput);

                                // 2. Visible Read-Only Input (Display)
                                const displayContainer = document.createElement('div');
                                displayContainer.className = 'form-field-container';
                                
                                const label = document.createElement('label');
                                label.className = 'form-field-label';
                                label.textContent = scopedDef.title || OrdersStrings.gridSpot || 'Spot';
                                displayContainer.appendChild(label);
                                
                                const displayDiv = document.createElement('div');
                                displayDiv.className = 'form-control';
                                displayDiv.style.backgroundColor = 'var(--bs-secondary-bg, #e9ecef)'; 
                                displayDiv.style.opacity = '1';
                                displayDiv.style.display = 'flex';
                                displayDiv.style.alignItems = 'center';

                                const priceHtml = priceVal > 0 ? `&nbsp;<span class="option-price">+${priceVal} ${currency}</span>` : '';
                                const prefix = productTitle ? `${productTitle} - ` : '';
                                
                                displayDiv.innerHTML = `<span>${prefix}${seatName}</span>${priceHtml}`;
                                
                                displayContainer.appendChild(displayDiv);
                                ticketItem.appendChild(displayContainer);
                                
                                return; 
                            }
                        }
                        
                        const subComp = FormFieldBuilder.createFormField(scopedDef, formModel);
                        
                        // --- Robustness: Attach Data Attributes ---
                        const inputs = subComp.querySelectorAll('input, select, textarea');
                        inputs.forEach(inputOrSelect => {
                            inputOrSelect.dataset.ticketId = field.id;
                            inputOrSelect.dataset.index = index;
                            inputOrSelect.dataset.subId = subDef.id;

                            // Validation Refactoring (Moved here)
                            if (scopedDef.isRequired) {
                                inputOrSelect.dataset.required = 'true';
                            }
                        });
            
                        ticketItem.appendChild(subComp);
                    });
                } else {
                     const hint = document.createElement('div');
                     hint.style.fontStyle = 'italic';
                     hint.style.color = '#777';
                     hint.textContent = "Ticket details";
                     ticketItem.appendChild(hint);
                }
                listContainer.appendChild(ticketItem);
            };
    
            // --- Logic Branch: Blueprint vs Manual ---
            
            if (hasSpotField && formModel.blueprint) {
                // BLUEPRINT MODE
                
                container.selectedSeats = []; 
                
                const existingBtn = container.querySelector('button.btn-primary');
                if (existingBtn) {
                    existingBtn.onclick = () => {
                         import('../../blueprint/blueprint_selector.js').then(({ BlueprintSelector }) => {
                             const selector = new BlueprintSelector();
                             selector.open(session, field, container.selectedSeats || []);
                         });
                    };
                }
                
                // Do NOT add "Add Ticket" button in blueprint mode
                
            } else {
                // MANUAL MODE
                
                const addBtn = document.createElement('button');
                addBtn.type = 'button';
                addBtn.className = 'btn btn-secondary btn-sm btn-add-ticket';
                addBtn.textContent = `+ ${FormStrings.addTicket}`;
                
                addBtn.onclick = () => {
                     // --- STATE INVERSION: Call Session ---
                     if (session) session.addTicket(); // Add dummy/empty ticket
                     
                     // Render DOM
                     renderTicketItem(listContainer.children.length);
                     container.dispatchEvent(new Event('input', { bubbles: true }));
                };
                container.appendChild(addBtn);
                
                // Default 1 ticket (if session empty)
                if (session && session.state.tickets.length === 0) {
                     session.addTicket();
                     renderTicketItem(0);
                } else if (session && session.state.tickets.length > 0) {
                    // Restore from session
                    session.state.tickets.forEach((t, i) => {
                         renderTicketItem(i);
                         // TODO: Restore values?
                    });
                } else {
                    // Fallback
                    renderTicketItem(0);
                }
            }
    
            // --- Helper to Re-Sync List from Session (Reactivity) ---
            const syncListFromSession = () => {
                 const newTickets = session.state.tickets;
                 const currentItems = Array.from(listContainer.children);

                 // 1. Smart Diffing: Check Structure
                 let structureChanged = false;
                 
                 if (newTickets.length !== currentItems.length) {
                     structureChanged = true;
                 } else {
                     // Check Spots (if any mismatch, we rebuild)
                     // If we moved items, we rebuild.
                     for (let i = 0; i < newTickets.length; i++) {
                         const t = newTickets[i];
                         const item = currentItems[i];
                         
                         // Check Spot ID stability
                         // DOM dataset.seatId is string
                         if (t.spot) {
                             if (String(t.spot) !== String(item.dataset.seatId)) {
                                 structureChanged = true;
                                 break;
                             }
                         } else {
                             // If ticket has no spot, but DOM item has seatId -> Changed
                             if (item.dataset.seatId) {
                                 structureChanged = true;
                                 break;
                             }
                         }
                     }
                 }

                 if (!structureChanged) {
                     // Structure is stable. 
                     // iterate regular inputs and update values if needed (Programmatic updates)
                     // BUT skip the active element to prevent fighting the user.
                     
                     newTickets.forEach((t, i) => {
                         const ticketItem = currentItems[i];
                         if (!ticketItem) return;

                         if (t.fields) {
                             t.fields.forEach(f => {
                                 if (!f._subFieldId) return;
                                 // Try to find input by subId
                                 // We rely on dataset.subId which we added in renderTicketItem
                                 const input = ticketItem.querySelector(`[data-sub-id="${f._subFieldId}"]`);
                                 if (input) {
                                     // Don't touch if user is typing in it
                                     if (document.activeElement === input) return;
                                     
                                     // Check value mismatch
                                     // Handle checkbox vs value
                                     if (input.type === 'checkbox') {
                                         // complex value parsing or just check match?
                                         // We don't easily know if 'val' maps to checked without checking value attr
                                         // For now, skip checkboxes to be safe or implement later.
                                     } else {
                                         // Check value match
                                         // t.fields has { [type]: val }
                                         // construct val again?
                                         // f is the value object: { text: "John", _subFieldId: "name" }
                                         // We don't know the type key easily here without definition.
                                         // But we can check values(f) excludes _subId?
                                         const val = Object.entries(f).find(([k, v]) => k !== '_subFieldId' && k !== 'currency_code' && k !== 'product_type')?.[1];
                                         
                                         if (val !== undefined && String(input.value) !== String(val)) {
                                             console.log(`[TicketFieldBuilder] Syncing value for ${f._subFieldId}: ${input.value} -> ${val}`);
                                             input.value = val;
                                         }
                                     }
                                 }
                             });
                         }
                     });
                     
                     return; // Skip Full Re-render
                 }

                 // Full Rebuild
                 // console.log('[TicketFieldBuilder] Structure changed, rebuilding list.');
                 listContainer.innerHTML = '';
                 container.selectedSeats = [];
                 
                 // Re-render from session tickets
                 session.state.tickets.forEach((ticket, i) => {
                     // Try to reconstruct seat object if possible?
                     // Verify if it's a spot ticket
                     let seatStub = null;
                     if (ticket.spot) {
                         seatStub = { 
                             id: ticket.spot,
                             title: ticket.spotName || `Spot ${ticket.spot}`, // Fallback
                             // We might lack full product model here if not persisted in state fully.
                             // But basic ID is enough for remove.
                             productModel: { price: ticket.spotPrice }
                         };
                         container.selectedSeats.push(seatStub);
                     }
                     renderTicketItem(i, seatStub);
                 });
                 
                 container.dispatchEvent(new Event('input', { bubbles: true }));
            };

            if (session) {
                // Initial Sync
                syncListFromSession();
                
                // Subscribe
                session.addEventListener('state-changed', () => {
                    syncListFromSession();
                });
            }

            return container;
        }
    }
}
