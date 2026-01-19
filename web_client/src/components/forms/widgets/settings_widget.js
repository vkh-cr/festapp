import { LocalizationService } from '../../../services/localization_service.js';
import { ThemeService } from '../../../services/theme_service.js';
import { AppConfig } from '../../../app_config.js';
import { CommonStrings } from '../../shared/common_strings.js';

export class SettingsWidget {
    constructor(container) {
        this.container = container;
        this.element = document.createElement('div');
        this.element.className = 'settings-widget';
        
        this.render();
        this.container.appendChild(this.element);
    }

    render() {
        this.element.innerHTML = '';
        this.element.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
        `;

        // Theme Section
        this.renderSection({
            title: LocalizationService.tr('Appearance') || 'Vzhled', // Fallback trans
            options: [
                { id: 'dark', label: CommonStrings.dark },
                { id: 'auto', label: CommonStrings.auto },
                { id: 'light', label: CommonStrings.light }
            ],
            currentValue: ThemeService.currentMode,
            onSelect: (val) => {
                ThemeService.setMode(val);
                this.render(); // Re-render to update active state
            }
        });

        // Language Section
        this.renderSection({
            title: CommonStrings.language,
            options: AppConfig.supportedLanguages.map(lang => ({
                id: lang,
                label: lang === 'cs' ? 'Čeština' : 'English'
            })),
            currentValue: LocalizationService.currentLocale,
            onSelect: (val) => {
                if (val !== LocalizationService.currentLocale) {
                     LocalizationService.setLocale(val);
                     // Reload is handled by service, but if not:
                     // window.location.reload(); 
                }
            }
        });

        // Version
        if (AppConfig.version) {
            const versionEl = document.createElement('div');
            versionEl.style.cssText = `
                font-size: 11px;
                color: inherit;
                opacity: 0.7; /* Increased from 0.5 for better visibility */
                text-align: center;
                margin-top: 8px;
            `;
            versionEl.textContent = `v${AppConfig.version}`;
            this.element.appendChild(versionEl);
        }
    }

    renderSection({ title, options, currentValue, onSelect }) {
        const section = document.createElement('div');
        section.style.cssText = `
            display: flex;
            flex-direction: column;
            width: 100%;
        `;

        const label = document.createElement('div');
        label.className = 'settings-label';
        label.textContent = title;
        label.style.cssText = `
            font-size: 14px;
            color: inherit;
            margin-bottom: 8px;
            font-weight: 500;
        `;
        section.appendChild(label);

        // Segmented Control Group
        const group = document.createElement('div');
        group.className = 'segmented-control';
        group.style.cssText = `
            display: flex;
            width: 100%;
            background-color: var(--unselected-widget-fill, rgba(0,0,0,0.05));
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--input-border, rgba(0,0,0,0.1));
        `;

        options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = opt.label;
            
            const isActive = opt.id === currentValue;
            
            btn.style.cssText = `
                border: none;
                padding: 8px 16px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s, color 0.2s;
                min-width: 70px;
                color: inherit;
                background-color: transparent;
                border-radius: 0;
                flex: 1;
            `;

            if (index > 0) {
                 btn.style.borderLeft = '1px solid var(--input-border, rgba(0,0,0,0.1))';
            }

            if (isActive) {
                // Active State
                // Use primary color or a distinct active state
                btn.style.backgroundColor = 'var(--primary-color, #4465A6)';
                btn.style.color = '#ffffff';
            } else {
                // Inactive State: Remove opacity for better contrast
                btn.style.opacity = '1';
                btn.style.color = 'inherit';
            }
            
            // Hover effect for non-active
            if (!isActive) {
                btn.onmouseenter = () => btn.style.backgroundColor = 'rgba(0,0,0,0.05)';
                btn.onmouseleave = () => btn.style.backgroundColor = 'transparent';
            }

            btn.onclick = () => onSelect(opt.id);
            
            group.appendChild(btn);
        });

        section.appendChild(group);
        this.element.appendChild(section);
    }
}
