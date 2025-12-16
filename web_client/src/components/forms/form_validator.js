import { FormStrings } from './form_strings.js';
import { FormHelper } from './form_helper.js';

export class FormValidator {

    static handleInputValidation(e, form, session) {
         if (!session) return;
         
         const target = e.target;
         const fieldName = target.name;
         if (!fieldName) return;
         
         const currentErrors = { ...session.state.validationErrors };
         // If no error for this field, nothing to do (unless we want to remove invalid class just in case)
         if (!currentErrors[fieldName] && !target.classList.contains('invalid')) return; 

         let nowValid = false;
         
         if (target.type === 'radio' || target.type === 'checkbox') {
             const group = form.querySelectorAll(`input[name="${fieldName}"]`);
             nowValid = Array.from(group).some(i => i.checked);
         } else {
             nowValid = target.checkValidity();
         }
         
         console.log(`[FormValidator] Input: ${fieldName} Valid: ${nowValid}`);

         if (nowValid) {
             delete currentErrors[fieldName];
             session.setValidationErrors(currentErrors);
             
             // Immediate DOM cleanup to ensure responsiveness
             target.classList.remove('invalid');
             const container = target.closest('.form-field-container');
             if (container) {
                 const errorDiv = container.querySelector('.form-field-error');
                 if (errorDiv) errorDiv.style.display = 'none';
                 const optionsContainer = container.querySelector('.radio-options, .checkbox-options');
                 if (optionsContainer) optionsContainer.classList.remove('invalid');
             }
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
                if (field.type === 'ticket') {
                    // Ticket Validation
                    // We need to validate each ticket item against required subfields
                    const tickets = (payload && payload.ticket) ? payload.ticket : [];
                    
                    // Definition of subfields
                    let subFields = field.subFields;
                    if (!subFields || subFields.length === 0) {
                         subFields = field.fields || (field.data && field.data.fields) || [];
                    }
                    
                    // Iterate tickets in payload
                    tickets.forEach((ticketItem, tIdx) => {
                         subFields.forEach(sub => {
                             // Handle Model (camelCase) or Raw Data (snake_case)
                             const isRequired = sub.isRequired !== undefined ? sub.isRequired : sub.is_required;
                             
                             if (isRequired) {
                                  // Check if this subfield has a value in the ticketItem
                                  // ticketItem.fields is array of { type: val, _subFieldId: id, ... }
                                  // or { [type]: val } if legacy?
                                  // FormSession normalizes it.
                                  
                                  const valObj = ticketItem.fields.find(f => {
                                      // Strong check via subFieldId
                                      if (f._subFieldId) return String(f._subFieldId) === String(sub.id);
                                      // Fallback by key
                                      return f[sub.type] !== undefined;
                                  });
                                  
                                  let val = valObj ? valObj[sub.type] : null;
                                  
                                  // Special handling for 'spot' which is stored at root level of ticketItem
                                  if (sub.type === 'spot' && val === null) {
                                      val = ticketItem['spot'];
                                  }
                                  // Determine if satisfied
                                  let isSatisfied = false;
                                  if (val !== null && val !== '' && val !== undefined) {
                                      isSatisfied = true;
                                  }
                                  
                                  console.log(`[FormValidator] Ticket [${tIdx}] Subfield [${sub.id}] Type=[${sub.type}] Required=${isRequired} Val=[${val}] Satisfied=${isSatisfied}`);

                                  if (!isSatisfied) {
                                      // Construct error ID matching the input name: fieldId_tIdx_subId
                                      // Use preserved _ticketIndex if available, otherwise tIdx
                                      const idxToUse = ticketItem['_ticketIndex'] !== undefined ? ticketItem['_ticketIndex'] : tIdx;
                                      const errorId = FormHelper.getTicketInputName(field.id, idxToUse, sub.id);
                                      errors[errorId] = FormStrings.fieldCannotBeEmpty;
                                      // console.log(`[FormValidator] Adding error for ${errorId}`);
                                  }
                             }
                         });
                    });
                    
                    return; // Done with ticket field itself
                }

                if (errors[field.id]) return;

                if (field.isRequired) {
                     let isSatisfied = false;
                     if (payload) {
                         const entry = payloadFields.find(f => f[field.id.toString()] !== undefined);
                         const val = entry ? entry[field.id.toString()] : null;
                         
                         if (Array.isArray(val)) {
                             isSatisfied = val.length > 0;
                         } else {
                             isSatisfied = val !== null && val !== '' && val !== undefined;
                         }
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
                 
                 // Try to Find via form.elements (Standard HTML Collection)
                 // This handles RadioNodeList and works without CSS selector escaping issues
                 let firstInvalid = form.elements[firstErrorId];
                 
                // If it's a RadioNodeList (multiple inputs with same name), pick the first one
                 if (typeof RadioNodeList !== 'undefined' && firstInvalid instanceof RadioNodeList) {
                     firstInvalid = firstInvalid[0];
                 }
                 
                 // Fallback to Query Selector if form.elements fails (e.g. if name has weird chars not indexed?)
                 if (!firstInvalid) {
                      try {
                          firstInvalid = form.querySelector(`[name="${firstErrorId}"]`);
                      } catch (e) {
                          console.warn(`[FormValidator] Selector error for ${firstErrorId}`, e);
                      }
                 }
                 
                 if (firstInvalid) {
                     // Try to scroll to container
                     const container = firstInvalid.closest('.form-field-container');
                     (container || firstInvalid).scrollIntoView({ behavior: 'smooth', block: 'center' });
                     
                     // Focus: If it's a radio/checkbox, sometimes focusing the input is weird. 
                     // But we should try.
                     if (firstInvalid.focus) firstInvalid.focus({ preventScroll: true });
                 } else {
                     console.warn(`[FormValidator] Could not find element for error field: ${firstErrorId}`);
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
             
             // For Render, we are searching in CONTAINER (Header + Form + Footer wrapper), not just FORM
             // Query Selector is safest here.
             let input = container.querySelector(`[name="${fieldId}"]`);
             
             // Fallback: Try to find form and use elements if querySelector failed
             if (!input) {
                 const form = container.querySelector('form');
                 if (form && form.elements[fieldId]) {
                     let el = form.elements[fieldId];
                     if (typeof RadioNodeList !== 'undefined' && el instanceof RadioNodeList) el = el[0];
                     input = el;
                 }
             }

             if (input) {
                 input.classList.add('invalid');
                 const fieldContainer = input.closest('.form-field-container');
                 if (fieldContainer) {
                     const errorDiv = fieldContainer.querySelector('.form-field-error');
                     if (errorDiv) {
                         errorDiv.textContent = message;
                         errorDiv.style.display = 'block';
                     } else {
                         console.error('[FormValidator] Error div not found in container', fieldContainer);
                     }
                     
                     // Highlight options container if exists (for radio/checkbox groups)
                     const optionsContainer = fieldContainer.querySelector('.radio-options, .checkbox-options');
                     if (optionsContainer) {
                         optionsContainer.classList.add('invalid');
                     }
                 } else {
                     console.warn('[FormValidator] Field container not found for input', input);
                 }
             } else {
                 console.warn(`[FormValidator] Input not found for error field: ${fieldId} in container`, container);
                 // Fallback: Try to find by ID if Name failed? 
                 // Sometimes ID might be constructed differently but worth a debug log.
             }
        });
    }
}
