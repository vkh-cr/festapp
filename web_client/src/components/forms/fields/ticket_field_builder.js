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

    static create(field, formModel) {
        const container = document.createElement('div');
        container.className = 'form-field-container ticket-field';
        container.dataset.fieldId = field.id;

        const subFields = field.subFields || field.fields || (field.data && field.data.fields) || [];
        const hasSpotField = subFields.some(f => f.type === 'spot');

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
                     selector.open(formModel, field, () => {
                         // Callback for update
                         // Do NOT reload page. Just trigger update.
                         // The optimistic update in selector might have happened.
                         // We might want to dispatch an input event to notify listeners
                         container.dispatchEvent(new Event('input', { bubbles: true }));
                     });
                 });
             };
             
             container.appendChild(blueprintBtn);
        }

        if (!hasSpotField) {
            // --- Simple Mode (Direct Fields) ---
            
            // Render subfields directly
            subFields.forEach(subDef => {
                const scopedDef = { ...subDef, id: FormHelper.getTicketInputName(field.id, 0, subDef.id) };
                
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
                container.appendChild(subComp);
            });
            
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
            const addTicketItem = (seat = null) => {
                const index = listContainer.children.length;
                const ticketItem = document.createElement('div');
                ticketItem.className = 'ticket-item';
                ticketItem.dataset.index = TicketFieldBuilder._uniqueIndexCounter++; 
                
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
                // Use 'close' (x) icon as requested in previous tasks, ensuring consistency
                removeBtn.innerHTML = '<i class="material-icons">close</i>';
                
                removeBtn.onclick = async () => {
                    // API Deselection
                    if (seat && container.dataset.secret) {
                        try {
                             DbForms.selectSpot(formModel.key, container.dataset.secret, seat.id, false)
                                .catch(e => console.error("Deselection failed", e));
                        } catch (e) {
                            console.error("Deselection error", e);
                        }
                    }

                    listContainer.removeChild(ticketItem);
                    
                    // Always update indices
                    Array.from(listContainer.children).forEach((child, i) => {
                       const span = child.querySelector('.ticket-header span');
                       // Only update if it contains "Ticket" string to avoid overwriting custom names?
                       // User request: "ticket numbers must be refreshed".
                       // If we display seat name in header, we shouldn't change it to "Ticket X".
                       // But if it IS "Ticket X", we update it.
                       if (span && span.textContent.startsWith(FormStrings.ticket)) {
                           span.textContent = `${FormStrings.ticket} ${i + 1}`;
                       }
                    });
                    
                    // If seat was removed, update selectedSeats locally
                    if (container.selectedSeats && seat) {
                        container.selectedSeats = container.selectedSeats.filter(s => s.id !== seat.id);
                    }

                    container.dispatchEvent(new Event('input', { bubbles: true }));
                };
                header.appendChild(removeBtn);
                ticketItem.appendChild(header);
                
                const currentIndex = ticketItem.dataset.index;

                // Sort fields to ensure Spot is first
                const sortedSubFields = [...subFields].sort((a, b) => (a.type === 'spot' ? -1 : 1));

                if (sortedSubFields.length > 0) {
                    sortedSubFields.forEach(subDef => {
                        // Create scoped definition
                        const scopedDef = { ...subDef, id: FormHelper.getTicketInputName(field.id, currentIndex, subDef.id) };
                        
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
                                hiddenInput.value = seat.id;
                                hiddenInput.dataset.name = seatName; 
                                if (priceVal > 0) hiddenInput.dataset.price = priceVal; 
                                
                                ticketItem.appendChild(hiddenInput);

                                // 2. Visible Read-Only Input (Display) - Using DIV to allow HTML (Price Color)
                                const displayContainer = document.createElement('div');
                                displayContainer.className = 'form-field-container';
                                
                                const label = document.createElement('label');
                                label.className = 'form-field-label';
                                label.textContent = scopedDef.title || OrdersStrings.gridSpot || 'Spot';
                                displayContainer.appendChild(label);
                                
                                // Use a DIV that looks like a readonly input to allow rich text (colored price)
                                const displayDiv = document.createElement('div');
                                displayDiv.className = 'form-control'; // Bootstrap rendering
                                // Mimic read-only appearance
                                displayDiv.style.backgroundColor = 'var(--bs-secondary-bg, #e9ecef)'; 
                                displayDiv.style.opacity = '1';
                                displayDiv.style.display = 'flex';
                                displayDiv.style.alignItems = 'center';

                                // Format: "ProductTitle - SpotTitle + Price Currency"
                                // Matching Radio/Checkbox style: <span class="option-price">+Price Currency</span>
                                const priceHtml = priceVal > 0 ? `&nbsp;<span class="option-price">+${priceVal} ${currency}</span>` : '';
                                const prefix = productTitle ? `${productTitle} - ` : '';
                                
                                displayDiv.innerHTML = `<span>${prefix}${seatName}</span>${priceHtml}`;
                                
                                displayContainer.appendChild(displayDiv);
                                ticketItem.appendChild(displayContainer);
                                
                                return; 
                            }
                        }
                        
                        const subComp = FormFieldBuilder.createFormField(scopedDef, formModel);
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
                
                // 1. Maintain state of selected seats on the container
                container.selectedSeats = []; 
                // container.dataset.secret stored via callback

                // 2. Blueprint Button Logic (Override previous button)
                const existingBtn = container.querySelector('button.btn-primary'); // The one created at top
                if (existingBtn) {
                    existingBtn.onclick = () => {
                         import('../../blueprint/blueprint_selector.js').then(({ BlueprintSelector }) => {
                             const selector = new BlueprintSelector();
                             // Pass current seats to selector
                             selector.open(formModel, field, container.selectedSeats, (newSeats, secret) => {
                                 // Update UI with new seats
                                 
                                 // Store secret for removal / submission
                                 if (secret) {
                                     container.dataset.secret = secret;
                                     
                                     // Add hidden input for final submission if not exists
                                     let secretInput = container.querySelector('input[name="blueprint_secret"]');
                                     if (!secretInput) {
                                         secretInput = document.createElement('input');
                                         secretInput.type = 'hidden';
                                         secretInput.name = 'blueprint_secret';
                                         container.appendChild(secretInput);
                                     }
                                     secretInput.value = secret;
                                 }
    
                                 // 1. Clear existing tickets
                                 listContainer.innerHTML = '';
                                 
                                 // 2. Update state
                                 container.selectedSeats = newSeats || [];
                                 
                                 // 3. Re-create tickets
                                 container.selectedSeats.forEach(seat => {
                                     addTicketItem(seat);
                                 });
                                 
                                 // 4. Trigger update
                                 container.dispatchEvent(new Event('input', { bubbles: true }));
                             });
                         });
                    };
                }
                
                // Do NOT add "Add Ticket" button
                // Do NOT add initial ticketItem (unless we want to start empty)
                
            } else {
                // MANUAL MODE (Original Behavior)
                
                // Add Button
                const addBtn = document.createElement('button');
                addBtn.type = 'button';
                addBtn.className = 'btn btn-secondary btn-sm btn-add-ticket';
                addBtn.textContent = `+ ${FormStrings.addTicket}`;
                
                addBtn.onclick = () => {
                    addTicketItem();
                    container.dispatchEvent(new Event('input', { bubbles: true }));
                };
                container.appendChild(addBtn);
                
                // Default 1 ticket
                addTicketItem();
            }
    
            return container;
        }
    }
}
