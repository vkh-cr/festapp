export class LayoutFixer {
    static fixNow(containerId) {
        const el = document.getElementById('preact-border-shadow-host');
        if (el) el.remove();
        
        const container = document.getElementById(containerId);
        if (container) {
            const rect = container.getBoundingClientRect();
            // If we are pushed down significantly (e.g. > 100px) and not scrolled
            if (rect.top > 100 && window.scrollY < 50) {
                    // Apply negative margin to pull it up
                    const currentMargin = parseInt(container.style.marginTop || '0');
                    const correction = rect.top - 20; // Target 20px from top
                    if (correction > 0) {
                        container.style.marginTop = `${currentMargin - correction}px`;
                    }
            }
        }
    }

    static init(containerId) {
        // Run immediately
        LayoutFixer.fixNow(containerId);

        // Continuous layout adjustment to fight persistent gaps caused by external tools (e.g. Preact Devtools)
        if (!window._layoutFixInterval) {
            window._layoutFixInterval = setInterval(() => {
                LayoutFixer.fixNow(containerId);
            }, 500); // Check every 500ms
        }
    }
}
