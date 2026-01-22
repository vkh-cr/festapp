import { LocalizationService } from '../../../services/localization_service.js';
import { formatPrice } from '../../../utils/formatters.js';

/**
 * Strategy interface:
 * {
 *    format(value, fieldDef, context) => string
 * }
 */

class BasePreviewStrategy {
    format(value, fieldDef, context) {
        if (value === null || value === undefined) return { value: '', price: null };
        
        // 1. Resolve Options (if applicable)
        let resolved = this._resolveValue(value, fieldDef, context);
        return resolved;
    }

    _getOptions(fieldDef) {
        return fieldDef.options || (fieldDef.data && fieldDef.data.options);
    }

    _resolveValue(val, fieldDef, context) {
        const options = this._getOptions(fieldDef);
        
        // Handle " | " for multi-selects
        const valStr = String(val);
        if (valStr.includes(' | ')) {
            const parts = valStr.split(' | ');
            // For multi-select, we currently don't support individual prices in the summary nicely
            // So we just join the titles and ignore price formatting for this specific case?
            // Or we assume sum? For now, let's just join titles and existing behavior.
            const mapped = parts.map(part => this._findOption(part, options, context));
            const joinedValue = mapped.map(m => m.value).join(', ');
            // We lose individual prices here, but that's consistent with complex behavior complexity
            return { value: joinedValue, price: null };
        }
        
        if (options && options.length > 0) {
            return this._findOption(val, options, context);
        }
        
        return { value: valStr, price: null };
    }

    _findOption(val, options, context) {
        const found = options.find(o => o.id != null && String(o.id) === String(val));
        if (found) {
            let title = found.title;
            let priceStr = null;
            // Extract price if pertinent and available in context
            if (found.price && context && context.currency) {
                 priceStr = formatPrice(found.price, context.currency, 0, 'cs-CZ');
            }
            return { value: title, price: priceStr };
        }
        return { value: val, price: null };
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
         if (!value) return { value: '', price: null };
         
         let number, expiry;
         
         if (typeof value === 'object') {
             number = value.id_document_number;
             expiry = value.id_document_expiry_date;
         } else {
             number = value;
         }

         if (!number) return { value: '', price: null };

         let display = number;
         if (expiry) {
             const formattedExpiry = this._formatDate(expiry);
             display += ` (${formattedExpiry})`;
         }
         
         return { value: display, price: null };
    }

    _formatDate(dateStr) {
        if (!dateStr) return '';
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return dateStr;

            const locale = LocalizationService.currentLocale === 'cs' ? 'cs-CZ' : 'en-US';
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
        return this._strategies[fieldDef.type] || this._strategies['default'];
    }
    
    /**
     * Main entry point
     * NB: Returns { value: string, price: string|null }
     */
    static format(fieldDef, value, context) {
        const strategy = this.getStrategy(fieldDef);
        const result = strategy.format(value, fieldDef, context);
        // Safety Fallback for legacy strategies if any exist or if logic didn't return object
        if (typeof result === 'string') {
            return { value: result, price: null };
        }
        return result;
    }
}
