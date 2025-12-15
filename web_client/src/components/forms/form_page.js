
import './form_component.css';
import './order_preview.css';
import { Component } from '../base/component.js';
import { CommonStrings } from '../shared/common_strings.js';
import { FormStrings } from './form_strings.js';
import { FormHelper } from './form_helper.js';
import { FormFieldBuilder } from './fields/form_field_builder.js';
import { TicketFieldBuilder } from './fields/ticket_field_builder.js';
import { DbForms } from './db_forms.js';
import { OrderPreview } from './order_preview.js';
import { DbOrders } from '../eshop/db_orders.js';
import { RouterService } from '../../services/router_service.js';
import { ColorUtils } from '../../utils/color_utils.js';
// ... (content generated later)
import { ThemeService } from '../../services/theme_service.js';
import { FeatureService } from '../features/feature_service.js';
import { CountdownWidget } from './widgets/countdown_widget.js';
import { NotAvailableWidget } from './widgets/not_available_widget.js';
import { FormRenderer } from './form_renderer.js';
import { FormDataReader } from './form_data_reader.js';
import { FormSession } from './form_session.js';
import { PriceWidget } from './widgets/price_widget.js';
import { CurrencySelectorWidget } from './widgets/currency_selector_widget.js';
import { FormValidator } from './form_validator.js';
import { FormNetwork } from './form_network.js';

export class FormPage extends Component {
    // Keep internal session static for now if needed across hot-reloads, or instance?
    // Instance is cleaner, but need to be careful with Router callbacks.
    // Let's go fully instance.
    constructor(hostId) {
        super(hostId);
        this.currentPriceWidget = null;
        this.currentSession = null;
        this.currentLink = null;
        this.onBack = null;
    }

    cleanup() {
        if (this.currentPriceWidget) {
            this.currentPriceWidget.destroy();
            this.currentPriceWidget = null;
        }
        this.currentSession = null;
        // Also remove legacy widget just in case
        const widget = document.getElementById('floating-price-widget');
        if (widget) widget.remove();
        
        // Base cleanup
        super.clear();
    }
    // Timer removed (handled by widgets)
    // static currentLink = null; // Now instance property
    // static onBack = null; // Callback for back navigation // Now instance property

    async init(link, options = {}) {
        // Reset Ticket Counter to ensure deterministic IDs (0, 1, 2...)
        // This prevents IDs from growing indefinitely and helps debugging.
        TicketFieldBuilder.reset();

        // Prevent re-init if same link (e.g. hash change/back from preview)
        // Hardened Check: If container has content, we assume it's valid.
        // NOTE: this.host is managed by base Component
        if (this.currentLink === link && this.host && this.host.innerHTML.trim() !== '') {
            console.log('FormPage already initialized for link (Persistent):', link);
            return;
        }
        // Check for existing instance to prevent duplicates or state leaks
        if (options.onBack) this.onBack = options.onBack;

        this.cleanup(); // Clean previous content

        this.currentLink = link;
        
        // Configuration
        this.onBack = this.onBack || (() => window.history.back()); // Default fallback

        // Standard cleanup logic
        // Widgets handle their own timers now (CountdownWidget)
        // FormPage.cleanup(); // Clean up any previous widget instances - Moved above



        // Ensure Host
        if (!this.host) {
             console.error("FormPage: No host element!");
             return;
        }
        
        // Clear previous content but DO NOT add a spinner
        this.host.innerHTML = '';
        // Containment for fixed children (Embedding Support)
        this.host.style.transform = 'translate(0)'; 
        this.host.style.display = 'block';

        // Hide the main application container to prevent layout shifts
        const app = document.getElementById('app');
        if (app) app.style.display = 'none';

        try {
            // 3. Fetch Data
            const formModel = await DbForms.getFormByLink(link);
            
            if (!formModel) {
                this.renderError(FormStrings.formNotFound);
                return;
            }

            // 4. Apply Theme
            this.applyTheme(formModel);

            // --- Availability Check Logic ---
            // Matches Flutter logic exactly
            const now = new Date();
            let isClosed = false;
            let isBeforeStart = false;

            if (formModel.startTime && now < formModel.startTime) {
                isClosed = true;
                isBeforeStart = true;
            } else if (formModel.endTime && now > formModel.endTime) {
                isClosed = true;
            } else if (formModel.isOpen === false) {
                 isClosed = true;
            }

            // Check URL params/Rules for preview
            const urlParams = new URLSearchParams(window.location.search);
            const isPreviewParam = urlParams.get('preview') === 'true';
            
            // RightsService logic placeholder: 
            // In Flutter: bool canPreview = RightsService.isEditorOrderView();
            // Here: Assume if they have the link and param, they can preview (for now).
            const canPreview = true; 
            const showPreview = canPreview && isPreviewParam;

            // showCountdown logic
            // Flutter: isBeforeStart && (form?.enableCountdown ?? false) && !showPreview
            // showCountdown logic
            // Flutter: isBeforeStart && (form?.enableCountdown ?? false) && !showPreview
            const showCountdown = isBeforeStart && formModel.enableCountdown && !showPreview;

            if (showCountdown) {
                 // Pass callback to reload when finished
                 CountdownWidget.render(this.host, formModel, () => {
                     this.init(link);
                 });
                 return;
            }

            // Not Available Logic
            // Flutter: if (_formNotAvailable || (isClosed && !showPreview && !showCountdown))
            // We use 'isClosed && !showPreview' because showCountdown is already handled above (returned).
            if (isClosed && !showPreview) {
                 NotAvailableWidget.render(this.host, formModel);
                 return;
            }

            // 5. Render Form
            this.renderForm(formModel, showPreview);

        } catch (e) {
            console.error(e);
            this.renderError(CommonStrings.error + ": " + e.message + "\n" + e.stack);
        }
    }

