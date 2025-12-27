import { CommonStrings } from '../shared/common_strings.js';
import { FormStrings } from './form_strings.js';
import { OrdersStrings } from '../eshop/orders_strings.js'; 

import { RouterService } from '../../services/router_service.js';
import { PublicOrderStrings } from './public_order_strings.js';
import { OrderResult } from './order_result.js';
import { FeatureService } from '../features/feature_service.js';
import { FormDataReader } from './form_data_reader.js';

// Inject CSS
if (typeof document !== 'undefined') {
    const cssUrl = new URL('./order_preview.css', import.meta.url).href;
    if (!document.querySelector(`link[href="${cssUrl}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;
        document.head.appendChild(link);
    }
}

export class OrderPreview {

    static show(form, formModel, priceData, onConfirm, onClose, precalculatedPayload = null) {
        // 1. Calculate and Prepare Data
        const data = OrderPreview._prepareData(form, formModel, priceData, precalculatedPayload);
        
        // 2. Render Overlay
        let overlay = document.getElementById('order-preview-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'order-preview-overlay';
            overlay.className = 'order-preview-overlay';
            document.body.appendChild(overlay);
        }

        overlay.innerHTML = OrderPreview._render(data);

        // 3. Close Logic (with Animation)
        let isClosing = false;
        const closePreview = () => {
            if (isClosing) return;
            isClosing = true;
            
            // If closed by drag, we handled animation manually. Don't add .closing class (which forces slideDown from 0).
            if (overlay.dataset.closedByDrag !== 'true') {
                overlay.classList.add('closing');
            } else {
                // We closed by drag. The content is already translated down.
                // We just want to fade out the background.
                // We can add a specialized class or just rely on the fact that overlay supports fadeOut.
                // If we add .closing, it triggers fadeOut on overlay, AND slideDown on content.
                // We want to suppress slideDown on content.
                const content = overlay.querySelector('.order-preview-content');
                if (content) {
                     // Force animation to none so CSS keyframes don't override our manual transform
                     content.style.animation = 'none';
                }
                overlay.classList.add('closing');
            }
            
            // Remove listeners
            document.removeEventListener('keydown', escHandler);
            overlay.removeEventListener('click', backdropHandler);
            
            // Wait for animation
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.classList.remove('visible', 'closing');
                delete overlay.dataset.closedByDrag; 
                overlay.innerHTML = ''; // Cleanup
                document.body.style.overflow = ''; // Restore Scroll
                if (onClose) onClose();
            }, 250); 
        };

        const closeBtn = overlay.querySelector('.btn-close-preview');
        // Close via Button -> Navigate Back (which triggers popstate -> close) OR Close directly?
        // Flutter logic: Navigator.pop().
        // SPA logic: history.back().
        
        // We pushed state. So to close, we should go back.
        // The popstate listener will then trigger the actual close visuals?
        // OR we close visual + go back.
        
        // Let's rely on history.back() for all "close" actions to ensure state consistency.
        const triggerBack = () => {
            RouterService.goBackProgrammatically();
        };

        if (closeBtn) closeBtn.onclick = triggerBack;

        // 4. Listeners
        
        // ESC Key
        const escHandler = (e) => {
            if (e.key === 'Escape') triggerBack();
        };
        document.addEventListener('keydown', escHandler);

        // Backdrop Click
        const backdropHandler = (e) => {
            if (e.target === overlay) triggerBack();
        };
        overlay.addEventListener('click', backdropHandler);
        
        // Submit
        const submitBtn = overlay.querySelector('.btn-submit-order');
        if (submitBtn) {
            submitBtn.onclick = () => {
                 if (onConfirm) onConfirm(overlay); 
            };
        }

        // Show
        overlay.classList.remove('closing');
        overlay.style.display = 'flex';
        overlay.offsetHeight; // Force reflow
        overlay.classList.add('visible');
        
        const content = overlay.querySelector('.order-preview-content');
        const body = overlay.querySelector('.order-preview-body');
        
        let startY = 0;
        let currentY = 0;
        let isDragging = false;
        let ignoreGesture = false;
        
        const touchStart = (e) => {
            // Check if touch target is header or handle
            const isHeader = e.target.closest('.order-preview-header') || e.target.closest('.order-preview-handle-bar');
            
            if (!isHeader) {
                ignoreGesture = true;
                return;
            }
            
            ignoreGesture = false;
            startY = e.touches[0].clientY;
            isDragging = false;
            content.style.transition = 'none'; // Disable transition during drag
        };
        
        const touchMove = (e) => {
            if (ignoreGesture) return;
            
            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;
            
            if (deltaY > 0) {
                 if (e.cancelable) e.preventDefault();
                 
                 isDragging = true;
                 
                 // Native feel: 1:1 tracking
                 content.style.transform = `translateY(${deltaY}px)`;
                 
                 // Dynamic Backdrop Fade
                 const height = content.clientHeight || 500;
                 const progress = Math.min(deltaY / height, 1);
                 const opacity = 0.5 * (1 - progress);
                 overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
        };
        
        const touchEnd = (e) => {
            if (ignoreGesture) return;
            if (!isDragging) return;
            
            const deltaY = currentY - startY;
            
            const threshold = 150; // Pixels to close
            
            if (deltaY > threshold) {
                // Trigger Close
                content.style.transition = 'transform 0.2s ease-out';
                content.style.transform = 'translateY(100%)';
                overlay.dataset.closedByDrag = 'true';
                triggerBack();
            } else {
                // Snap back
                content.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1.0)';
                content.style.transform = '';
                overlay.style.backgroundColor = ''; // Restore opacity
                
                // Cleanup transition after snap so future drags (touchstart) can set transition: none
                setTimeout(() => {
                   if (!isDragging && content) content.style.transition = '';
                }, 250);
            }
            isDragging = false;
        };
        
        // Apply listeners to the content wrapper (header + body)
        // We might want to be careful not to block scroll on body if we are not at top.
        // Actually best to attach to content, but check scrollTop in Move.
        if (content) {
            content.addEventListener('touchstart', touchStart, { passive: false });
            content.addEventListener('touchmove', touchMove, { passive: false });
            content.addEventListener('touchend', touchEnd);
        }

        // Auto-Scroll to Bottom (User Request)
        // Ensure the body (scrollable area) is scrolled to show tickets/total/submit
        // "scrolling can be bit slower" -> Custom JS animation required as 'smooth' is browser-fixed.
        setTimeout(() => {
             if (body) {
                 OrderPreview._animateScrollToBottom(body, 700); // 700ms duration (User Request)
             }
        }, 150); 
        
        // Disable Body Scroll
        document.body.style.overflow = 'hidden';
        
        RouterService.pushOverlayState('order-preview');

        // Handle Back Button (PopState)
        // We need a way to detect THIS specific popstate. 
        // RouterService.onPopState is generic. 
        // Let's add a temporary listener for this view.
        const popHandler = () => {
             closePreview();
             window.removeEventListener('popstate', popHandler);
        };
        window.addEventListener('popstate', popHandler, { once: true });
    }

    static _animateScrollToBottom(element, duration) {
        const start = element.scrollTop;
        const to = element.scrollHeight - element.clientHeight;
        
        // If already at bottom, do nothing
        if (start >= to) return;

        const change = to - start;
        const startDate = +new Date();
        
        // Quadratic easing in/out
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        
        const animateScroll = () => {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                element.scrollTop = to; // Ensure finish
            }
        };
        animateScroll();
    }

    static _prepareData(form, formModel, priceData, precalculatedPayload) {
        // Use passed payload (from Session) or generalized helper (Scraper)
        const payload = precalculatedPayload || FormDataReader.getPayload(form, formModel);
        
        // We use passed pricing data to display logic properly
        const totalPriceData = priceData;

        const personalInfo = [];

        // 1. Process Payload Fields (for Personal Info)
        // Payload fields are [{ id: val }, { id: val }]
        payload.fields.forEach(fObj => {
            Object.keys(fObj).forEach(key => {
                 if (key === 'currency_code') return;
                 const val = fObj[key];
                 // Find field definition
                 const field = formModel.relatedFields.find(f => String(f.id) === key);
                 if (field && field.type !== 'ticket') {
                     // Resolve Label
                      let finalVal = val;
                      if (field.options) {
                          const foundOpt = field.options.find(o => o.id != null && String(o.id) === String(val));
                          if (foundOpt) finalVal = foundOpt.title;
                      }
                      // Handle " | " for multi-selects? The reader returns joined string.
                      // If so, we might want to split and resolve each?
                      // For now, assuming simple resolution or raw string.

                      personalInfo.push({ label: field.title, value: finalVal });
                 }
            });
        });


        // 2. Process Payload Tickets
        // We need to reconstruct the "ticket rows" structure expected by _render
        const tickets = [];
        const payloadTickets = payload.ticket || [];
        
        // Helper to resolve subfield label/value
        const allSubFields = [];
        formModel.visibleFields.forEach(f => {
            if (f.type === 'ticket') {
                const subs = f.subFields || f.fields || (f.data && f.data.fields) || [];
                allSubFields.push(...subs);
            }
        });

        payloadTickets.forEach((ticketData, index) => {
             const tData = { index: index + 1, rows: [], hasSpot: false };
             
             if (ticketData.spot !== undefined) {
                 tData.hasSpot = true;
                 
                 // Resolve Spot Label
                 let spotLabel = ticketData.spotName || `Spot #${ticketData.spot}`;
                 if (ticketData.spotPrice) {
                     spotLabel += ` (${ticketData.spotPrice} ${totalPriceData.currency})`;
                 }
                 
                 tData.rows.push({ label: OrdersStrings.gridSpot || "Spot", value: spotLabel, isSpot: true });
             }
             
             if (ticketData.fields) {
                 ticketData.fields.forEach(fObj => {
                     Object.keys(fObj).forEach(key => {
                         if (key === 'currency_code') return;
                         const val = fObj[key];
                          
                          let subDef = null;
                          if (fObj['_subFieldId']) {
                              subDef = allSubFields.find(s => String(s.id) === String(fObj['_subFieldId']));
                          } else {
                              subDef = allSubFields.find(s => s.type === key);
                          }
                          
                          // Prevent duplicates: Only process the key that matches the definition type
                          // processing 'product_type' key when real type is 'custom' causes double entry
                          // processing '_subFieldId' key causes garbage entry
                          if (subDef && key !== subDef.type) return;

                          if (subDef) {
                              // Resolve Value (Product Title etc)
                             let valLabel = val;
                             // Prioritize processed options from FormModel which includes Product Type mapping
                             let options = subDef.options;
                             
                             // Fallback to raw data if options empty (e.g. if FormModel construct failed to map?)
                             if (!options || options.length === 0) {
                                 options = subDef.data && subDef.data.options;
                                 if (subDef.type === 'product_type' && subDef.data && subDef.data.product_type_data) {
                                     options = subDef.data.product_type_data.products;
                                 }
                             }

                             if (options) {
                                 // Helper to find title
                                 const findTitle = (v) => {
                                     const found = options.find(o => o.id != null && String(o.id) === String(v));
                                     if (found) {
                                         let title = found.title;
                                         if (found.price) {
                                             title += ` (${found.price} ${totalPriceData.currency})`;
                                         }
                                         return title;
                                     }
                                     return v;
                                 };

                                 const valStr = String(val);
                                 if (valStr.includes(' | ')) {
                                     const parts = valStr.split(' | ');
                                     valLabel = parts.map(part => findTitle(part)).join(', ');
                                 } else {
                                     valLabel = findTitle(val);
                                 }
                             }
                             
                             tData.rows.push({ label: subDef.title, value: valLabel });
                         }
                     });
                 });
             }
             tickets.push(tData);
        });


        return {
            personalInfo,
            tickets,
            totalPrice: totalPriceData.totalPrice,
            currency: totalPriceData.currency,
            hasTickets: FeatureService.isFeatureEnabled(FeatureService.FeatureConstants.ticket, formModel.occasionFeatures),
            tone: formModel.communicationTone
        };
    }

    static _getAutoTitle(type) {
        // ... existing ...
        return ""; 
    }

    static _render(data) {
        // Determine labels
        const itemLabel = data.hasTickets ? (OrdersStrings.ticket || "Ticket") : (OrdersStrings.application || "Application");

        // Header
        let html = `
            <div class="order-preview-content">
                <div class="order-preview-handle-bar">
                    <div class="order-preview-handle"></div>
                </div>
                <div class="order-preview-header">
                    <h2>${PublicOrderStrings.summary}</h2>
                    <button class="btn-close-preview"><i class="material-icons">close</i></button>
                </div>
                <div class="order-preview-body">
        `;

        // Personal Info
        if (data.personalInfo.length > 0) {
            html += `<div class="preview-section">`;
            data.personalInfo.forEach((item, index) => {
                html += `
                    <div class="preview-info-row">
                        <span class="preview-label">${item.label}:</span>
                        <span class="preview-value">${item.value}</span>
                    </div>
                `;
                if (index < data.personalInfo.length - 1) {
                    html += `<div class="preview-divider"></div>`;
                }
            });
            html += `</div>`;
        }

        // Tickets
        if (data.tickets.length > 0) {
             data.tickets.forEach((ticket) => {
                  html += `
                    <div class="ticket-card">
                        <div class="ticket-header-title">${itemLabel}${data.tickets.length > 1 ? ' ' + ticket.index : ''}</div>
                  `;
                  
                  // Spot/Fields
                  ticket.rows.forEach((row, rIndex) => {
                      html += `
                        <div class="preview-info-row">
                             <span class="preview-label">${row.label}:</span>
                             <span class="preview-value">${row.value}</span>
                        </div>
                      `;
                      if (rIndex < ticket.rows.length - 1) {
                           html += `<div class="preview-divider"></div>`;
                      }
                  });

                  html += `</div>`; // Close card
             });
        }

        // Total
        const totalPriceString = PublicOrderStrings.totalPrice(`${data.totalPrice} ${data.currency}`);
        html += `
             <div class="preview-total-price">
                 ${totalPriceString}
             </div>
        `;

        html += `</div>`; // Close Body

        // Actions
        // Determine Tone and Ticket Status from FormModel? passing it??
        // We passed formModel to show, but _render takes 'data'.
        // We need tone. Let's hijack data to include tone.
        const tone = data.tone; 
        const hasTickets = data.hasTickets;
        
        const submitLabel = PublicOrderStrings.getSubmitButton(hasTickets, tone);

        html += `
             <div class="preview-actions">
                 <button class="btn-submit-order">
                     ${submitLabel}
                 </button>
             </div>
        `;

        html += `</div>`; // Close Content
        return html;
    }
}
