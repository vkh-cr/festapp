import { formatPrice } from '../../../utils/formatters.js';
import { FormStrings } from '../form_strings.js';

export class OptionBuilderHelper {
    /**
     * Detect whether card design should be used.
     */
    static isCardDesign(field, formModel) {
        const shouldCheckOptions = field.type !== 'product_type';
        const hasOptionDescription = shouldCheckOptions && field.options &&
            field.options.some(opt => opt.description && opt.description.trim().length > 0);

        return (formModel && formModel.isCardDesign) ||
               (field.description && field.description.trim().length > 0) ||
               hasOptionDescription;
    }

    /**
     * Build <label class="form-field-label"> with optional required star.
     */
    static buildFieldLabel(field) {
        const label = document.createElement('label');
        label.className = 'form-field-label';
        label.innerHTML = `${field.title || ''}${field.isRequired ? '<span class="required-star">*</span>' : ''}`;
        return label;
    }

    /**
     * Build <div class="form-field-description">.
     */
    static buildFieldDescription(field) {
        const desc = document.createElement('div');
        desc.className = 'form-field-description';
        desc.innerHTML = field.description;
        return desc;
    }

    /**
     * Build a single option wrapper (radio or checkbox).
     * @param {object} field
     * @param {object} opt
     * @param {object} formModel
     * @param {'radio'|'checkbox'} inputType
     * @param {boolean} cardDesign
     * @returns {HTMLDivElement} wrapper element
     */
    static buildOptionWrapper(field, opt, formModel, inputType, cardDesign) {
        const wrapper = document.createElement('div');
        wrapper.className = 'form-check';
        if (cardDesign) wrapper.classList.add('option-card');

        const input = document.createElement('input');
        input.type = inputType;
        input.name = field.id;
        input.value = (opt.id !== undefined && opt.id !== null) ? opt.id : opt.title;
        input.id = `${field.id}_${(opt.id !== undefined && opt.id !== null) ? opt.id : opt.title}`;
        input.className = 'form-check-input';

        // Currency tagging
        const currency = opt.currencyCode || opt.currency || opt.currency_code;
        if (currency) {
            input.setAttribute('data-currency', currency);
            wrapper.setAttribute('data-currency', currency);
        }

        // Full wrapper clickability
        wrapper.onclick = (e) => {
            if (e.target !== input && e.target.tagName !== 'LABEL' && !e.target.closest('label')) {
                input.click();
            }
        };

        // Rich label
        const optLabel = document.createElement('label');
        optLabel.className = 'form-check-label';
        optLabel.htmlFor = input.id;

        let labelContent = `<span>${opt.title || ''}</span>`;
        if (opt.price) {
            const priceDisplay = formatPrice(opt.price, currency, 0, 'cs-CZ');
            labelContent += `<span class="option-price">+ ${priceDisplay}</span>`;
        }
        optLabel.innerHTML = labelContent;

        // Content wrapper with label + optional surcharge/description
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
                const surchargePrice = formatPrice(surchargeData.amount, surchargeData.currency || currency, 0, 'cs-CZ');
                descHtml += `<span class="surcharge-info">${FormStrings.surchargeOnSite}&nbsp;<span class="surcharge-price">+ ${surchargePrice}</span></span>`;
                if (opt.description) descHtml += '<br>';
            }
            if (opt.description) {
                descHtml += opt.description;
            }

            optDesc.innerHTML = descHtml;
            contentWrapper.appendChild(optDesc);
        }

        wrapper.appendChild(input);
        wrapper.appendChild(contentWrapper);

        return wrapper;
    }
}