    renderLoading() {
        this.host.innerHTML = `<div class="loading-spinner">${CommonStrings.loading}</div>`;
    }

    renderError(message) {
        this.host.innerHTML = `<div class="error-message">${message}</div>`;
    }

    // Delegated to ThemeService
    applyTheme(formModel) {
        ThemeService.applyThemeFromModel(formModel);
    }

    renderForm(formModel, showPreview) {
        // Initialize Session
        const session = new FormSession(formModel);
        this.currentSession = session;
        
        // Subscribe to Validation Changes
        session.addEventListener('validation-changed', (e) => {
            FormValidator.renderErrors(this.host, e.detail);
        });

        // Initialize Widget (it subscribes itself)
        this.currentPriceWidget = new PriceWidget(session, this.host);
        FormRenderer.render(this.host, formModel, showPreview, {
            onSubmit: (form, model) => this.validateAndSubmit(form, model),
            onInput: (e, form, model) => {
                if (e.type === 'input') FormValidator.handleInputValidation(e, form, session);
                
                // Optimized State Update
                // If target has no name (e.g. Ticket Add/Remove button dispatch), refresh full structure
                if (!e.target.name) {
                    session.refreshPayload(form);
                } else {
                    session.handleInput(e, form);
                }
            }
        });
        
        new CurrencySelectorWidget(session, this.host);
        

        
        // Handle Currency Filtering
        session.addEventListener('state-changed', (e) => {
            const { currency, previousCurrency } = e.detail;
            const form = this.host.querySelector('form'); // Live lookup
            if (!form) return;

            // User Request: "deselect all products if you switch the currency"
            // We should aggressive deselect ALL products if the currency actually changed.
            // But state-changed fires on PRICE updates too. 
            // We need to know if CURRENCY changed. 
            // The event detail only gives current currency. 
            // We need to compare with a tracked previous state, or check if the event provides it.
            // Since we don't have 'previousCurrency' in the event detail yet...
            // Wait, we generate the event in FormSession.
            
            // To be safe and compliant with "switch currency" implied action:
            // This listener hooks into `state-changed`. If we just uncheck everything every time state changes,
            // we kill partial selections during standard input. BAD.
            
            // WE MUST CHECK IF CURRENCY CHANGED.
            // But `FormSession` emits `state-changed` with { currency, ... }.
            // We can store last seen currency in a local variable in this scope.
            
        });
        
        let lastSeenCurrency = session.state.currency;

        session.addEventListener('state-changed', (e) => {
             const { currency } = e.detail;
             const form = this.host.querySelector('form');
             if (!form) return;
             
             const currencyChanged = lastSeenCurrency !== currency;
             lastSeenCurrency = currency;

             const allCurrencyElements = form.querySelectorAll('[data-currency]');
             
             allCurrencyElements.forEach(el => {
                const itemCurrency = el.getAttribute('data-currency');
                
                // Visibility Logic
                if (el.classList.contains('form-check') || el.classList.contains('dropdown-item') || el.classList.contains('option-card')) {
                     if (itemCurrency !== currency) {
                         el.style.display = 'none';
                     } else {
                         el.style.display = ''; 
                     }
                }

                // Deselection Logic
                // If currency changed, we deselect EVERYTHING (as requested "deselect all products").
                // OR we strictly deselect invalid currency items?
                // Request: "deselect all products if you switch the currency"
                // This implies a reset.
                if (currencyChanged && el.tagName === 'INPUT') {
                     if (el.checkValidity && (el.type === 'radio' || el.type === 'checkbox')) {
                         el.checked = false;
                         // Fix: Hide "Clear Selection" button if present
                         const fieldContainer = el.closest('.form-field-container');
                         if (fieldContainer) {
                             const clearBtn = fieldContainer.querySelector('.btn-clear-selection');
                             if (clearBtn) clearBtn.style.display = 'none';
                         }
                     }
                }
                
                // Also ensure invalid currency items are unchecked even if currency didn't change (sanity check)
                if (el.tagName === 'INPUT' && itemCurrency !== currency) {
                      if (el.checkValidity && (el.type === 'radio' || el.type === 'checkbox') && el.checked) {
                         el.checked = false;
                         // Same fix here
                         const fieldContainer = el.closest('.form-field-container');
                         if (fieldContainer) {
                             const clearBtn = fieldContainer.querySelector('.btn-clear-selection');
                             if (clearBtn) clearBtn.style.display = 'none';
                         }
                     }
                }
             });

             // If currency changed, trigger a recalculation to reflect zeroed price
             if (currencyChanged) {
                 // The DOM has been modified (unchecked items). We MUST sync the session payload.
                 // This will re-read the form, see that items are gone, and update the price.
                 session.refreshPayload(form);
             }
        });
        
        // Trigger initial update for the price widget
        setTimeout(() => {
            const form = this.host.querySelector('form');
            if (form) {
                // Initial syncing
                // Parse the initial form state (e.g. default values) into the session
                session.refreshPayload(form);
                
                // Initial syncing
                // If the session initialized with a currency (e.g. from logic), ensure filter runs.
                // Disptach current state to trigger filter
                session.setIsReady(true);
            }
        }, 100);
    }


