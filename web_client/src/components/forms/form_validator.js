import { FormStrings } from './form_strings.js';

export class FormValidator {

    static handleInputValidation(e, form, session) {
         if (!session) return;
         
         const target = e.target;
         const fieldName = target.name;
         if (!fieldName) return;
         
         const currentErrors = { ...session.state.validationErrors };
         if (!currentErrors[fieldName]) return; // No error to clear

         let nowValid = false;
         
         if (target.type === 'radio' || target.type === 'checkbox') {
             const group = form.querySelectorAll(`input[name="${fieldName}"]`);
             nowValid = Array.from(group).some(i => i.checked);
         } else {
             nowValid = target.checkValidity();
         }

         if (nowValid) {
             delete currentErrors[fieldName];
             session.setValidationErrors(currentErrors);
         }
    }

    /**
     * @returns {boolean} true if valid, false if invalid (and errors shown)
     */
    static validateAndShowErrors(form, formModel, session) {
            const errors = {}; // { fieldId: message }

            // 1. HTML5 Validity Check
            const elements = form.elements;
            for (let i = 0; i < elements.length; i++) {
                const el = elements[i];
                if (el.nodeName === 'BUTTON' || el.type === 'submit' || el.type === 'radio' || el.type === 'checkbox') continue;
                
                if (errors[el.name]) continue;

                if (el.validity.customError) {
                    errors[el.name] = el.validationMessage;
                    continue;
                }

                if (!el.validity.valid) {
                     if (el.validity.valueMissing) {
                        errors[el.name] = FormStrings.fieldCannotBeEmpty;
                    } else if (el.validity.typeMismatch || el.validity.patternMismatch) {
                        if (el.type === 'tel') {
                             errors[el.name] = FormStrings.phoneFormatValidation;
                        } else {
                             errors[el.name] = FormStrings.invalidFormat;
                        }
                    } else {
                        errors[el.name] = el.validationMessage;
                    }
                }
            }

            // 2. State-Based Required Check
            const payload = session ? session.payload : null;
            const payloadFields = payload ? payload.fields : [];

            formModel.visibleFields.forEach(field => {
                if (field.type === 'ticket') return;
                if (errors[field.id]) return;

                if (field.isRequired) {
                     let isSatisfied = false;
                     if (payload) {
                         const entry = payloadFields.find(f => f[field.id.toString()] !== undefined);
                         const val = entry ? entry[field.id.toString()] : null;
                         isSatisfied = val !== null && val !== '' && val !== undefined;
                     } 
                     
                     if (!isSatisfied) {
                         errors[field.id] = FormStrings.fieldCannotBeEmpty;
                     }
                }
            });

            // 3. Update Session State
            if (session) {
                session.setValidationErrors(errors);
            }

            // 4. Check & Focus
            if (Object.keys(errors).length > 0) {
                 const firstErrorId = Object.keys(errors)[0];
                 const firstInvalid = form.querySelector(`[name="${firstErrorId}"]`);
                 
                 if (firstInvalid) {
                     // Try to scroll to container
                     const container = firstInvalid.closest('.form-field-container');
                     (container || firstInvalid).scrollIntoView({ behavior: 'smooth', block: 'center' });
                     if (firstInvalid.focus) firstInvalid.focus({ preventScroll: true });
                 }
                 return false;
            }

            return true;
    }

    static renderErrors(container, errors) {
        // Clear all existing errors first
        const allErrors = container.querySelectorAll('.form-field-error');
        allErrors.forEach(el => el.style.display = 'none');
        const allInvalid = container.querySelectorAll('.invalid');
        allInvalid.forEach(el => el.classList.remove('invalid'));

        // Show active errors
        if (!errors || Object.keys(errors).length === 0) return;

        Object.keys(errors).forEach(fieldId => {
             const message = errors[fieldId];
             let input = container.querySelector(`[name="${fieldId}"]`);
             
             if (input) {
                 input.classList.add('invalid');
                 const fieldContainer = input.closest('.form-field-container');
                 if (fieldContainer) {
                     const errorDiv = fieldContainer.querySelector('.form-field-error');
                     if (errorDiv) {
                         errorDiv.textContent = message;
                         errorDiv.style.display = 'block';
                     }
                 }
             }
        });
    }
}
