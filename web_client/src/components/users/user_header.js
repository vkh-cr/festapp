import { RouterService } from '../../services/router_service.js';
import { CommonStrings } from '../shared/common_strings.js';
import './user_header.css';
import { RightsService } from '../../services/rights_service.js';
import { SupabaseService } from '../../services/supabase_service.js';

export class UserHeader extends HTMLElement {
    constructor() {
        super();
        this.user = null;
        this.context = null;
        this._handleContextChange = this._handleContextChange.bind(this);
    }

    connectedCallback() {
        // Initial render (empty or skeleton?)
        this.innerHTML = ''; 
        
        // Listen to context changes
        RightsService.addListener(this._handleContextChange);

        // Scroll Behavior
        this.lastScrollY = window.scrollY;
        // Bind the RAF handler once
        this._onScroll = this._onScroll.bind(this);
        this.ticking = false;
        
        window.addEventListener('scroll', this._onScroll, { passive: true });
        
        // Trigger initial data fetch
        RightsService.updateAppData().then(() => {
             // Listener handles update
        }); 
    }

    disconnectedCallback() {
        RightsService.removeListener(this._handleContextChange);
        window.removeEventListener('scroll', this._onScroll);
    }

    _handleContextChange(context) {
        this.context = context;
        this.user = RightsService.currentUser;
        this.render();
    }