    // --- Validation & Submit Logic ---
    
    // Delegated to FormValidator
    handleInputValidation(e, form) {
         FormValidator.handleInputValidation(e, form, this.currentSession);
    }

    validateAndSubmit(form, formModel) {
        const isValid = FormValidator.validateAndShowErrors(form, formModel, this.currentSession);
        if (isValid) {
            this.handlePreview(form, formModel);
        }
    }

    calculateTotal(form, formModel) {
        if (this.currentSession) {
            return this.currentSession.state;
        }
        const payload = FormDataReader.getPayload(form, formModel);
        return FormHelper.calculatePrice(payload, formModel);
    }

    handlePreview(form, formModel) {
        if (!form.reportValidity()) return;

        import('./order_preview.js').then(({ OrderPreview }) => {
             OrderPreview.show(form, formModel, (overlay) => {
                 this.submitOrder(form, formModel, overlay || document.body); 
             });
        });
    }
    
    closePreview() {
        const overlay = document.getElementById('order-preview-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
            setTimeout(() => {
                overlay.remove(); 
            }, 300); 
        }
    }

    submitOrder(form, formModel, unusedContent) {
        // 1. Close Preview
        const previewOverlay = document.getElementById('order-preview-overlay');
        if (previewOverlay) {
             previewOverlay.remove();
             RouterService.goBackProgrammatically();
        } else {
             this.closePreview();
        }

        // 2. Show Loader
        const loader = this.showFullScreenLoader();
        
        // 3. Prepare Data
        const payload = this.currentSession ? this.currentSession.payload : FormDataReader.getPayload(form, formModel);
        
        // 4. Submit via Network
        FormNetwork.submitOrder(payload).then(result => {
             loader.remove();
             document.body.style.overflow = ''; 
             
             if (result.success) {
                 // Reset Form
                 if (this.host) {
                     this.host.innerHTML = '';
                     this.renderForm(formModel, false);
                 }
                 this.cleanup(); 
                 window.scrollTo(0, 0); 
             }
             
             this.showFullScreenResult(result.success, result.data, formModel);
             
        }).catch(e => {
             console.error("Submit Error:", e);
             loader.remove();
             document.body.style.overflow = ''; 
             this.showFullScreenResult(false, { code: 999 }, formModel);
        });
    }

