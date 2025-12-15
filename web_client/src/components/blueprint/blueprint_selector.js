
import { FormStrings } from '../forms/form_strings.js';
import { CommonStrings } from '../shared/common_strings.js';
import { DbForms } from '../forms/db_forms.js';
import { BlueprintRenderer } from './blueprint_renderer.js';
import { SeatStates } from './blueprint_config.js';

// Dynamically load CSS for non-bundler environments
const cssUrl = new URL('./blueprint.css', import.meta.url).href;
if (!document.querySelector(`link[href="${cssUrl}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);
}

export class BlueprintSelector {
    constructor() {
        this.renderer = null;
    }

    async open(formModel, field, initialSeats, updateCallback) {
        // --- Container Setup (Full Screen) ---
        const container = document.createElement('div');
        container.className = 'blueprint-modal-container';
        
        document.body.appendChild(container);

        // --- Layout Mode ---
        document.body.classList.add('blueprint-active'); 
        
        // Removed manual hack for #form-page-container and #floating-price-widget
        // Handled by CSS: body.blueprint-active ...

        // --- Back/Continue Button ---
        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'btn btn-primary btn-submit blueprint-btn-confirm'; 
        confirmBtn.textContent = FormStrings.buttonContinue; 
        
        // --- Content Area ---
        const content = document.createElement('div');
        content.className = 'blueprint-content';
        
        container.appendChild(content);
        container.appendChild(confirmBtn);

        // --- API & State ---
        let blueprintData = null;
        this.selectedSeats = initialSeats ? [...initialSeats] : []; // Local state
        
        // --- History / Navigation ---
        // Push a new state so the back button closes the modal instead of navigating away
        const stateId = 'seat-selection';
        window.history.pushState({ overlay: stateId }, '', '#seat-selection');

        const popHandler = (event) => {
            // If we are popping state (back button), we clean up
            // Check if we are back to expected state or just general back
            cleanup();
        };

        const cleanup = () => {
             // 1. Collect selected seats before destroying if this was a valid exit?
             // Actually, popstate means CANCEL usually, or just "Close".
             // But in mobile app behavior, back button might mean "Done" if selection is immediate.
             // Here we treat explicit "Continue" as confirm, and Back as "Cancel/Confirm" depending on logic.
             // Flutter app: Back button confirms if not cancelled explicitly.
             // Let's invoke callback with current selection on cleanup?
             // Logic: If user clicks Back, they might expect their selection to be saved.
             // Replicating Flutter: _hideSeatReservation completes with selectedSeats.
             
             if (updateCallback) updateCallback(this.selectedSeats);

             if (this.renderer) this.renderer.destroy();
             
             document.body.classList.remove('blueprint-active');
             container.remove();
             window.removeEventListener('popstate', popHandler);
        };

        // When clicking continue/back explicitly
        confirmBtn.onclick = () => {
             // Invokes cleanup via history back, which triggers popHandler
             window.history.back(); 
        };
        
        window.addEventListener('popstate', popHandler);
        
        // --- Load Data ---
        try {
            content.innerHTML = `<div class="blueprint-loading"><div class="sp-loader"></div></div>`;

            let blueprintId = null;
            if (field && field.data && field.data.blueprintId) {
                blueprintId = field.data.blueprintId;
            } else if (formModel.blueprint) {
                blueprintId = (typeof formModel.blueprint === 'object') ? formModel.blueprint.id : formModel.blueprint;
            }

            if (!blueprintId) throw new Error("Blueprint ID missing");

            blueprintData = await DbForms.getBlueprint(
                formModel.secret,
                formModel.key,
                blueprintId
            );

            // --- Pre-Process Data with Initial Selection ---
            // --- Pre-Process Data with Initial Selection ---
            this.reservationSecret = formModel.secret; // Use form secret (User Session ID)

            if (this.selectedSeats.length > 0) {
                this.selectedSeats.forEach(initialSeat => {
                    // Update Spots (Data Source for Renderer Merge)
                    if (blueprintData.spots) {
                        const spot = blueprintData.spots.find(s => String(s.id) === String(initialSeat.id));
                        if (spot) {
                            spot.state = SeatStates.SELECTED_BY_ME;
                        }
                    }
                    
                    // Update Objects (Direct Renderer Targets)
                    if (blueprintData.objects) {
                        const match = blueprintData.objects.find(obj => String(obj.id) === String(initialSeat.id));
                        if (match) {
                            match.state = SeatStates.SELECTED_BY_ME;
                        }
                    }
                });
            }

            // --- Render ---
            this.renderer = new BlueprintRenderer(content);
            this.renderer.render(blueprintData, (obj) => this.handleSeatClick(obj, formModel.key, this.reservationSecret, updateCallback));
            
        } catch (e) {
            console.error(e);
            content.innerHTML = `<div class="blueprint-error">Error: ${e.message}</div>`;
        }
    }

    async handleSeatClick(obj, formKey, secret, updateCallback) {
        // Optimistic UI Update
        console.log("Seat clicked", obj);
        if (!obj || obj.state === SeatStates.TAKEN || obj.state === SeatStates.ORDERED || obj.state === SeatStates.USED || obj.state === SeatStates.BLACK) return;

        const isSelecting = (obj.state !== SeatStates.SELECTED_BY_ME);
        const oldState = obj.state;
        const newState = isSelecting ? SeatStates.SELECTED_BY_ME : SeatStates.AVAILABLE; 
        
        // Update Local State (Optimistic)
        obj.state = newState;
        
        if (isSelecting) {
            this.selectedSeats.push(obj);
        } else {
            this.selectedSeats = this.selectedSeats.filter(s => s.id !== obj.id);
        }

        this.renderer.updateSeat(obj); 
        
        // Trigger Callback immediately for UI responsiveness? 
        // Or wait for API? 
        // User wants "now the API part... select and deselect".
        // Usually safer to wait or revert on error.
        // Let's optimistic update UI, then call API.
        
        if (updateCallback) {
            updateCallback(this.selectedSeats, this.reservationSecret);
        }
        
        // API Call
        try {
            await DbForms.selectSpot(formKey, secret, obj.id, isSelecting);
        } catch (e) {
            console.error("Spot selection failed", e);
            // Revert State
            obj.state = oldState;
            if (isSelecting) {
                this.selectedSeats = this.selectedSeats.filter(s => s.id !== obj.id);
            } else {
                 this.selectedSeats.push(obj);
            }
            this.renderer.updateSeat(obj);
            if (updateCallback) updateCallback(this.selectedSeats, this.reservationSecret);
            
            // Show toast or alert?
            alert(`Selection failed: ${e.message}`);
        }
    }
}
