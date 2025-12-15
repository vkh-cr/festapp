import { FormStrings } from './form_strings.js';
import { CommonStrings } from '../shared/common_strings.js';
import { FormFieldBuilder } from './fields/form_field_builder.js';
import { DbForms } from './db_forms.js';
import { html, unsafe } from '../../utils/html.js';

export class FormRenderer {
    
    static render(container, formModel, showPreview, callbacks) {
        // Declarative Layout
        container.innerHTML = html`
            <div class="form-wrapper ${formModel.isCardDesign ? 'is-card-design' : ''}">
                ${showPreview ? html`<div style="width:100%; color:black; background:orange; padding:8px; margin-bottom:16px; text-align:center; font-weight:bold; font-size:13px;">${FormStrings.previewMode}</div>` : ''}
                
                ${formModel.header ? html`<div class="form-header">${unsafe(formModel.header)}</div>` : ''}
                
                ${formModel.description ? html`<div class="form-description">${unsafe(formModel.description)}</div>` : ''}

                <form id="dynamic-form" novalidate>
                    <!-- Fields will be appended here -->
                    <div id="fields-container"></div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary btn-submit">${FormStrings.buttonContinue}</button>
                    </div>
                </form>
            </div>
        `;

        const form = container.querySelector('#dynamic-form');
        const fieldsContainer = form.querySelector('#fields-container');

        // Append Fields (FormFieldBuilder still returns Nodes)
        formModel.visibleFields.forEach(field => {
            const fieldComponent = FormFieldBuilder.createFormField(field, formModel);
            fieldsContainer.appendChild(fieldComponent);
        });
        
        // Bind Callbacks
        form.onsubmit = (e) => {
            e.preventDefault();
            if(callbacks.onSubmit) callbacks.onSubmit(form, formModel);
        }
        
        const updateHandler = (e) => {
            if(callbacks.onInput) callbacks.onInput(e, form, formModel);
        };
        form.addEventListener('input', updateHandler);
        // Change event needed for some inputs (select, etc) to trigger updates immediately?
        // Usually 'input' covers value changes, but let's keep 'change' for safety/legacy.
        form.addEventListener('change', updateHandler);
    }

    // _renderHeader helper removed as it is now inlined in render() template
}
