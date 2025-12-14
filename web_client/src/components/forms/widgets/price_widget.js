import { FormPage } from '../form_page.js'; // Needed for reference or similar? No, should be independent.

export class PriceWidget {
    constructor(formSession, container) {
        this.session = formSession;
        this.container = container;
        this.element = null;
        this.isVisible = false;
        
        // Bind for listener
        this._onStateChange = this._onStateChange.bind(this);
        
        // Subscribe
        this.session.addEventListener('state-changed', this._onStateChange);
    }

    _onStateChange(e) {
        const state = e.detail;
        this.render(state);
    }

    render(state = null) {
        const { totalPrice, totalItems, currency } = state || this.session.currentState;

        // Logic matched from FormPage._renderFloatingPriceWidget
        
        // Condition: Hide if empty (unless we want to force it, but usually not)
        if (totalPrice <= 0 && totalItems <= 0) {
            if (this.element) {
                this.element.remove();
                this.element = null;
            }
            this.updateSubmitButton(false);
            return;
        }

        this.updateSubmitButton(true);

        if (!this.element) {
            this.element = document.createElement('div');
            this.element.id = 'floating-price-widget';
            this.element.className = 'floating-price-widget';
            
            // Insert at top so it sits above content and behaves correctly with sticky
            if (this.container.firstChild) {
                this.container.insertBefore(this.element, this.container.firstChild);
            } else {
                this.container.appendChild(this.element);
            }
            
            // Apply Styling
            const formModel = this.session.formModel;
            const primaryColor = formModel.primaryColor || 'var(--primary-color)';
            
            this.element.style.cssText = `
                position: -webkit-sticky; /* Safari */
                position: sticky;
                top: 16px;
                z-index: 1000;
                
                background-color: ${primaryColor};
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                z-index: 1000;
                font-family: var(--font-family-base);
                font-weight: bold;
                font-size: 1.1rem;
                animation: fadeIn 0.3s ease-out;
                cursor: pointer;
            `;
            
            // To make sticky work effectively without pushing content down too much, 
            // we should probably insert it at the very top of the container.
            // It is appended to 'container'.
            if (this.container.firstChild) {
                this.container.insertBefore(this.element, this.container.firstChild);
            } else {
                this.container.appendChild(this.element);
            }
            // Use flexbox on container? No, container has form content.
            // Let's use absolute positioning relative to a sticky wrapper?
            // Actually, simplest 'Floating' behavior in flow:
            // position: sticky; top: 16px; left: 100%; transform: translateX(-100%); ?
            // No.
            
            // Let's try explicit sticky behavior.
            this.element.style.position = 'sticky';
            this.element.style.top = '16px';
            this.element.style.zIndex = '1000';
            this.element.style.width = 'fit-content';
            this.element.style.marginLeft = 'auto'; // Right align
            this.element.style.marginRight = '16px';
            
            // Note: If container has padding, sticky respects it.
            // form-page-container usually has padding.
            
            this.element.onclick = () => {
                const submitBtn = document.querySelector('#dynamic-form button[type="submit"]');
                if (submitBtn) submitBtn.scrollIntoView({ behavior: 'smooth' });
            };
        }

        this.element.innerHTML = `
            <span style="margin-right: 6px;">${totalItems}x</span>
            <i class="material-icons" style="font-size: 24px; margin-right: 10px;">local_activity</i>
            <span>${totalPrice} ${currency}</span>
        `;
    }

    updateSubmitButton(isEnabled) {
        // We need to find the submit button. Ideally the session knows the form, or we search?
        // FormSession doesn't store DOM. We search by ID as 'dynamic-form' is standard.
        // Use container if available to avoid global search
        const context = this.container || document;
        const form = context.querySelector('#dynamic-form') || document.getElementById('dynamic-form');
        
        if (!form) return;
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const hasTicketField = this.session.formModel.visibleFields.some(f => f.type === 'ticket');
        
        if (hasTicketField && submitBtn) {
            if (isEnabled) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('disabled');
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
            } else {
                submitBtn.disabled = true;
                submitBtn.classList.add('disabled');
                submitBtn.style.opacity = '0.5';
                submitBtn.style.cursor = 'not-allowed';
            }
        }
    }

    destroy() {
        this.session.removeEventListener('state-changed', this._onStateChange);
        if (this.element) this.element.remove();
    }
}