    showFullScreenLoader() {
        const loader = document.createElement('div');
        loader.className = 'fullscreen-loader-overlay';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85); /* Dark background */
            backdrop-filter: blur(5px);
            z-index: 3000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: var(--font-family-base, sans-serif);
        `;
        
        // Spinner
        loader.innerHTML = `
            <div class="spinner"></div>
            <div style="margin-top: 24px; font-weight: 600; font-size: 1.1rem; color: #ffffff;">
                ${CommonStrings.processing || 'Processing...'}
            </div>
        `;
        
        document.body.appendChild(loader);
        document.body.style.overflow = 'hidden'; // Ensure scroll locked
        
        // Ensure Spinner CSS
        if (!document.getElementById('spinner-style')) {
            const style = document.createElement('style');
            style.id = 'spinner-style';
            style.textContent = `
                .spinner {
                    border: 4px solid rgba(255,255,255,0.1); /* Light track for dark bg */
                    border-top: 4px solid var(--primary-color, #3498db);
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        return loader;
    }

    showFullScreenResult(success, resultData, formModel) {
        // Push State
        RouterService.pushOverlayState('order-result');

        // Create Full Screen Container
        const container = document.createElement('div');
        container.className = 'fullscreen-result-overlay';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'var(--background-color, #fff)';
        container.style.zIndex = '3000';
        container.style.overflowY = 'auto'; // Scrollable result
        container.style.padding = '20px';
        container.style.boxSizing = 'border-box'; /* Ensure padding doesn't affect width calculations */
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.justifyContent = 'center'; /* Center Vertically */
        container.style.alignItems = 'center'; /* Center Horizontally */
        
        document.body.appendChild(container);
        document.body.style.overflow = 'hidden'; // Ensure scroll locked

        // Cleanup Function
        const cleanup = () => {
            container.remove();
            document.body.style.overflow = ''; // Restore scroll
            
            if (success) {
                    // Reset Form State BEHIND the overlay (redundant but safe)
                    if (this.host) {
                        this.host.innerHTML = '';
                        this.renderForm(formModel, false);
                    }
                    // Force remove generic widget if any
                    this.cleanup(); // Clean up the PriceWidget instance
                    
                    // Scroll to top immediately
                    window.scrollTo(0, 0);
            } else {
                    // Failure: Ensure widget is visible (defensive)
            }
        };

        // Handle Back History
        const popHandler = () => {
            window.removeEventListener('popstate', popHandler);
            cleanup();
        };
        window.addEventListener('popstate', popHandler, { once: true });

        import('./order_result.js').then(({ OrderResult }) => {
            OrderResult.render(container, success, resultData, formModel, () => {
                // On Close (Button Click) -> Trigger History Back
                // This will fire 'popstate', which calls cleanup()
                if (this.onBack) this.onBack();
            });
        });
    }
}
