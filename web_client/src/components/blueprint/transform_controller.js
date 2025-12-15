
import { BlueprintConfig } from './blueprint_config.js';

export class TransformController {
    constructor() {
        this.state = { x: 0, y: 0, scale: 1 };
        this.dims = {
            viewportW: 0,
            viewportH: 0,
            contentW: 100,
            contentH: 100
        };
    }

    updateDimensions(viewportW, viewportH, contentW, contentH) {
        this.dims.viewportW = viewportW;
        this.dims.viewportH = viewportH;
        this.dims.contentW = contentW || 100;
        this.dims.contentH = contentH || 100;
    }

    setState(x, y, scale) {
        this.state = { x, y, scale };
    }

    getState() {
        return { ...this.state };
    }

    getFitScale() {
        const { viewportW, viewportH, contentW, contentH } = this.dims;
        if (!contentW || !contentH || !viewportW || !viewportH) return 1;
        // 5% margin (0.95) for "mini border"
        return Math.min(viewportW / contentW, viewportH / contentH) * 0.95;
    }

    fitToScreen() {
        if (!this.dims.contentW || !this.dims.contentH) return;

        const { viewportW, viewportH, contentW, contentH } = this.dims;
        const scale = this.getFitScale();

        // Center it
        const scaledWidth = contentW * scale;
        const scaledHeight = contentH * scale;

        const offsetX = (viewportW - scaledWidth) / 2;
        const offsetY = (viewportH - scaledHeight) / 2;

        this.state = { x: offsetX, y: offsetY, scale };
        return this.state;
    }

    pan(rawDeltaX, rawDeltaY) {
        const { viewportW, viewportH, contentW, contentH } = this.dims;
        const { scale } = this.state;
        
        const scaledW = contentW * scale;
        const scaledH = contentH * scale;

        const touching = this._getTouchingAxis();
        const fitScale = this.getFitScale();
        const fitW = contentW * fitScale;
        const fitH = contentH * fitScale;

        let gapX = 0;
        let gapY = 0;

        if (touching === 'x' || touching === 'both') {
            gapX = 0;
            gapY = (viewportH - fitH) / 2;
        } else {
            gapX = (viewportW - fitW) / 2;
            gapY = 0;
        }

        const OVERSCROLL_LIMIT = BlueprintConfig.overscrollLimit;

        // X Limits
        const minX = viewportW - scaledW - gapX;
        const maxX = gapX;
        const newX = this._getRubberBandedVal(rawDeltaX, minX, maxX, OVERSCROLL_LIMIT);

        // Y Limits
        const minY = viewportH - scaledH - gapY;
        const maxY = gapY;
        const newY = this._getRubberBandedVal(rawDeltaY, minY, maxY, OVERSCROLL_LIMIT);

        this.state.x = newX;
        this.state.y = newY;
        
        return this.state;
    }
    
    zoom(factor, centerClientX, centerClientY, containerRect) {
         // Calculate new scale
         let newScale = this.state.scale * factor;
         
         // Helper to get relative coords
         const xs = (centerClientX - containerRect.left - this.state.x) / this.state.scale;
         const ys = (centerClientY - containerRect.top - this.state.y) / this.state.scale;

         // Elastic Zoom Resistance (Zoom Out)
         const fitScale = this.getFitScale();
         if (this.state.scale < fitScale && factor < 1) {
             // Instead of manipulating factor effectively 0.98, we can just dampen the newScale
             // But let's stick to the logic provided:
             // "if (this.state.scale < fitScale && factor < 1) factor = 0.98;"
             // But wait, the original code modified 'factor'.
             // We can do the same check here.
             // If input factor was 0.8 (fast zoom out), and we are under limit, we clamp it to 0.98 (slow zoom out).
             // But the original code was: "factor = delta > 0 ? 1.25 : 0.8; ... if (...) factor = 0.98;"
             // So we should re-apply that logic or assume caller passes the raw factor and we adjust?
             // Let's assume caller passes raw factor (e.g. 0.8) and we adjust.
             newScale = this.state.scale * 0.98; 
         } else {
             newScale = this.state.scale * factor;
         }

         // Hard Max Limit
         if (newScale > BlueprintConfig.zoomMaxScale) newScale = BlueprintConfig.zoomMaxScale;
         
         // Min Limit: Restrict to fitScale
         const minAllowed = fitScale;
         if (newScale < minAllowed) newScale = minAllowed;

         // Calculate new position (Zoom-to-mouse)
         const newX = centerClientX - containerRect.left - xs * newScale;
         const newY = centerClientY - containerRect.top - ys * newScale;

         this.state = { x: newX, y: newY, scale: newScale };
         return this.state;
    }

    getConstrainedState() {
        const { viewportW, viewportH, contentW, contentH } = this.dims;
        
        const fitScale = this.getFitScale();
        let targetScale = this.state.scale;
        
        // Snap scale logic
        if (targetScale < fitScale) targetScale = fitScale;
        if (targetScale > BlueprintConfig.zoomMaxScale) targetScale = BlueprintConfig.zoomMaxScale;

        const scaledW = contentW * targetScale;
        const scaledH = contentH * targetScale;
        
        const touching = this._getTouchingAxis();
        const fitW = contentW * fitScale;
        const fitH = contentH * fitScale;

        let gapX = 0;
        let gapY = 0;

        if (touching === 'x' || touching === 'both') {
            gapX = 0; 
            gapY = (viewportH - fitH) / 2; 
        } else {
            gapX = (viewportW - fitW) / 2; 
            gapY = 0; 
        }

        let targetX = this.state.x;
        let targetY = this.state.y;

        // X Constraints
        const minX = viewportW - scaledW - gapX;
        const maxX = gapX;
        
        if (minX > maxX) {
             targetX = (viewportW - scaledW) / 2;
        } else {
             if (targetX < minX) targetX = minX;
             if (targetX > maxX) targetX = maxX;
        }

        // Y Constraints
        const minY = viewportH - scaledH - gapY;
        const maxY = gapY;
        
        if (minY > maxY) {
             targetY = (viewportH - scaledH) / 2;
        } else {
             if (targetY < minY) targetY = minY;
             if (targetY > maxY) targetY = maxY;
        }
        
        return { x: targetX, y: targetY, scale: targetScale };
    }
    
    shouldSnapBack() {
        const constrained = this.getConstrainedState();
        return (Math.abs(constrained.x - this.state.x) > 0.5 || 
                Math.abs(constrained.y - this.state.y) > 0.5 ||
                Math.abs(constrained.scale - this.state.scale) > 0.001);
    }

    // --- Private / Helpers ---

    _getTouchingAxis() {
        const { viewportW, viewportH, contentW, contentH } = this.dims;
        
        const scaleX = viewportW / contentW;
        const scaleY = viewportH / contentH;
        
        if (Math.abs(scaleX - scaleY) < 0.001) return 'both';
        return scaleX < scaleY ? 'x' : 'y';
    }

    _getRubberBandedVal(val, min, max, limit) {
        if (val >= min && val <= max) return val;
        if (val < min) {
            const diff = min - val;
            return min - limit * (1 - Math.exp(-diff / (limit * 1.5)));
        } else {
             const diff = val - max;
             return max + limit * (1 - Math.exp(-diff / (limit * 1.5)));
        }
    }
}
