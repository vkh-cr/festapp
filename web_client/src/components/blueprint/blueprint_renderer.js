

import { formatPrice } from '../../utils/formatters.js';
import { CommonStrings } from '../shared/common_strings.js';
import { SeatWidgetHelper } from './seat_widget_helper.js';
import { SeatStyler } from './seat_styler.js';
import { BlueprintConfig, SeatStates } from './blueprint_config.js';
import { SvgUtils } from './svg_utils.js';
import { TooltipProvider } from './tooltip_provider.js';
import { BlueprintDataPreparer } from './blueprint_data_preparer.js';
import { TransformController } from './transform_controller.js';

export class BlueprintRenderer {
    constructor(container) {
        this.container = container;
        this.state = {
            panning: false,
            start: { x: 0, y: 0 },
            scalingMode: 'min' // Default requested by user (n. 4)
        };
        this.controller = new TransformController();
        this.seatSize = BlueprintConfig.seatSize;
        this.data = null;
        this.onSeatClick = null;
    }

    setScalingMode(mode) {
        this.state.scalingMode = mode;
        // Re-process not needed if data already prepared, but simple enough to re-render
        // Clear and re-render
        this.container.innerHTML = '';
        
        // Re-init container
        this.container.className = 'blueprint-renderer-container';

        this.transformContainer = document.createElement('div');
        this.transformContainer.className = 'blueprint-transform-container';
        this.container.appendChild(this.transformContainer);
        
        // Apply sizing
        if (this.contentWidth) {
             this.transformContainer.style.width = this.contentWidth + 'px';
             this.transformContainer.style.height = this.contentHeight + 'px';
        }

        this.renderBackground();
        this.renderSeats();
        this.fitToScreen();
        this.attachEvents();
    }

    render(data, onSeatClick) {
        // Process Data via Preparer
        const prepared = BlueprintDataPreparer.prepare(data);
        this.data = prepared;
        // Map meta to instance properties for compatibility
        if (prepared.meta) {
            Object.assign(this, prepared.meta);
        }

        this.onSeatClick = onSeatClick;
        this.container.innerHTML = '';
        this.container.className = 'blueprint-renderer-container';

        // Transform Container
        this.transformContainer = document.createElement('div');
        this.transformContainer.className = 'blueprint-transform-container';
        // Width/Height set from this.contentWidth (mapped from meta)
        if (this.contentWidth) {
             this.transformContainer.style.width = this.contentWidth + 'px';
             this.transformContainer.style.height = this.contentHeight + 'px';
        } 
        
        this.container.appendChild(this.transformContainer);

        // Build Tooltip
        this.createTooltip();

        // Render Background
        this.renderBackground();

        // Render Seats
        this.renderSeats();

        // Fit to Screen
        this.fitToScreen();

        // Attach Events
        this.attachEvents();
    }



    renderBackground() {
        const bgSource = this.data.background_svg;
        if (!bgSource) return;

        const bgContainer = document.createElement('div');
        bgContainer.className = 'blueprint-bg-container';
        
        const { svg: processedSvg, isSvg } = SvgUtils.prepareBackgroundSvg(bgSource);

        if (isSvg) {
             bgContainer.innerHTML = processedSvg;
        } else if (bgSource.startsWith('http')) {
            const img = document.createElement('img');
            img.src = bgSource;
            img.className = 'blueprint-bg-img';
            bgContainer.appendChild(img);
        }

        this.transformContainer.appendChild(bgContainer);
    }


    
    applySeatStyle(element, obj) {
        SeatStyler.applyStyle(element, obj, this.seatSize);
    }

    updateSeat(obj) {
        if (obj.element) {
            this.applySeatStyle(obj.element, obj);
        }
    }

