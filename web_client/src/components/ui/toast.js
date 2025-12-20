export class Toast {
    constructor(message, type = 'info', duration = 3000) {
        this.message = message;
        this.type = type; // info, error, success
        this.duration = duration;
        this.element = null;
    }

    show() {
        this.element = document.createElement('div');
        this.element.className = `toast toast-${this.type}`;
        this.element.textContent = this.message;
        
        // Styles could be in CSS, but injecting basic styles here for portability
        Object.assign(this.element.style, {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: this._getBackgroundColor(),
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: '10000',
            opacity: '0',
            transition: 'opacity 0.3s ease-in-out',
            fontSize: '14px',
            fontWeight: '500'
        });

        document.body.appendChild(this.element);

        // Trigger reflow
        this.element.offsetHeight;

        this.element.style.opacity = '1';

        setTimeout(() => {
            this.hide();
        }, this.duration);
    }

    hide() {
        if (!this.element) return;
        
        this.element.style.opacity = '0';
        this.element.addEventListener('transitionend', () => {
            if (this.element) this.element.remove();
        });
    }

    _getBackgroundColor() {
        switch (this.type) {
            case 'error': return '#d32f2f';
            case 'success': return '#388e3c';
            case 'warning': return '#fbc02d';
            default: return '#323232';
        }
    }
}
