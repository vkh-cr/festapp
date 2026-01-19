import { FormFieldBuilder } from './form_field_builder.js';
import { FormStrings } from '../form_strings.js';

export class RadioFieldBuilder {
    static create(field, formModel) {
        const container = document.createElement('div');
        container.className = 'form-field-container radio-field';
        
        // Label
        if (!field._hideLabel) {
            const label = document.createElement('label');
            label.className = 'form-field-label';
            label.innerHTML = `${field.title || ''}${field.isRequired ? '<span class="required-star">*</span>' : ''}`;
            container.appendChild(label);
        }
        
        // Description
        if (field.description) {
            const desc = document.createElement('div');
            desc.className = 'form-field-description';
            desc.innerHTML = field.description;
            container.appendChild(desc);
        }
        
        // Options Container
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'radio-options';
        
        // Determine Card Design
        // Logic matches Flutter: Global flag OR Field Description OR Any Option Description
        // User Adjustment: "just being product is not reason to have iscard to be true"
        // So we exclude product_type from the "option description" auto-trigger.
        const shouldCheckOptions = field.type !== 'product_type';
        const hasOptionDescription = shouldCheckOptions && field.options && field.options.some(opt => opt.description && opt.description.trim().length > 0);
        
        const isCardDesign = (formModel && formModel.isCardDesign) || 
                             (field.description && field.description.trim().length > 0) ||
                             hasOptionDescription;

        if (field.options) {
            field.options.forEach(opt => {
                const wrapper = document.createElement('div');
                wrapper.className = 'form-check';
                if (isCardDesign) wrapper.classList.add('option-card');
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = field.id;
                input.value = (opt.id !== undefined && opt.id !== null) ? opt.id : opt.title;
                input.id = `${field.id}_${(opt.id !== undefined && opt.id !== null) ? opt.id : opt.title}`;
                input.className = 'form-check-input';

                // Currency Tagging
                const currency = opt.currencyCode || opt.currency || opt.currency_code;
                if (currency) {
                    input.setAttribute('data-currency', currency);
                    wrapper.setAttribute('data-currency', currency); // Also on wrapper for easy hiding
                }
                
                // Debug Checked Logic
                // Use the exact same value derivation as the input.value to ensure consistency
                const optionValue = (opt.id !== undefined && opt.id !== null) ? opt.id : opt.title;
                const isSelected = (field.value !== undefined && field.value !== null) && (String(optionValue) === String(field.value));
                
                if (isSelected) {
                     input.checked = true;
                }
                
                if (isCardDesign) {
                    wrapper.classList.add('option-card');
                    // Full card clickability
                    wrapper.onclick = (e) => {
                         // Prevent double-toggle if clicking directly on input or label (since label triggers input)
                        if (e.target !== input && e.target.tagName !== 'LABEL' && !e.target.closest('label')) {
                             input.click();
                        }
                    };
                }
                
                // Rich Label
                const optLabel = document.createElement('label');
                optLabel.className = 'form-check-label';
                optLabel.htmlFor = input.id;
                
                let labelContent = `<span>${opt.title || ''}</span>`;
                if (opt.price) {
                     // Check if we should show currency code
                     const priceDisplay = `${opt.price}&nbsp;${currency || ''}`; 
                     labelContent += `<span class="option-price">+${priceDisplay}</span>`; 
                }
                optLabel.innerHTML = labelContent;
                
                // Description inside wrapper
                const contentWrapper = document.createElement('div');
                contentWrapper.appendChild(optLabel);
                
                const surchargeData = opt.data && opt.data.surcharge;
                const ticketField = formModel && formModel.relatedFields
                    ? formModel.relatedFields.find(f => f.type === 'ticket')
                    : null;
                const showSurchargeDescription = ticketField && ticketField.data && ticketField.data.show_surcharge_description !== undefined
                    ? ticketField.data.show_surcharge_description
                    : true;

                if (opt.description || (surchargeData && surchargeData.amount && showSurchargeDescription)) {
                    const optDesc = document.createElement('span');
                    optDesc.className = 'option-description';
                    
                    let descHtml = '';
                     if (surchargeData && surchargeData.amount && showSurchargeDescription) {
                         descHtml += `<span class="surcharge-info">+ ${surchargeData.amount}&nbsp;${surchargeData.currency || ''} ${FormStrings.surchargeOnSite}</span>`;
                         if (opt.description) descHtml += '<br>'; // New line separation
                     }
                     if (opt.description) {
                          descHtml += opt.description;
                     }

                    optDesc.innerHTML = descHtml;
                    contentWrapper.appendChild(optDesc);
                }

                wrapper.appendChild(input);
                wrapper.appendChild(contentWrapper);
                optionsContainer.appendChild(wrapper);
            });
        }
        
        container.appendChild(optionsContainer);

        // Clear Selection Logic
        // Always created but hidden by default until selection is made
        const clearBtn = document.createElement('button');
        clearBtn.type = 'button';
        clearBtn.className = 'btn-clear-selection';
        clearBtn.innerText = FormStrings.clearSelection;

        // Show button when selection changes
        container.addEventListener('change', (e) => {
            // Loose equality to handle numeric IDs vs string attribute
            if (e.target.name == field.id && e.target.type === 'radio') {
                // Ensure button reflects REALITY: Check if anything is actually checked
                // This handles cases where uncheck events are dispatched
                const anyChecked = container.querySelector(`input[name="${field.id}"]:checked`);
                clearBtn.style.display = anyChecked ? 'inline-block' : 'none';
            }
        });

        const initialChecked = container.querySelector('input:checked');
        if (field.value !== undefined && field.value !== null && field.value !== '' && initialChecked) {
             clearBtn.style.display = 'inline-block';
        }

        clearBtn.onclick = () => {
            const radios = container.querySelectorAll(`input[type="radio"][name="${field.id}"]`);
            radios.forEach(r => r.checked = false);
            clearBtn.style.display = 'none';
            
            // Fix: Signal "Clear" to FormSession by making container look like an input with null value
            // FormSession reads target.name and target.value
            container.setAttribute('name', field.id);
            container.name = field.id; // CRITICAL: FormPage checks e.target.name property to route to handleInput
            container.value = null; 
            
            container.dispatchEvent(new Event('input', { bubbles: true }));
            container.dispatchEvent(new Event('change', { bubbles: true }));
        };
        
        container.appendChild(clearBtn);

        // Error message placeholder
        const error = document.createElement('div');
        error.className = 'form-field-error';
        error.style.display = 'none';
        container.appendChild(error);
        
        return container;
    }
}
