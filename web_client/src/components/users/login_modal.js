
import { AuthService } from '../../services/auth_service.js';
import { CommonStrings } from '../shared/common_strings.js';
import { ToastHelper } from '../ui/toast.js';
import { Modal } from '../ui/modal.js';
import { AppConfig } from '../../app_config.js';
import './login_modal.css';

export class LoginModal extends HTMLElement {
    constructor() {
        super();
        this.currentView = 'login'; // login, register, forgot
        this.isLoading = false;
        
        // Bind methods
        this._render = this._render.bind(this);
        this._handleReset = this._handleReset.bind(this);
        this._handleChangePassword = this._handleChangePassword.bind(this);
        this._togglePasswordVisibility = this._togglePasswordVisibility.bind(this);
        this._handleLogin = this._handleLogin.bind(this);
        this._handleRegister = this._handleRegister.bind(this);
    }

    set resetToken(token) {
        this._resetToken = token;
        // If token is set, automatically switch to reset_password view
        if (token) {
            this._setView('reset_password');
        }
    }

    connectedCallback() {
        this._handleKeyDown = this._handleKeyDown.bind(this);
        window.addEventListener('keydown', this._handleKeyDown);
        this._render();
    }
    
    disconnectedCallback() {
        window.removeEventListener('keydown', this._handleKeyDown);
    }
    
    _handleKeyDown(e) {
        if (e.key === 'Escape') {
            // Respect the mandatory reset check inside modal.close()
            if (this.modal) this.modal.close();
        }
    }

    _render() {
        this.innerHTML = '';
        
        this.modal = document.createElement('app-modal');
        // Create container programmatically to ensure we have a reference and it's attached correctly
        this.authContainer = document.createElement('div');
        this.authContainer.className = 'auth-container';
        
        this.modal.appendChild(this.authContainer);
        this.appendChild(this.modal);
        
        this.modal.open();
        
        this._updateContent();
        
        const originalClose = this.modal.close.bind(this.modal);
        this.modal.close = () => {
            // Prevent closing if we are in the middle of a forced reset
            if (this._resetToken || this.currentView === 'reset_password') {
                console.log("LoginModal: Close prevented due to mandatory password reset.");
                return;
            }
            
            // Dismiss sticky toast if exists
            if (this._stickyToast) {
                this._stickyToast.hide();
                this._stickyToast = null;
            }

            originalClose();
            setTimeout(() => {
                if(this.parentNode) this.parentNode.removeChild(this);
            }, 300);
        };
    }
    
    _updateContent() {
        if (!this.authContainer) return;
        
        try {
            this.authContainer.innerHTML = this._getContent();
            
            // Re-add Close Button as innerHTML wipe removes it
            // Only show if closable (not mandatory reset)
            const isMandatoryReset = this._resetToken || this.currentView === 'reset_password';
            
            if (!isMandatoryReset) {
                const closeBtn = document.createElement('i');
                closeBtn.className = 'material-icons modal-close-btn';
                closeBtn.textContent = 'close';
                closeBtn.onclick = () => this.modal.close();
                this.authContainer.appendChild(closeBtn);
            }

            this._attachListeners();
            this._initPasswordToggles();
        } catch (e) {
            console.error("LoginModal render error:", e);
            this.authContainer.innerHTML = `<p class="error">Error rendering form. Please try again.</p>`;
        }
    }

