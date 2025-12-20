import{P as r}from"./index-DTik7pPR.js";class g{static render(l,p,e,a,d){const n=a.communicationTone,b=a.visibleFields.some(o=>o.type==="ticket");let t,i,s="check_circle",c="success-color";if(p)t=r.successTitle(n,b),i=r.paymentInfo(n);else if(e&&e.code===1017){const o=e.product&&e.product.title||"";t=r.productUnavailable(o),i=r.chooseDifferentVariant(n),s="error",c="error-color"}else{const o=e&&e.code||0;t=r.orderFailed,i=r.orderError(o),s="error",c="error-color"}l.innerHTML=`
            <div class="result-container">
                <div class="result-icon-wrapper ${c}">
                    <i class="material-icons result-icon">${s}</i>
                </div>
                <h2 class="result-title ${c}">${t}</h2>
                <p class="result-subtitle">${i}</p>
                
                <div class="result-actions">
                    <button class="btn btn-outline-secondary btn-back-to-form">
                        ${r.backToForm}
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
                .result-actions button:hover {
                    background-color: rgba(0,0,0,0.05);
                }
                
                @keyframes scaleIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            </style>
        `;const u=l.querySelector(".btn-back-to-form");u&&(u.onclick=()=>{d&&d()})}}export{g as OrderResult};
