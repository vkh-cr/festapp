import { FormStrings } from '../form_strings.js';
import { PhoneFormatter } from '../../../utils/phone_formatter.js';
import { html, unsafe } from '../../../utils/html.js';


export class TextFieldBuilder {
    static create(field, formModel) {
        const container = document.createElement('div');
        
        const isHidden = field.isHidden;
        const inputType = TextFieldBuilder.getInputType(field.type);
        const inputName = field.id.toString();
        const isInformal = formModel?.communicationTone === 'informal';
        const placeholder = isInformal ? FormStrings.typeHere_informal : FormStrings.typeHere;
        const autocomplete = TextFieldBuilder.getAutocompleteValue(field.type);
        
        container.i<nnerHTML = html`
            <div class="form-field-container" style="${isHidden ? 'display:none' : ''}">
                <label class="form-field-label">
                    ${field.title || ''}
                    ${field.isRequired ? html`<span class="required-star"> *</span>` : ''}
                </label>
                
                ${field.description ? html`<div class="form-field-description">${unsafe(field.description)}</div>` : ''}
                
                <div class="input-wrapper">
                    <input type="${inputType}" 
                           name="${inputName}" 
                           class="form-control" 
                           placeholder="${placeholder}"
                           ${field.isRequired ? 'required' : ''}
                           ${autocomplete ? html`autocomplete="${autocomplete}"` : ''}
                    >
                    
                    ${field.type === 'phone' ? html`
                        <div class="phone-badges-container" style="display:none; margin-top:8px;"></div>
                    ` : ''}
                </div>
                
                <div class="form-field-error" style="display:none"></div>
            </div>
        `;
        
        // Unwrap the container (since we rendered a div inside a div)
        // Or just render innerHTML of the container. 
        // My template included .form-field-container.
        // Let's return container.firstElementChild.
        const actualContainer = container.firstElementChild;
        
        const input = actualContainer.querySelector('input');
        
        if (field.type === 'phone') {
            TextFieldBuilder._attachPhoneLogic(input, actualContainer);
        }
        
        return actualContainer;
    }

    static _attachPhoneLogic(input, container) {
            // Default value if empty
            if (!input.value) {
                input.value = '+420'; // Default to CZ
            }
            
            // Format +420 logic
            const format = () => PhoneFormatter.formatInput(input);
            format(); 

            input.addEventListener('input', format);
            
            input.pattern = "^\\+\\d{3} \\d{3} \\d{3} \\d{3}$";
            
            const badgesContainer = container.querySelector('.phone-badges-container');
            if (!badgesContainer) return;
            
            // Chips (Declarative?)
            // We can't easily attach listeners in HTML string without global handlers.
            // So we create them manually or use helper?
            // Let's keep manual creation for chips to safeguard listeners.
            
            const createChip = (label, prefix) => {
                const chip = document.createElement('div');
                chip.textContent = label;
                chip.className = 'phone-badge-chip'; 
                // Using class defined in CSS or style attribute if needed.
                // Re-using the styles from before via cssText or class.
                // Let's assume there is css or we intentionally inline it for now to match previous behavior
                chip.style.cssText = `
                    display: inline-block;
                    padding: 4px 8px;
                    margin-right: 8px;
                    border-radius: 12px;
                    border: 1px solid var(--primary-color);
                    color: var(--primary-color);
                    background: rgba(var(--primary-color-rgb, 68, 101, 166), 0.1);
                    font-size: 12px;
                    font-weight: 500;
                    cursor: pointer;
                    user-select: none;
                `;
                
                chip.onmousedown = (e) => e.preventDefault();
                chip.onclick = () => {
                    let current = input.value;
                    let result = current;
                    
                    if (current.startsWith(prefix)) {
                        result = current;
                    } else if (current.startsWith('+420')) {
                        result = prefix + current.substring(4);
                    } else if (current.startsWith('+421')) {
                        result = prefix + current.substring(4);
                    } else if (current.startsWith('+')) {
                         const spaceIdx = current.indexOf(' ');
                         if (spaceIdx > 0) {
                             result = prefix + current.substring(spaceIdx);
                         } else {
                             result = prefix + ' ' + current.replace(/^\+\d+\s*/, '');
                         }
                    } else {
                        result = prefix + ' ' + current;
                    }
                    
                    input.value = PhoneFormatter.cleanPhoneNumber(result); 
                    PhoneFormatter.formatInput(input);
                    input.focus();
                };
                return chip;
            };

            const czChip = createChip('CZ +420', '+420');
            const skChip = createChip('SK +421', '+421');
            
            badgesContainer.appendChild(czChip);
            badgesContainer.appendChild(skChip);
            
            input.addEventListener('focus', () => {
                badgesContainer.style.display = 'block';
            });
            
            input.addEventListener('blur', () => {
                setTimeout(() => {
                    badgesContainer.style.display = 'none';
                }, 200);   
            });
    }

    static getAutocompleteValue(fieldType) {
        switch (fieldType) {
            case 'name': return 'given-name';
            case 'surname': return 'family-name';
            case 'email': return 'email';
            case 'phone': return 'tel';
            case 'city': return 'address-level2';
            case 'address': return 'street-address';
            case 'nationality': return 'country';
            case 'birth_year': return 'bday-year';
            default: return null;
        }
    }

    static getInputType(fieldType) {
        switch (fieldType) {
            case 'email': return 'email';
            case 'phone': return 'tel';
            case 'birth_year': return 'number';
            case 'note': return 'text'; // or textarea logic if we want
            default: return 'text';
        }
    }
}