    _getContent() {
        // Helper to generate a validated field wrapper
        const validatedField = (id, label, type = 'text', required = true, minlength = 0, placeholder = '', autocomplete = 'on') => {
            const isPassword = type === 'password';
            
            return `
            <div class="form-field-container" data-field="${id}">
                <div class="form-group ${isPassword ? 'password-group' : ''}">
                    <label for="${id}">${label}</label>
                    <div class="input-wrapper">
                        <input 
                            type="${type}" 
                            id="${id}" 
                            name="${id}" 
                            ${required ? 'required' : ''} 
                            ${minlength > 0 ? `minlength="${minlength}"` : ''}
                            ${placeholder ? `placeholder="${placeholder}"` : ''}
                            autocomplete="${autocomplete}"
                        >
                        ${isPassword ? `
                        <button type="button" class="btn-icon toggle-password" data-target="${id}" aria-label="Toggle password visibility">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        ` : ''}
                    </div>
                </div>
                <div class="form-field-error" id="${id}-error"></div>
            </div>
            `;
        };

        if (this.currentView === 'login') {
            return `
                <h2>${CommonStrings.signIn}</h2>
                <form id="login-form" novalidate>
                    ${validatedField('email', CommonStrings.email, 'email', true, 0, '', 'username')}
                    ${validatedField('password', CommonStrings.password, 'password', true, 0, '', 'current-password')}
                    <button type="submit" class="btn-primary" ${this.isLoading ? 'disabled' : ''}>
                        ${this.isLoading ? CommonStrings.loading : CommonStrings.signIn}
                    </button>
                    <div class="auth-links">
                        <button type="button" class="btn-link" id="link-forgot">${CommonStrings.forgotPassword}</button>
                        <span>|</span>
                        <button type="button" class="btn-link" id="link-register">${CommonStrings.signUp}</button>
                    </div>
                </form>
            `;
        } else if (this.currentView === 'register') {
             return `
                <h2>${CommonStrings.signUp}</h2>
                <form id="register-form" novalidate>
                    ${validatedField('email', CommonStrings.email, 'email', true, 0, '', 'email')}
                    <div class="form-row">
                        <div style="flex:1">
                            ${validatedField('firstName', CommonStrings.firstName, 'text', true, 0, '', 'given-name')}
                        </div>
                         <div style="flex:1">
                            ${validatedField('lastName', CommonStrings.lastName, 'text', true, 0, '', 'family-name')}
                        </div>
                    </div>
                    <button type="submit" class="btn-primary" ${this.isLoading ? 'disabled' : ''}>
                        ${this.isLoading ? CommonStrings.loading : CommonStrings.signUp}
                    </button>
                    <button type="button" class="btn-secondary" id="btn-back">${CommonStrings.back}</button>
                </form>
            `;
        } else if (this.currentView === 'reset_password') {
            return `
                <h2>${CommonStrings.newPassword}</h2>
                <div style="font-weight: 500; font-size: 18px; text-align: center; margin-bottom: 24px;">
                    ${CommonStrings.createAPassword}
                </div>
                <form id="reset-password-form" novalidate>
                     <!-- Hidden username field to help browser password managers identify the user -->
                     <input type="text" name="username" autocomplete="username" style="display:none;" aria-hidden="true">
                     ${validatedField('newPassword', CommonStrings.newPassword, 'password', true, 6, '', 'new-password')}
                     <button type="submit" class="btn-primary" ${this.isLoading ? 'disabled' : ''}>
                        ${this.isLoading ? CommonStrings.loading : CommonStrings.changePassword}
                    </button>
                </form>
            `;
        } else if (this.currentView === 'forgot') {
            return `
                <h2>${CommonStrings.resetPassword}</h2>
                <p>${CommonStrings.enterEmail}</p>
                <form id="forgot-form" novalidate>
                    ${validatedField('email', CommonStrings.email, 'email', true)}
                    <button type="submit" class="btn-primary" ${this.isLoading ? 'disabled' : ''}>
                        ${this.isLoading ? CommonStrings.loading : CommonStrings.sendResetEmail}
                    </button>
                    <button type="button" class="btn-secondary" id="btn-back">${CommonStrings.back}</button>
                </form>
            `;
        }
    }

    _attachListeners() {
        const attach = (selector, handler, event = 'click') => {
            // Use authContainer to ensure we find elements inside our specific container
            const el = this.authContainer ? this.authContainer.querySelector(selector) : null;
            if (el) {
                // Remove existing listeners to be safe (though usually new elements)
                el.removeEventListener(event, handler);
                el.addEventListener(event, handler);
            } else {
                console.warn(`LoginModal: Could not find element ${selector} to attach listener`);
            }
        };

        if (this.currentView === 'login') {
            attach('#login-form', this._handleLogin, 'submit');
            attach('#link-register', (e) => { e.preventDefault(); this._setView('register'); });
            attach('#link-forgot', (e) => { e.preventDefault(); this._setView('forgot'); });
        } 
        else if (this.currentView === 'register') {
            attach('#register-form', this._handleRegister, 'submit');
            attach('#btn-back', (e) => { e.preventDefault(); this._setView('login'); });
        }
        else if (this.currentView === 'forgot') {
            attach('#forgot-form', this._handleReset, 'submit');
            attach('#btn-back', (e) => { e.preventDefault(); this._setView('login'); });
        }
        else if (this.currentView === 'reset_password') {
            attach('#reset-password-form', this._handleChangePassword, 'submit');
        }
    }
    