    /**
     * Efficiently updates the visuals of seats without clearing the DOM.
     * Expects `this.data` to be already up-to-date or passed in.
     */
    updateSeatsDOM() {
        if (!this.data || !this.data.objects) return;
        
        // Optimize: assuming the DOM elements are already linked via obj.element
        // or we recall them by dataset.seatId if refs were lost (though they are simple JS objects in memory)
        this.data.objects.forEach(obj => {
             // If obj.element is missing, try to find it
             if (!obj.element) {
                 const container = this.transformContainer.querySelector(`.blueprint-seat-container[data-seat-id="${obj.id}"]`);
                 if (container) {
                     obj.element = container.querySelector('.blueprint-seat-visual-inner');
                 }
             }

             if (obj.element) {
                 this.applySeatStyle(obj.element, obj);
             }
        });
    }

    updateControllerDims() {
        if (!this.container) return;
        this.controller.updateDimensions(
            this.container.clientWidth,
            this.container.clientHeight,
            this.contentWidth,
            this.contentHeight
        );
    }

    fitToScreen() {
        if (!this.contentWidth || !this.contentHeight) return;
        if (this.container.clientWidth === 0 || this.container.clientHeight === 0) return;

        this.updateControllerDims();
        this.controller.fitToScreen();
        this.updateTransform();
    }

    attachEvents() {
        // Panning (Mouse)
        this.container.onmousedown = (e) => {
            this.updateControllerDims();
            
            const fitScale = this.controller.getFitScale();
            // 1. dont allow panning unles user zooms in first
            if (this.controller.state.scale <= fitScale * 1.01) return;

            if (this._animationFrame) {
                cancelAnimationFrame(this._animationFrame);
                this._animationFrame = null;
            }
            e.preventDefault();
            this.state.panning = true;
            this.state.startX = e.clientX - this.controller.state.x;
            this.state.startY = e.clientY - this.controller.state.y;
            this.container.style.cursor = 'grabbing';
        };

        // Fix: Use arrow functions or bind to preserve 'this' context
        this._boundOnMouseMove = this.onMouseMove.bind(this);
        this._boundOnMouseUp = this.onMouseUp.bind(this);
        this._boundOnTouchStart = this.onTouchStart.bind(this);
        this._boundOnTouchMove = this.onTouchMove.bind(this);
        this._boundOnTouchEnd = this.onTouchEnd.bind(this);

        window.addEventListener('mousemove', this._boundOnMouseMove);
        window.addEventListener('mouseup', this._boundOnMouseUp);
        
        // Touch events need to be on the CONTAINER for start, but window for move/end
        // Use passive: false to allow preventing default (scrolling)
        this.container.addEventListener('touchstart', this._boundOnTouchStart, { passive: false });
        window.addEventListener('touchmove', this._boundOnTouchMove, { passive: false });
        window.addEventListener('touchend', this._boundOnTouchEnd);

        // Zooming (Wheel)
        this.container.onwheel = (e) => {
             e.preventDefault();
             this.updateControllerDims();

             if (this._animationFrame) {
                 cancelAnimationFrame(this._animationFrame);
                 this._animationFrame = null;
             }

             // and when scrolling make zooming faster
             const factor = -e.deltaY > 0 ? 1.25 : 0.8;
             
             this.controller.zoom(factor, e.clientX, e.clientY, this.container.getBoundingClientRect());
             
             this.updateTransform();
             
             if (this._wheelTimeout) clearTimeout(this._wheelTimeout);
             this._wheelTimeout = setTimeout(() => this.snapBack(), 150);
        };
    }

    onTouchStart(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            this.state.pinching = true;
            this.state.pinchStartDist = this.getPinchDist(e);
            return;
        }

