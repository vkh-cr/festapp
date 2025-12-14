import { FormFieldBuilder } from './form_field_builder.js';
import { FormStrings } from '../form_strings.js';
import { CommonStrings } from '../../shared/common_strings.js';
import { OrdersStrings } from '../../eshop/orders_strings.js';
import { FormHelper } from '../form_helper.js';

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
        // Check for 'spot' field to determine mode
        // Flutter logic: if (ticket.fields.none((f) => f.fieldType == FormHelper.fieldTypeSpot)) -> Simple Mode
        const hasSpotField = subFields.some(f => f.type === 'spot');

        if (!hasSpotField) {
            // --- Simple Mode (Direct Fields) ---
            // Render subfields directly, no "Item 1", no "Add Ticket" button.
            // Implicitly always 1 ticket (or handled by backend as flat fields mapped to ticket).
            
            // We still need a container to hold the fields, but it should look seamless.
            // Actually, we should just iterate subFields and append them.
            // BUT, we need to respect the "Ticket" nesting for FormModel/Submission?
            // "TicketFieldBuilder.create" returns a single Element.
            
            // Render the single implicit ticket item's fields
            subFields.forEach(subDef => {
                // We namespace IDs to ticket_0 for consistency with "Item 1" logic in submission?
                // Flutter's simple mode: `ticket.tickets[0].ticketKey`
                // So yes, it is effectively the first ticket.
                // We must namespace it so `calculateTotal` and `submitOrder` can find it.
                // The index is 0.
                
                // We must namespace it so `calculateTotal` and `submitOrder` can find it.
                // The index is 0.
                
                const scopedDef = { ...subDef, id: FormHelper.getTicketInputName(field.id, 0, subDef.id) };
                
                // User Request: "is_ticket_field this field will be replace by fields that are product fields"
                // ...
                // "replaced by all products. so first product, then other follows."
                
                // Ensure options are populated if it is a product_type
                // This logic normally belongs in Model parsing, but let's ensure it here for the builder.
                if (scopedDef.type === 'product_type' && scopedDef.data && scopedDef.data.product_type_data && scopedDef.data.product_type_data.products) {
                     // Map products to options if not already done
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
                     // In Simple Mode, we probably want the label to show what it is (e.g. "Select Entry").
                     // So I will NOT set _hideLabel here.
                     // But wait, the previous request was specific about "Ticket Type Field".
                     // Maybe they meant the PARENT Ticket Field?
                     // "is_ticket_field this field will be replace by fields that are product fields."
                     // This refers to the PARENT. 
                     // So the PARENT label ("Tickets") is gone.
                     // The CHILD label ("Ticket Type") should probably remain?
                     delete scopedDef._hideLabel; 
                }

                const subComp = FormFieldBuilder.createFormField(scopedDef, formModel);
                container.appendChild(subComp);
            });
            
            return container;

        } else {
            // --- Complex Mode (Seat Selection / Multiple Items) ---
            // Keep existing logic (Item 1, Add Button, etc)
            
            // Label
            // Check previous logic for generic label hiding
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
            
            // Add Button
            const addBtn = document.createElement('button');
            addBtn.type = 'button';
            addBtn.className = 'btn btn-secondary btn-sm btn-add-ticket';
            addBtn.textContent = `+ ${FormStrings.addTicket}`;
            
            const addTicketItem = () => {
                // ... (Existing implementation of addTicketItem)
                const index = listContainer.children.length;
                const ticketItem = document.createElement('div');
                ticketItem.className = 'ticket-item';
                // Store index for robust data reading (persists even if siblings removed)
                // Actually, if we delete, we want to maintain the link to the input name.
                // But wait, if we delete item 0, item 1 keeps index 1 input names? 
                // Yes, that works if Reader reads index 1.
                // However, we re-label visual "Item 1". 
                // That's fine. Visual != Internal ID.
                // To avoid ID collisions on "Add" after "Delete", we should probably use a unique counter, not length.
                
                // Let's use a closure counter or just Date.now() suffix? 
                // No, simplest is to use current length but allow gaps if we used a monotonic counter.
                // But listContainer.children.length shrinks.
                // If I have [0, 1]. Delete 0. Layout [1]. Length 1. Next Add gets index 1.
                // COLLISION! Old Ticket 1 has inputs `ticket_1`. New Ticket 1 has inputs `ticket_1`.
                // WE MUST USE A MONOTONIC COUNTER.
                
                ticketItem.dataset.index = TicketFieldBuilder._uniqueIndexCounter++; 
                
                const header = document.createElement('div');
                header.className = 'ticket-header';
                const titleSpan = document.createElement('span');
                titleSpan.textContent = `${FormStrings.ticket} ${index + 1}`;
                header.appendChild(titleSpan);

                const removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                // Use only custom class for clean icon look (no btn-danger background)
                removeBtn.className = 'btn-remove-ticket'; 
                removeBtn.title = CommonStrings.remove;
                removeBtn.innerHTML = '<i class="material-icons">delete_outline</i>';
                
                removeBtn.onclick = () => {
                    listContainer.removeChild(ticketItem);
                    Array.from(listContainer.children).forEach((child, i) => {
                       const span = child.querySelector('.ticket-header span');
                       if (span) span.textContent = `${FormStrings.ticket} ${i + 1}`;
                    });
                    // Dispatch input event to trigger price update
                    container.dispatchEvent(new Event('input', { bubbles: true }));
                };
                header.appendChild(removeBtn);
                ticketItem.appendChild(header);
                
                // ... (subfields logic)
                
                // subfields logic...
                const currentIndex = ticketItem.dataset.index;

                if (subFields.length > 0) {
                    subFields.forEach(subDef => {
                        const scopedDef = { ...subDef, id: FormHelper.getTicketInputName(field.id, currentIndex, subDef.id) };
                        // ... existing logic ...
                        if (scopedDef.type === 'spot') { scopedDef.isRequired = true; }
                        if (scopedDef.type === 'spot') { scopedDef.isRequired = true; }
                        // if (scopedDef.type === 'product_type') { scopedDef._hideLabel = true; } // User requested to show title
                        
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
    
            addBtn.onclick = () => {
                addTicketItem();
                // Dispatch input event to trigger price update
                container.dispatchEvent(new Event('input', { bubbles: true }));
            };
            container.appendChild(addBtn);
            
            // Initial item
            addTicketItem();
            // Don't dispatch for initial item to avoid double-init logic issues, 
            // or do we? FormPage has initial render timeout.
            
            // Modify removeBtn in addTicketItem to dispatch too
            // We need to intercept the removeBtn logic we just defined inside addTicketItem?
            // Yes, I need to rewrite addTicketItem significantly to inject the dispatch, 
            // OR I can use the trick of modifying the replacement content to include the full function.
            // But verify scope.
    
            return container;
        }
    }
}