    _initPasswordToggles() {
        if (!this.authContainer) return;
        this.authContainer.querySelectorAll('.toggle-password').forEach(btn => {
            btn.removeEventListener('click', this._togglePasswordVisibility);
            btn.addEventListener('click', this._togglePasswordVisibility);
        });
    }
    
    _togglePasswordVisibility(e) {
        e.preventDefault();
        const btn = e.currentTarget;
        const wrapper = btn.closest('.input-wrapper');
        const input = wrapper ? wrapper.querySelector('input') : null;
        
        if (input) {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            // Update icon
            if (type === 'text') {
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M1 1l22 22"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path></svg>';
            } else {
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
            }
        }
    }

    _setView(view) {
        this.currentView = view;
        this._updateContent();
    }
    
    _setLoading(loading) {
        this.isLoading = loading;
        if (!this.authContainer) return;

        const submitBtn = this.authContainer.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = loading;
            submitBtn.textContent = loading ? CommonStrings.loading : this._getSubmitButtonLabel();
        }

        const inputs = this.authContainer.querySelectorAll('input');
        inputs.forEach(input => input.disabled = loading);
    }

    _getSubmitButtonLabel() {
        switch (this.currentView) {
            case 'login': return CommonStrings.signIn;
            case 'register': return CommonStrings.signUp;
            case 'forgot': return CommonStrings.send;
            case 'reset_password': return CommonStrings.changePassword;
            default: return CommonStrings.signIn;
        }
    }

    /* Validation Logic */
    _validateForm(formId) {
        const form = this.authContainer.querySelector('#' + formId);
        if (!form) return false;
        
        let isValid = true;
        const inputs = form.querySelectorAll('input');
        
        // Reset errors
        form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
        form.querySelectorAll('.form-field-error').forEach(el => el.style.display = 'none');
        
        inputs.forEach(input => {
             // Skip optional if logic allows, assuming all here are required for now based on 'required' attr
             if (input.hasAttribute('required') && !input.value.trim()) {
                 let msg = CommonStrings.fieldRequired;
                 if (input.type === 'password') {
                     msg = CommonStrings.passwordRequired || msg;
                 } else if (input.type === 'email') {
                     // For email, we might use "Email is required" if available, or just the generic "Invalid" one if that's what we have
                     msg = CommonStrings.emailRequired || msg;
                 }
                 this._showError(input, msg); 
                 isValid = false;
                 return;
             }
             
             // Email
             if (input.type === 'email' && input.value) {
                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                 if (!emailRegex.test(input.value)) {
                     this._showError(input, CommonStrings.invalidEmail);
                     isValid = false;
                 }
             }
             
             // Password Length
             if (input.type === 'password' && input.hasAttribute('minlength')) {
                 const min = parseInt(input.getAttribute('minlength'));
                 if (input.value.length < min) {
                      this._showError(input, (CommonStrings.passwordLength || "Password too short").replace('6', min));
                      isValid = false;
                 }
             }
        });
        
        return isValid;
    }

    _showError(input, message) {
        input.classList.add('invalid');
        // Find wrapper parent if exists (input-wrapper)
        const wrapper = input.closest('.input-wrapper');
        if (wrapper) wrapper.classList.add('invalid');
        
        const container = input.closest('.form-field-container');
        if (container) {
            const errorDiv = container.querySelector('.form-field-error');
            if (errorDiv) {
                errorDiv.textContent = message;
                errorDiv.style.display = 'block';
            }
        }
    }

    async _handleLogin(e) {
        e.preventDefault();
        
        if (!this._validateForm('login-form')) return;
        
        console.log("Login submitted");
        
        const emailInput = this.authContainer.querySelector('#email');
        const passwordInput = this.authContainer.querySelector('#password');

        if (!emailInput || !passwordInput) {
            console.error("Login inputs not found");
            return;
        }

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !password) return;

        // Apply logic to match flutter: prefix login email with organization id
        const finalEmail = `${AppConfig.organization}+${email}`;

        this._setLoading(true);
        try {
            await AuthService.login(finalEmail, password);
            ToastHelper.showSuccess(CommonStrings.success);
            this.modal.close();
            // Force reload to ensure all components (UserHeader, etc) pick up the new auth state
            window.location.reload(); 
        } catch (err) {
            console.error("Login Error:", err);
            let msg = err.message || CommonStrings.error;
            
            if (msg.includes("Invalid login credentials") || msg.includes("Invalid credentials")) {
                msg = CommonStrings.invalidCredentials;
            }
            
            ToastHelper.showError(msg);
        } finally {
            this._setLoading(false);
        }
    }

    async _handleRegister(e) {
        e.preventDefault();
        
        if (!this._validateForm('register-form')) return;
        
        const firstNameInput = this.authContainer.querySelector('#firstName');
        const lastNameInput = this.authContainer.querySelector('#lastName');
        const emailInput = this.authContainer.querySelector('#email');

        const firstName = firstNameInput ? firstNameInput.value : '';
        const lastName = lastNameInput ? lastNameInput.value : '';
        const email = emailInput ? emailInput.value : '';

        this._setLoading(true);
        try {
            // Match Flutter's logic: Flat structure with 'name' and 'surname'
            const data = {
                email,
                name: firstName,
                surname: lastName,
                // Add language if available
                lang: 'cs' // Defaulting to cs as per project context, or derive from LocalizationService
            };
            await AuthService.register(data);
            this._stickyToast = ToastHelper.showSuccess(`${CommonStrings.checkEmail} ${email}`, 0); // 0 = sticky/persistent
            this._setView('login');
        } catch (err) {
            console.error("Register Error:", err);
            let msg = err.message || CommonStrings.error;
            
            // Try to match specific backend errors to localized strings
            if (msg.includes("already in use") || msg.includes("already registered")) {
                msg = CommonStrings.emailInUse.replace("{email}", email);
            } else if (msg.includes("Registration failed")) {
                msg = CommonStrings.registrationFailed;
            }
            
            ToastHelper.showError(msg);
        } finally {
            this._setLoading(false);
        }
    }

    async _handleReset(e) {
        e.preventDefault();
        if (!this._validateForm('forgot-form')) return;

        const emailInput = this.authContainer.querySelector('#email');
        const email = emailInput ? emailInput.value : '';

        this._setLoading(true);
        try {
            await AuthService.resetPasswordForEmail(email);
            this._stickyToast = ToastHelper.showSuccess(`${CommonStrings.passwordResetSent} ${email}`, 0); // 0 = sticky
            this._setView('login');
        } catch (err) {
            console.error("Reset Error:", err);
            ToastHelper.showError(err.message || CommonStrings.error);
        } finally {
            this._setLoading(false);
        }
    }

    async _handleChangePassword(e) {
        e.preventDefault();
        if (!this._validateForm('reset-password-form')) return;

        const output = this.authContainer.querySelector('#newPassword');
        const password = output ? output.value : '';
        
        if (!password || !this._resetToken) return;

        console.log("LoginModal: Changing password with token:", this._resetToken);

        this._setLoading(true);
        try {
            // Service returns { code: 200, email: "..." } or error
            const result = await AuthService.changePassword(this._resetToken, password);

            if (result.code === 200) {
                 // Success -> Auto Login
                 // Prefix logic from AppConfig
                 // Flutter: AuthService.login(AppConfig.getUserPrefix(value["email"]), _passwordController.text);
                 // Web: AppConfig.organization + result.email
                 
                 const email = result.email;
                 // Ensure result.email is valid, otherwise fall back to something or trust it matches what we sent? 
                 // Actually the rpc 'set_user_password_token' returns the user email in 'email' field on success.
                 
                 if (email) {
                    const finalEmail = `${AppConfig.organization}+${email}`;
                    await AuthService.login(finalEmail, password);
                 } else {
                    console.warn("Change password success but no email returned for auto-login.");
                 }

                 ToastHelper.showSuccess(CommonStrings.passwordChanged);
                 this.modal.close();
                 window.location.href = '/';
            } else if (result.code === 403 || result.code === 404) {
                 console.error("Change Password RPC Failed with code:", result.code);
                 throw new Error(CommonStrings.tokenInvalid);
            } else {
                 console.error("Change Password RPC Failed with message:", result.message);
                 throw new Error(result.message || CommonStrings.error);
            }
        } catch (err) {
            console.error("Change Password Error:", err);
            ToastHelper.showError(err.message || CommonStrings.error);
        } finally {
            this._setLoading(false);
        }
    }
}

customElements.define('login-modal', LoginModal);
