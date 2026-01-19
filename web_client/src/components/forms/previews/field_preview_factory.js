import { LocalizationService } from '../../../services/localization_service.js';

/**
 * Strategy interface:
 * {
 *    format(value, fieldDef, context) => string
 * }
 */

class BasePreviewStrategy {
    format(value, fieldDef, context) {
        if (value === null || value === undefined) return '';
        
        // 1. Resolve Options (if applicable)
        let resolvedValue = value;
        const options = this._getOptions(fieldDef);
        
        if (options && options.length > 0) {
           resolvedValue = this._resolveOptionLabel(value, options, context);
        }

        return String(resolvedValue);
    }

    _getOptions(fieldDef) {
        return fieldDef.options || (fieldDef.data && fieldDef.data.options);
    }

    _resolveOptionLabel(val, options, context) {
        // Handle " | " for multi-selects
        const valStr = String(val);
        if (valStr.includes(' | ')) {
            const parts = valStr.split(' | ');
            return parts.map(part => this._findOptionTitle(part, options, context)).join(', ');
        }
        return this._findOptionTitle(val, options, context);
    }

    _findOptionTitle(val, options, context) {
        const found = options.find(o => o.id != null && String(o.id) === String(val));
        if (found) {
            let title = found.title;
            // Append price if pertinent and available in context
            if (found.price && context && context.currency) {
                 title += ` (${found.price} ${context.currency})`;
            }
            return title;
        }
        return val;
    }
}

class ProductTypePreviewStrategy extends BasePreviewStrategy {
    _getOptions(fieldDef) {
        // Prioritize internal schema for product types
        if (fieldDef.data && fieldDef.data.product_type_data && fieldDef.data.product_type_data.products) {
            return fieldDef.data.product_type_data.products;
        }
        return super._getOptions(fieldDef);
    }
}

class IdDocumentPreviewStrategy extends BasePreviewStrategy {
    format(value, fieldDef, context) {
         if (!value) return '';
         
         // value is expected to be { id_document_number, id_document_expiry_date }
         // due to FormDataReader change.
         // OR it could be a legacy string if something went wrong? Handle both?
         
         let number, expiry;
         
         if (typeof value === 'object') {
             number = value.id_document_number;
             expiry = value.id_document_expiry_date;
         } else {
             // Fallback
             number = value;
         }

         if (!number) return '';

         let display = number;
         if (expiry) {
             const formattedExpiry = this._formatDate(expiry);
             display += ` (${formattedExpiry})`;
         }
         
         return display;
    }

    _formatDate(dateStr) {
        if (!dateStr) return '';
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return dateStr;

            // Use Intl.DateTimeFormat for consistent formatting based on locale rules
            // Similar to Flutter's logic which seems to default to cs_CZ or context locale
            const locale = LocalizationService.currentLocale === 'cs' ? 'cs-CZ' : 'en-US';
            
            // Flutter: DateFormat.yMd() -> 1/28/2028 or 28.1.2028
            return new Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }).format(date);
        } catch (e) {
            return dateStr;
        }
    }
}

export class FieldPreviewFactory {
    static _strategies = {
        'default': new BasePreviewStrategy(),
        'product_type': new ProductTypePreviewStrategy(),
        'id_document': new IdDocumentPreviewStrategy()
    };

    static getStrategy(fieldDef) {
        // Can expand logic here if needed
        return this._strategies[fieldDef.type] || this._strategies['default'];
    }
    
    /**
     * Main entry point
     */
    static format(fieldDef, value, context) {
        const strategy = this.getStrategy(fieldDef);
        return strategy.format(value, fieldDef, context);
    }
}
