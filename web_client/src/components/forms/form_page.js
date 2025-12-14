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
import { LayoutFixer } from '../../utils/layout_fixer.js';
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

export class FormPage {
    static containerId = 'form-page-container';
    static _currentPriceWidget = null;
    static _currentSession = null;

    static cleanup() {
        if (FormPage._currentPriceWidget) {
            FormPage._currentPriceWidget.destroy();
            FormPage._currentPriceWidget = null;
        }
        FormPage._currentSession = null;
        // Also remove legacy widget just in case
        const widget = document.getElementById('floating-price-widget');
        if (widget) widget.remove();
    }
    // Timer removed (handled by widgets)
    static currentLink = null;

    static onBack = null; // Callback for back navigation

    static async init(link, options = {}) {
        // Reset Ticket Counter to ensure deterministic IDs (0, 1, 2...)
        // This prevents IDs from growing indefinitely and helps debugging.
        TicketFieldBuilder.reset();

        // Prevent re-init if same link (e.g. hash change/back from preview)
        // Hardened Check: If container has content, we assume it's valid.
        let container = document.getElementById(FormPage.containerId);
        if (FormPage.currentLink === link && container && container.innerHTML.trim() !== '') {
            console.log('FormPage already initialized for link (Persistent):', link);
            return;
        }
        // Check for existing instance to prevent duplicates or state leaks
        if (options.onBack) FormPage.onBack = options.onBack;

        FormPage.cleanup(); // Clean previous instance if any

        FormPage.currentLink = link;
        
        // Configuration
        FormPage.onBack = FormPage.onBack || (() => window.history.back()); // Default fallback

        // Standard cleanup logic
        // Widgets handle their own timers now (CountdownWidget)
        // FormPage.cleanup(); // Clean up any previous widget instances - Moved above

        // Init Layout Fixer
        LayoutFixer.init(FormPage.containerId);

        // Ensure Container
        if (!container) {
            container = document.createElement('div');
            container.id = FormPage.containerId;
            // Containment for fixed children (Embedding Support)
            container.style.transform = 'translate(0)'; 
            document.body.appendChild(container); 
        }
        
        // Clear previous content but DO NOT add a spinner
        container.innerHTML = '';
        container.style.display = 'block';

        // Hide other main views
        const eventsGrid = document.getElementById('events-grid');
        if (eventsGrid) eventsGrid.style.display = 'none';
        
        const searchContainer = document.getElementById('search-container');
        if (searchContainer) searchContainer.style.display = 'none';

        const header = document.getElementById('universal-header');
        if (header) header.style.display = 'none';
        
        const feedbackFab = document.getElementById('feedback-fab');
        if (feedbackFab) feedbackFab.style.display = 'none';

        try {
            // 3. Fetch Data
            const formModel = await DbForms.getFormByLink(link);
            
            if (!formModel) {
                FormPage.renderError(container, FormStrings.formNotFound);
                return;
            }

            // 4. Apply Theme
            FormPage.applyTheme(formModel);

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
                 CountdownWidget.render(container, formModel, () => {
                     FormPage.init(link);
                 });
                 return;
            }

            // Not Available Logic
            // Flutter: if (_formNotAvailable || (isClosed && !showPreview && !showCountdown))
            // We use 'isClosed && !showPreview' because showCountdown is already handled above (returned).
            if (isClosed && !showPreview) {
                 NotAvailableWidget.render(container, formModel);
                 return;
            }

            // 5. Render Form
            FormPage.renderForm(container, formModel, showPreview);

        } catch (e) {
            console.error(e);
            FormPage.renderError(container, CommonStrings.error + ": " + e.message + "\n" + e.stack);
        }
    }

    static renderLoading(container) {
        container.innerHTML = `<div class="loading-spinner">${CommonStrings.loading}</div>`;
    }

    static renderError(container, message) {
        container.innerHTML = `<div class="error-message">${message}</div>`;
    }

    // Delegated to ThemeService
    static applyTheme(formModel) {
        ThemeService.applyThemeFromModel(formModel);
    }

    static renderForm(container, formModel, showPreview) {
        // Initialize Session
        const session = new FormSession(formModel);
        FormPage._currentSession = session;
        
        // Subscribe to Validation Changes
        session.addEventListener('validation-changed', (e) => {
            FormValidator.renderErrors(container, e.detail);
        });

        // Initialize Widget (it subscribes itself)
        FormPage._currentPriceWidget = new PriceWidget(session, container);
        FormRenderer.render(container, formModel, showPreview, {
            onSubmit: (form, model) => FormPage.validateAndSubmit(form, model),
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
        
        new CurrencySelectorWidget(session, container);
        
        // Fix layout immediately after render to prevent visible jump
        LayoutFixer.fixNow(FormPage.containerId);
        
        // Handle Currency Filtering
        session.addEventListener('state-changed', (e) => {
            const { currency, previousCurrency } = e.detail;
            const form = container.querySelector('form'); // Live lookup
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
             const form = container.querySelector('form');
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
                         const container = el.closest('.form-field-container');
                         if (container) {
                             const clearBtn = container.querySelector('.btn-clear-selection');
                             if (clearBtn) clearBtn.style.display = 'none';
                         }
                     }
                }
                
                // Also ensure invalid currency items are unchecked even if currency didn't change (sanity check)
                if (el.tagName === 'INPUT' && itemCurrency !== currency) {
                      if (el.checkValidity && (el.type === 'radio' || el.type === 'checkbox') && el.checked) {
                         el.checked = false;
                         // Same fix here
                         const container = el.closest('.form-field-container');
                         if (container) {
                             const clearBtn = container.querySelector('.btn-clear-selection');
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
            const form = container.querySelector('form');
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

    // --- Validation & Submit Logic (Extracted for clarity) ---
    
    // --- Validation & Submit Logic ---
    
    // Delegated to FormValidator
    static handleInputValidation(e, form) {
         // This is now called directly via FormValidator in the renderer callback above, 
         // but if called from elsewhere:
         FormValidator.handleInputValidation(e, form, FormPage._currentSession);
    }

    static validateAndSubmit(form, formModel) {
        const isValid = FormValidator.validateAndShowErrors(form, formModel, FormPage._currentSession);
        if (isValid) {
            FormPage.handlePreview(form, formModel);
        }
    }

    // _renderErrors removed (delegated to FormValidator)

    
    // ... calculateTotal, handlePreview, closePreview, submitOrder (Keep existing, assumed valid)
    static calculateTotal(form, formModel) {
        if (FormPage._currentSession) {
            return FormPage._currentSession.state;
        }
        // Fallback (Should not be needed if flow is correct)
        const payload = FormDataReader.getPayload(form, formModel);
        return FormHelper.calculatePrice(payload, formModel);
    }

    static handlePreview(form, formModel) {
        // Validate form before preview? 
        // existing code did not seem to validate strictly, 
        // but typically check validity first.
        if (!form.reportValidity()) return;

        import('./order_preview.js').then(({ OrderPreview }) => {
             OrderPreview.show(form, formModel, (overlay) => {
                 FormPage.submitOrder(form, formModel, overlay || document.body); // Fallback to body if overlay missing
             });
        });
    }
    
    static closePreview() {
        // Correct ID: order-preview-overlay
        const overlay = document.getElementById('order-preview-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
            setTimeout(() => {
                overlay.remove(); // Use remove() instead of display none for cleanup
            }, 300); 
        }
    }

    static submitOrder(form, formModel, unusedContent) {
        // 1. Close Preview
        const previewOverlay = document.getElementById('order-preview-overlay');
        if (previewOverlay) {
             previewOverlay.remove();
             RouterService.goBackProgrammatically();
        } else {
             FormPage.closePreview();
        }

        // 2. Show Loader
        const loader = FormPage._showFullScreenLoader();
        
        // 3. Prepare Data
        const payload = FormPage._currentSession ? FormPage._currentSession.payload : FormDataReader.getPayload(form, formModel);
        
        // 4. Submit via Network
        FormNetwork.submitOrder(payload).then(result => {
             loader.remove();
             document.body.style.overflow = ''; 
             
             if (result.success) {
                 // Reset Form
                 const container = document.getElementById(FormPage.containerId);
                 if (container) {
                     container.innerHTML = '';
                     FormPage.renderForm(container, formModel, false);
                 }
                 FormPage.cleanup(); 
                 window.scrollTo(0, 0); 
             }
             
             FormPage._showFullScreenResult(result.success, result.data, formModel);
             
        }).catch(e => {
             console.error("Submit Error:", e);
             loader.remove();
             document.body.style.overflow = ''; 
             FormPage._showFullScreenResult(false, { code: 999 }, formModel);
        });
    }

    static _showFullScreenLoader() {
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

    static _showFullScreenResult(success, resultData, formModel) {
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
                    const formContainer = document.getElementById(FormPage.containerId);
                    if (formContainer) {
                        formContainer.innerHTML = '';
                        FormPage.renderForm(formContainer, formModel, false);
                    }
                    // Force remove generic widget if any
                    FormPage.cleanup(); // Clean up the PriceWidget instance
                    
                    // Scroll to top immediately
                    window.scrollTo(0, 0);
            } else {
                    // Failure: Ensure widget is visible (defensive)
                    // It might have been lost if re-init happened or total check failed.
                    // We need the form to calculate totals properly.
                    // The PriceWidget is now managed by FormPage._currentPriceWidget and will re-render if needed.
                    // No explicit re-render call here, as it's tied to the session.
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
                if (FormPage.onBack) FormPage.onBack();
            });
        });
    }
}