        if (e.touches.length === 1) {
            this.updateControllerDims();

            const fitScale = this.controller.getFitScale();
            // 1. dont allow panning unles user zooms in first
            if (this.controller.state.scale <= fitScale * 1.01) return;

            if (this._animationFrame) {
                cancelAnimationFrame(this._animationFrame);
                this._animationFrame = null;
            }
            e.preventDefault();
            this.state.panning = true;
            this.state.touchStartX = e.touches[0].clientX;
            this.state.touchStartY = e.touches[0].clientY;
            this.state.startX = e.touches[0].clientX - this.controller.state.x;
            this.state.startY = e.touches[0].clientY - this.controller.state.y;
        }
    }
    
    // Bound functions for removal
    onMouseMove(e) {
        if (!this.state.panning) return;
        e.preventDefault();
        this.handlePan(e.clientX, e.clientY);
    }

    onMouseUp() {
        this.state.panning = false;
        this.container.style.cursor = 'default';
        this.snapBack();
    }

    onTouchMove(e) {
        if (this.state.pinching && e.touches.length === 2) {
            e.preventDefault();
            const newDist = this.getPinchDist(e);
            const scaleFactor = newDist / this.state.pinchStartDist;
            
            // Midpoint
            const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            
            this.controller.zoom(scaleFactor, midX, midY, this.container.getBoundingClientRect());
            this.updateTransform();
            
            // Update for next frame (relative)
            this.state.pinchStartDist = newDist; 
            return;
        }

        if (!this.state.panning || e.touches.length !== 1) return;
        e.preventDefault();
        this.handlePan(e.touches[0].clientX, e.touches[0].clientY);
    }
    


    handlePan(clientX, clientY) {
        this.updateControllerDims();
        
        const targetX = clientX - this.state.startX;
        const targetY = clientY - this.state.startY;

        this.controller.pan(targetX, targetY);
        this.updateTransform();
    }

    onTouchEnd(e) {
        if (this.state.pinching && e.touches.length < 2) {
            this.state.pinching = false;
            this.snapBack();
            return;
        }
        
        this.state.panning = false;
        
        // Tap Detection
        if (e && e.changedTouches && e.changedTouches.length > 0 && this.state.touchStartX !== undefined) {
             const endX = e.changedTouches[0].clientX;
             const endY = e.changedTouches[0].clientY;
             const dist = Math.sqrt(Math.pow(endX - this.state.touchStartX, 2) + Math.pow(endY - this.state.touchStartY, 2));
             
             if (dist < BlueprintConfig.tapThreshold) {
                 // It's a tap!
                 const target = document.elementFromPoint(endX, endY);
                 if (target) {
                     const seatEl = target.closest('.blueprint-seat-container');
                     if (seatEl && seatEl.dataset.seatId) {
                         // Find Object
                         // Efficient lookup: We have this.spotsMap keyed by ID, 
                         // but we need the *object* which merges spot+other info.
                         // But actually renderSeats iterates `objects`.
                         // Let's rely on finding it in objects array or if spotsMap is enough.
                         // onSeatClick expects the `obj` from `this.data.objects`.
                         // Let's search.
                         const seatId = seatEl.dataset.seatId;
                         const obj = this.data.objects.find(o => String(o.id) === String(seatId));
                         if (obj && this.onSeatClick) {
                             this.onSeatClick(obj);
                         }
                     }
                 }
             }
        }
        
        this.snapBack();
    }

    updateTransform() {
        if (!this.transformContainer) return;
        const { x, y, scale } = this.controller.state;
        this.transformContainer.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    }

    snapBack() {
        this.updateControllerDims();
        const constrained = this.controller.getConstrainedState();
        
        // Check if we are far enough to warrant animation
        const { x, y, scale } = this.controller.state;
        if (Math.abs(constrained.x - x) > 0.5 || 
            Math.abs(constrained.y - y) > 0.5 ||
            Math.abs(constrained.scale - scale) > 0.001) {
            this.animateTo(constrained);
        }
    }

    animateTo(target) {
        const startX = this.controller.state.x;
        const startY = this.controller.state.y;
        const startScale = this.controller.state.scale;
        const startTime = performance.now();
        const duration = BlueprintConfig.snapAnimationDuration; // ms

        const step = (time) => {
            const progress = (time - startTime) / duration;
            if (progress < 1) {
                // Ease out cubic
                const ease = 1 - Math.pow(1 - progress, 3);
                // Update controller state manually or expose a setter?
                this.controller.state.x = startX + (target.x - startX) * ease;
                this.controller.state.y = startY + (target.y - startY) * ease;
                this.controller.state.scale = startScale + (target.scale - startScale) * ease;
                this.updateTransform();
                this._animationFrame = requestAnimationFrame(step);
            } else {
                this.controller.state.x = target.x;
                this.controller.state.y = target.y;
                this.controller.state.scale = target.scale;
                this.updateTransform();
                this._animationFrame = null;
            }
        };
        if (this._animationFrame) cancelAnimationFrame(this._animationFrame);
        this._animationFrame = requestAnimationFrame(step);
    }
    
    createTooltip() {
        if (this.tooltipElement) return;

        this.tooltipElement = document.createElement('div');
        this.tooltipElement.className = 'blueprint-tooltip';

        document.body.appendChild(this.tooltipElement);
    }

    destroy() {
        if (this._boundOnMouseMove) window.removeEventListener('mousemove', this._boundOnMouseMove);
        if (this._boundOnMouseUp) window.removeEventListener('mouseup', this._boundOnMouseUp);
        if (this.container && this._boundOnTouchStart) this.container.removeEventListener('touchstart', this._boundOnTouchStart);
        if (this._boundOnTouchMove) window.removeEventListener('touchmove', this._boundOnTouchMove);
        if (this._boundOnTouchEnd) window.removeEventListener('touchend', this._boundOnTouchEnd);
        if (this._wheelTimeout) clearTimeout(this._wheelTimeout);
        
        if (this.tooltipElement) {
            this.tooltipElement.remove();
            this.tooltipElement = null;
        }
    }



    processData() {
        // Now handled by BlueprintDataPreparer
        // Kept empty if anything calls it legacy-wise, but logic moved.
    }

    renderSeats() {
        const objects = this.data.objects || [];
        
        objects.forEach(obj => {
             // Only render items with x/y
             if (obj.x === undefined || obj.y === undefined) return;

             const el = document.createElement('div');
             el.className = 'blueprint-seat-container';
             el.dataset.seatId = obj.id;
             el.style.left = (obj.x * this.seatSize) + 'px';
             el.style.top = (obj.y * this.seatSize) + 'px';
             el.style.width = this.seatSize + 'px';
             el.style.height = this.seatSize + 'px';
             
             // Inner Seat Visuals
             const inner = document.createElement('div');
             inner.className = 'blueprint-seat-visual-inner'; 
             
             this.applySeatStyle(inner, obj);

             el.appendChild(inner);

             // Interaction
             el.onclick = (e) => {
                 e.stopPropagation(); 
                 if (this.onSeatClick) this.onSeatClick(obj);
             };

             // Tooltip Events
             el.onpointerenter = (e) => this.showTooltip(obj, e);
             el.onpointerleave = () => this.hideTooltip();
             el.onpointermove = (e) => this.updateTooltipPosition(e);

             this.transformContainer.appendChild(el);
             obj.element = inner; // Store ref to update later
        });
    }
    
    // ... (applySeatStyle, updateSeat, fitToScreen ...)

    getTooltipContent(obj) {
        const context = {
            productsMap: this.productsMap,
            ticketsMap: this.ticketsMap,
            ordersMap: this.ordersMap,
            optMap: this.optMap,
            data: this.data
        };
        return TooltipProvider.getContent(obj, context);
    }

    showTooltip(obj, e) {
        if (e && e.pointerType === 'touch') return;
        if (!this.tooltipElement) return;
        
        const content = this.getTooltipContent(obj);
        if (!content) return;
        
        this.tooltipElement.innerText = content;
        // Styles derived from class, no manual overrides besides display
        this.tooltipElement.style.display = 'block';
        this.updateTooltipPosition(e);
    }

    hideTooltip() {
        if (!this.tooltipElement) return;
        this.tooltipElement.style.display = 'none';
    }

    updateTooltipPosition(e) {
        if (e && e.pointerType === 'touch') return;
        if (!this.tooltipElement || this.tooltipElement.style.display === 'none') return;
        
        // Offset from mouse
        const offset = 15;
        this.tooltipElement.style.left = (e.clientX + offset) + 'px';
        this.tooltipElement.style.top = (e.clientY + offset) + 'px';
        
        // Boundary check (keep in viewport)
        const rect = this.tooltipElement.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            this.tooltipElement.style.left = (e.clientX - rect.width - offset) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            this.tooltipElement.style.top = (e.clientY - rect.height - offset) + 'px';
        }
    }

    getPinchDist(e) {
        return Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
    }
}
