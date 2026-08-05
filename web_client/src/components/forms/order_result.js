import { CommonStrings } from '../shared/common_strings.js';
import { PublicOrderStrings } from './public_order_strings.js';
import { ColorUtils } from '../../utils/color_utils.js';

export class OrderResult {
    static render(container, success, resultData, formModel, onClose) {
        // Prepare Data
        const tone = formModel.communicationTone; 
        // We need to know if tickets were involved. 
        // FormModel knows fields. If ticket field exists -> hasTickets = true.
        const hasTickets = formModel.visibleFields.some(f => f.type === 'ticket');
        
        let title, subtitle;
        let icon = 'check_circle';
        let colorClass = 'success-color'; 

        if (success) {
            title = PublicOrderStrings.successTitle(tone, hasTickets);
            subtitle = PublicOrderStrings.paymentInfo(tone);
        } else if (resultData && resultData.code === 1017) { // Product Unavailable
            const prodTitle = (resultData.product && resultData.product.title) || "";
            title = PublicOrderStrings.productUnavailable(prodTitle);
            subtitle = PublicOrderStrings.chooseDifferentVariant(tone);
            icon = 'error';
            colorClass = 'error-color';
        } else {
            // Generic Error
            const code = (resultData && resultData.code) || 0;
            title = PublicOrderStrings.orderFailed;
            subtitle = PublicOrderStrings.orderError(code);
            icon = 'error';
            colorClass = 'error-color';
        }

        // Render HTML
        container.innerHTML = `
            <div class="result-container">
                <div class="result-icon-wrapper ${colorClass}">
                    <i class="material-icons result-icon">${icon}</i>
                </div>
                <h2 class="result-title ${colorClass}">${title}</h2>
                <p class="result-subtitle">${subtitle}</p>
                <div class="result-payment-details"></div>
                
                <div class="result-actions">
                    <button class="btn btn-outline-secondary btn-back-to-form">
                        ${PublicOrderStrings.backToForm}
                    </button>
                </div>
            </div>
            <style>
                .result-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 32px 16px;
                    text-align: center;
                    animation: fadeIn 0.5s ease-out;
                    width: 100%;
                    max-width: 600px; /* Prevent being too wide on desktops */
                    margin: 0 auto; /* Center in parent if block */
                    box-sizing: border-box;
                }
                .result-icon-wrapper {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .success-color {
                    color: var(--dark-green, #2e7d32); /* ThemeConfig.darkGreen */
                }
                .result-icon-wrapper.success-color {
                    background-color: var(--dark-green, #2e7d32);
                    color: white;
                }
                .error-color {
                    color: var(--red-color, #d32f2f);
                }
                .result-icon-wrapper.error-color {
                    background-color: var(--red-color, #d32f2f);
                    color: white;
                }
                .result-icon {
                    font-size: 64px;
                }
                .result-title {
                    font-size: 1.4rem;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                .result-subtitle {
                    font-size: 1rem;
                    color: var(--text-color);
                    opacity: 0.7;
                    margin-bottom: 32px;
                    max-width: 400px;
                    line-height: 1.5;
                }
                .result-actions button {
                    /* Match Flutter OutlinedButton style roughly */
                    border: 1px solid var(--divider-color, #ccc);
                    background: transparent;
                    color: var(--primary-color);
                    padding: 12px 32px;
                    border-radius: 8px;
                    font-weight: bold;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .result-payment-details { width: 100%; max-width: 420px; margin: 0 0 24px; }
                .result-payment-row { display: flex; justify-content: space-between; gap: 16px; padding: 6px 0; text-align: left; }
                .result-payment-value { font-weight: 600; text-align: right; overflow-wrap: anywhere; }
                .result-actions button:hover {
                    background-color: rgba(0,0,0,0.05);
                }
                
                @keyframes scaleIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            </style>
        `;

        const paymentQr = success ? resultData?.payment_qr : null;
        const paymentHost = container.querySelector('.result-payment-details');
        if (paymentHost && paymentQr) {
            const rows = [
                [PublicOrderStrings.bankAccount, paymentQr.account_number_human_readable || paymentQr.account_number],
                [paymentQr.reference_kind === 'RF' ? PublicOrderStrings.paymentReference : PublicOrderStrings.variableSymbol, paymentQr.reference],
                [PublicOrderStrings.amountToPay, `${paymentQr.amount} ${paymentQr.currency_code}`],
            ];
            for (const [label, value] of rows) {
                if (value == null || String(value).trim() === '') continue;
                const row = document.createElement('div');
                row.className = 'result-payment-row';
                const labelNode = document.createElement('span');
                const valueNode = document.createElement('span');
                valueNode.className = 'result-payment-value';
                labelNode.textContent = label;
                valueNode.textContent = String(value);
                row.append(labelNode, valueNode);
                paymentHost.appendChild(row);
            }
        }

        // Attach Event
        const backBtn = container.querySelector('.btn-back-to-form');
        if (backBtn) {
            backBtn.onclick = () => {
                if (onClose) onClose();
            };
        }
    }
}