    _onScroll() {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this._updateScrollState();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    _updateScrollState() {
        const currentScrollY = window.scrollY;
        
        // Threshold
        if (currentScrollY < 10) {
            if (this.classList.contains('header-hidden')) {
                this.classList.remove('header-hidden');
            }
            this.lastScrollY = currentScrollY;
            return;
        }

        // Scroll Down -> Hide
        if (currentScrollY > this.lastScrollY) {
             if (!this.classList.contains('header-hidden')) {
                 this.classList.add('header-hidden');
                 // Also close popover if open when scrolling down (hiding)
                 const popover = this.querySelector('#user-popover');
                 if (popover) popover.remove();
             }
        } 
        // Scroll Up -> Show
        else {
             if (this.classList.contains('header-hidden')) {
                 this.classList.remove('header-hidden');
             }
        }
        
        this.lastScrollY = currentScrollY;
    }



    render() {
        this.innerHTML = '';

        const container = document.createElement('div');
        container.className = 'user-header-container';

        // Logo
        const logo = document.createElement('img');
        logo.src = 'assets/icons/fstapplogo.svg'; 
        logo.alt = 'Logo';
        logo.className = 'header-logo';
        // Force height via inline style to beat any CSS loading issues or specificity wars
        logo.style.height = '56px';
        logo.style.cursor = 'pointer';
        logo.onclick = () => {
             // Force redirect to root
             RouterService.navigateExternal("/");
        };
        container.appendChild(logo);

        // ... existing actions ...


        const actions = document.createElement('div');
        actions.className = 'header-actions';
        
        // If context isn't loaded yet, don't show anything here to avoid blinking "Sign In"
        // RightsService.context is null initially.
        if (!this.context && !this.user) {
             // Maybe show a small spinner or just nothing?
             // User requested "don't show sign in button until correct request is done".
             // So rendering nothing in actions is correct.
        } else if (this.user && this.user.id) {
             // ... Authenticated Logic ...
             const userInfo = RightsService.getUserDisplayInfo(this.user);

             // 1. Admin Button (if applicable)
             const canSeeAdmin = RightsService.canSeeAdmin();
             const canSeeReservations = RightsService.canSeeReservations();
             console.log(`UserHeader: canSeeAdmin=${canSeeAdmin}, canSeeReservations=${canSeeReservations}`);
             
             if (canSeeAdmin || canSeeReservations) {
                 const adminBtn = document.createElement('button');
                 adminBtn.className = 'btn-admin';
                 adminBtn.textContent = CommonStrings.admin;
                 adminBtn.onclick = () => RouterService.navigateToHandover(); // Implicit handover to Flutter logic
                 actions.appendChild(adminBtn);
             }

             // 2. User Info (Avatar)
             const userContainer = document.createElement('div');
             userContainer.className = 'user-info-container';
             
             const avatar = document.createElement('div');
             avatar.className = 'avatar-circle';
             
             avatar.textContent = userInfo.initial;
             
             userContainer.appendChild(avatar);
             
             // Popover interaction
             userContainer.onclick = (e) => {
                 e.stopPropagation();
                 this.togglePopover(userContainer);
             };

             actions.appendChild(userContainer);
             
        } else {
            // Guest -> Sign In Button
            // Only show if we confirm we are NOT logged in (context exists but user is null)
            const signInBtn = document.createElement('button');
            signInBtn.className = 'btn-sign-in';
            // Use innerHTML to include icon and text span for responsive hiding
            signInBtn.innerHTML = `<i class="material-icons">person</i><span class="sign-in-text">${CommonStrings.signIn}</span>`;
            signInBtn.onclick = (e) => {
                e.preventDefault();
                RouterService.navigateToLogin();
            };
            actions.appendChild(signInBtn);

            // Settings Icon (for guests)
            const settingsBtn = document.createElement('i');
            settingsBtn.className = 'material-icons settings-icon-btn';
            settingsBtn.textContent = 'settings';
            settingsBtn.onclick = (e) => {
                e.stopPropagation();
                this.togglePopover(settingsBtn);
            };
            actions.appendChild(settingsBtn);
        }

        container.appendChild(actions);
        this.appendChild(container); // Append once
    }
    
    togglePopover(target) {
        let popover = document.getElementById('user-popover');
        
        // If it exists and is open, close it (toggle behavior)
        if (popover) {
            popover.remove();
            return;
        }

        popover = document.createElement('div');
        popover.id = 'user-popover';
        popover.className = 'user-popover';

        // --- Close Button ---
        const closeBtn = document.createElement('i');
        closeBtn.className = 'material-icons popover-close-btn';
        closeBtn.textContent = 'close';
        closeBtn.onclick = () => popover.remove();
        popover.appendChild(closeBtn);

        // --- User Header Section (Avatar + Info) ---
        if (this.user && this.user.id) {
            const userInfo = RightsService.getUserDisplayInfo(this.user);

            const headerSection = document.createElement('div');
            headerSection.className = 'popover-header-section';

            // Large Avatar
            const avatar = document.createElement('div');
            avatar.className = 'popover-avatar-large';
            avatar.textContent = userInfo.initial;
            headerSection.appendChild(avatar);

            // Name
            if (userInfo.name) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'popover-user-name';
                nameDiv.textContent = userInfo.name;
                headerSection.appendChild(nameDiv);
            }

            // Email
            const emailDiv = document.createElement('div');
            emailDiv.className = 'popover-user-email';
            emailDiv.textContent = userInfo.email;
            headerSection.appendChild(emailDiv);

            popover.appendChild(headerSection);
            
            // Divider
            const hr = document.createElement('div');
            hr.className = 'popover-divider';
            popover.appendChild(hr);
        }

        // --- Settings Section ---
        const settingsContainer = document.createElement('div');
        settingsContainer.className = 'popover-settings-container';
        popover.appendChild(settingsContainer);
        
        import('../forms/widgets/settings_widget.js').then(({ SettingsWidget }) => {
            new SettingsWidget(settingsContainer);
        });

        // --- Logout Section ---
        if (this.user && this.user.id) {
            // Divider
            const hr = document.createElement('div');
            hr.className = 'popover-divider';
            popover.appendChild(hr);
            
            const logoutRow = document.createElement('div');
            logoutRow.className = 'popover-logout-row';
            logoutRow.onclick = async () => {
                 const { SupabaseService } = await import('../../services/supabase_service.js');
                 await SupabaseService.signOut();
                 popover.remove();
             };

            const logoutIcon = document.createElement('i');
            logoutIcon.className = 'material-icons logout-icon';
            logoutIcon.textContent = 'logout'; // or 'exit_to_app'
            // The image shows an arrow pointing right out of a bracket, 'logout' usually fits or 'exit_to_app'
            // Let's use 'logout' for now, it's standard material.
            
            const logoutText = document.createElement('span');
            logoutText.textContent = CommonStrings.signOut;
            
            logoutRow.appendChild(logoutIcon);
            logoutRow.appendChild(logoutText);
            
            popover.appendChild(logoutRow);
        }
        
        // Position
        // Centered or attached? The image looks like a dialog. 
        // User requested "popup" in "same way". Flutter creates a dialog or modal bottom sheet usually.
        // Let's position it fixed top-right or centered if it's mobile.
        // For now, keep it anchored to header but styled as a larger card.
        // Position
        const rect = target.getBoundingClientRect();
        
        // If screen is small, center it
        if (window.innerWidth < 600) {
            popover.style.position = 'fixed';
            popover.style.top = '72px'; // Fixed distance from top (closer now)
            popover.style.left = '50%';
            popover.style.transform = 'translateX(-50%)'; // Only center horizontally
            popover.style.width = '90%';
            popover.style.maxWidth = '360px';
        } else {
             // Desktop: Anchor to the target
             // Refactored: Popover is now child of UserHeader (relative parent).
             // However, to position it exactly under the icon (which might be anywhere if window resizes),
             // calculating relative to the header container's right edge is safer if we want right alignment.
             // But user says "next to setting".
             
             // Let's position it absolute relative to the header component (which is sticky top:0).
             // We want it right-aligned with the target (icon or avatar).
             
             // Get header rect (this component)
             const headerRect = this.getBoundingClientRect();
             // Get target rect
             const targetRect = target.getBoundingClientRect();
             
             // Calculate distance from right edge of header to right edge of target
             const rightOffset = headerRect.right - targetRect.right;
             
             // Apply
             popover.style.position = 'absolute';
             popover.style.top = 'calc(100% + 2px)';  // Raised up from 8px to 2px gap 
             // Determine if we align center or right.
             // If we align right edge of popover to right edge of target:
             // popover.style.right = Math.max(0, rightOffset) + 'px';
             
             // But the popover is wider (340px). If we align right-to-right, it extends left.
             // This is usually what we want for right-side menus.
             // Let's add a small buffer if needed, or just use exact align.
             popover.style.right = Math.max(16, rightOffset) + 'px'; // Ensure at least 16px from edge if something is weird
        }

        this.appendChild(popover); // NEW: Append to self

        // Close on click outside
        const closeHandler = (e) => {
             // Delay check to avoid immediate trigger
             // Check if click is outside popover AND outside the component (this)
             // or just target?
             if (!popover.contains(e.target) && !target.contains(e.target)) {
                 popover.remove();
                 document.removeEventListener('click', closeHandler);
             }
        };
        // Small delay to prevent the click that opened it from closing it immediately
        setTimeout(() => document.addEventListener('click', closeHandler), 10);
    }
}

customElements.define('user-header', UserHeader);
