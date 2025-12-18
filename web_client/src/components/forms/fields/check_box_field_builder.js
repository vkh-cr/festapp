export class CheckBoxFieldBuilder {
    static create(field, formModel) {
        const container = document.createElement('div');
        container.className = 'form-field-container checkbox-field-container';
        if (field.isHidden) container.style.display = 'none';

        // Check if it's a simple boolean (no options) or select many (options)
        // Check if it's a simple boolean (no options) or select many (options)
        const shouldCheckOptions = field.type !== 'product_type';
        const hasOptionDescription = shouldCheckOptions && field.options && field.options.some(opt => opt.description && opt.description.trim().length > 0);
        const isCardDesign = (formModel && formModel.isCardDesign) || 
                             (field.description && field.description.trim().length > 0) ||
                             hasOptionDescription;
        // Flutter logic: if type is select_many or product_type(select_many), it has options.
        // If type is check_box (not explicitly listed in standard types but common), or just empty options?
        // Let's assume 'select_many' has `field.options`.
        
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
        optionsContainer.className = 'checkbox-options';
        
        if (field.options) {
            field.options.forEach(opt => {
                const wrapper = document.createElement('div');
                wrapper.className = 'form-check';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = field.id; // Same name for array logic in FormData?
                // FormData handles same-name as array in getAll()
                input.value = (opt.id !== undefined && opt.id !== null) ? opt.id : opt.title;
                input.id = `${field.id}_${(opt.id !== undefined && opt.id !== null) ? opt.id : opt.title}`;
                input.className = 'form-check-input';

                // Currency Tagging
                const currency = opt.currencyCode || opt.currency || opt.currency_code;
                if (currency) {
                    input.setAttribute('data-currency', currency);
                    wrapper.setAttribute('data-currency', currency);
                }
                
                if (isCardDesign) {
                    wrapper.classList.add('option-card');
                    // Full card clickability
                    wrapper.onclick = (e) => {
                        if (e.target !== input && e.target.tagName !== 'LABEL' && !e.target.closest('label')) {
                             input.click(); // Toggle
                        }
                    };
                }
                
                // Rich Label
                const optLabel = document.createElement('label');
                optLabel.className = 'form-check-label';
                optLabel.htmlFor = input.id;
                
                let labelContent = `<span>${opt.title || ''}</span>`;
                if (opt.price) {
                     const priceDisplay = `${opt.price} ${currency || ''}`;
                    labelContent += `<span class="option-price">+${priceDisplay}</span>`; 
                }
                optLabel.innerHTML = labelContent;
                
                // Content Wrapper
                const contentWrapper = document.createElement('div');
                contentWrapper.appendChild(optLabel);
                
                if (opt.description) {
                    const optDesc = document.createElement('span');
                    optDesc.className = 'option-description';
                    optDesc.innerHTML = opt.description;
                    contentWrapper.appendChild(optDesc);
                }

                wrapper.appendChild(input);
                wrapper.appendChild(contentWrapper);
                optionsContainer.appendChild(wrapper);
            });
        }
        
        container.appendChild(optionsContainer);
        
        // The original code had an `else` block here for single checkboxes.
        // We need to preserve that logic if `field.options` is empty or null.
        if (!field.options || field.options.length === 0) {
            // Single Boolean Checkbox (e.g. Terms & Conditions)
            const optWrapper = document.createElement('div');
            optWrapper.className = 'form-check single-checkbox';

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = field.id.toString();
            input.id = `field_${field.id}`;
            input.className = 'form-check-input';
            if (field.isRequired) input.required = true;

            const optLabel = document.createElement('label');
            optLabel.htmlFor = input.id;
            optLabel.className = 'form-check-label';
            optLabel.textContent = field.title || ''; // Title is next to checkbox
            if (field.isRequired) {
                optLabel.innerHTML += ' <span class="required-star">*</span>'; // HTML append for unsafe?
            }

            optWrapper.appendChild(input);
            optWrapper.appendChild(optLabel);
            container.appendChild(optWrapper);
            
            // Description below?
            if (field.description) {
                const desc = document.createElement('div');
                desc.className = 'form-field-description';
                desc.style.marginLeft = '1.5em'; // Indent under label
                desc.innerHTML = field.description;
                container.appendChild(desc);
            }
        }

        // Error message placeholder
        const error = document.createElement('div');
        error.className = 'form-field-error';
        error.style.display = 'none';
        container.appendChild(error);

        return container;
    }
}
