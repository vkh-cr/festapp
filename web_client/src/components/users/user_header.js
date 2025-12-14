import { SupabaseService } from '../../services/supabase_service.js';
import { RouterService } from '../../services/router_service.js';
import { LocalizationService } from '../../services/localization_service.js';
import { ThemeService } from '../../services/theme_service.js';
import { CommonStrings } from '../shared/common_strings.js';
import { AppConfig } from '../../app_config.js';

export class UserHeader {
    static async init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Render base structure (Logo + Actions placeholder)
        
        container.innerHTML = `
            <div class="logo" id="header-logo">
                <img id="logo-img" src="assets/icons/fstapplogo.svg" alt="Festapp Logo">
            </div>
            <div class="user-actions" id="header-user-actions"></div>
            <div id="user-popover" class="popover-menu hidden"></div>
        `;

        UserHeader.updateLogo();

        document.getElementById('header-logo').onclick = () => window.location.reload();

        // Check Auth
        let user = SupabaseService.getLocalUser();
        // Validate in background
        const validUser = await SupabaseService.validateSession();
        if(!validUser && user) {
             user = null; // Session expired
        }

        UserHeader.renderUserActions(user);

        // Auto-hide header on scroll
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                container.classList.add('hidden-header');
            } else {
                container.classList.remove('hidden-header');
            }
            lastScrollY = currentScrollY;
        });
    }

    static updateLogo() {
        const logoImg = document.getElementById('logo-img');
        if (logoImg) {
            // Using the standard logo. If it needs to be white for dark header, 
            // we should handle that via CSS filter if the SVG itself is dark.
            logoImg.src = 'assets/icons/fstapplogo.svg';
        }
    }

    static renderUserActions(user) {
        const container = document.getElementById('header-user-actions');
        container.innerHTML = '';

        if (user) {
            // Avatar
            const initial = user.user_metadata?.name ? user.user_metadata.name[0].toUpperCase() : 'U';
            const avatar = document.createElement('div');
            avatar.className = 'avatar-circle';
            avatar.innerText = initial;
            avatar.onclick = (e) => {
                e.stopPropagation();
                UserHeader.togglePopover(user);
            };
            container.appendChild(avatar);
        } else {
            // Sign In
            const btn = document.createElement('a');
            btn.className = 'sign-in-btn';
            btn.innerHTML = `<i class="material-icons">person</i> ${CommonStrings.signIn}`;
            btn.onclick = () => RouterService.navigateToLogin();
            container.appendChild(btn);

            // Settings Icon (for non-logged in users to change language/theme)
            const settingsBtn = document.createElement('i');
            settingsBtn.className = 'material-icons settings-icon';
            settingsBtn.innerText = 'settings';
            settingsBtn.onclick = (e) => {
                 e.stopPropagation();
                 UserHeader.togglePopover(null);
            };
            container.appendChild(settingsBtn);
        }
    }

    static togglePopover(user) {
        const popover = document.getElementById('user-popover');
        if (!popover.classList.contains('hidden')) {
            popover.classList.add('hidden');
            return;
        }
        
        // Render Content
        let content = '';
        
        if (user) {
             content += `
                <div class="popover-header">
                    <div class="avatar-circle popover-avatar">${user.user_metadata?.name ? user.user_metadata.name[0].toUpperCase() : 'U'}</div>
                    <div class="popover-name">${user.user_metadata?.name || 'User'} ${user.user_metadata?.surname || ''}</div>
                    <div class="popover-email">${user.email}</div>
                </div>
             `;
        }

        // Settings Placeholder (will be filled by widget)
        content += `<div id="popover-settings-container" style="padding: 16px;"></div>`;

        if (user) {
            content += `
                <div class="popover-item" id="btn-signout" style="border-top: 1px solid var(--input-border, rgba(0,0,0,0.1));">
                    <i class="material-icons">logout</i>
                    <span>${CommonStrings.signOut}</span>
                </div>
            `;
        }

        popover.innerHTML = content;
        popover.classList.remove('hidden');

        // Instantiate Settings Widget
        const settingsContainer = document.getElementById('popover-settings-container');
        if (settingsContainer) {
            import('../forms/widgets/settings_widget.js').then(({ SettingsWidget }) => {
                new SettingsWidget(settingsContainer);
            });
        }
        
        // --- Bind Events (SignOut) ---

        if (user) {
            document.getElementById('btn-signout')?.addEventListener('click', async () => {
                 await SupabaseService.signOut();
            });
        }
        
        // Close on outside click
        const closeListener = (e) => {
             if (!e.target.closest('#user-popover') && !e.target.closest('.avatar-circle') && !e.target.closest('.settings-icon')) {
                 popover.classList.add('hidden');
                 document.removeEventListener('click', closeListener);
             }
        };
        setTimeout(() => document.addEventListener('click', closeListener), 0);
    }
}

