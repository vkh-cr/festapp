/**
 * Lightweight HTML Tagged Template Literal Helper
 * 
 * Usage:
 * const content = html`<div class="user">${userName}</div>`;
 * 
 * Features:
 * - Automatically sanitizes interpolated strings to prevent XSS.
 * - Joins arrays automatically.
 * - Returns a SafeHtml object that can be nested in other html templates without re-escaping.
 * - Use .toString() or implicit string conversion to get the final HTML string.
 */

export class SafeHtml {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value;
    }
}

export function html(strings, ...values) {
    let result = '';
    
    strings.forEach((string, i) => {
        result += string;
        
        if (i < values.length) {
            const val = values[i];
            result += sanitize(val);
        }
    });

    return new SafeHtml(result);
}

/**
 * Marks a string as "Safe" (Raw HTML), bypassing sanitization.
 * Use with caution: html`<div>${unsafe(rawHtml)}</div>`
 */
export function unsafe(str) {
    return new SafeHtml(str);
}

/**
 * Sanitizes a value for safe insertion into HTML.
 */
function sanitize(val) {
    if (val === null || val === undefined) {
        return '';
    }
    
    if (val instanceof SafeHtml) {
        return val.value;
    }

    if (Array.isArray(val)) {
        return val.map(sanitize).join('');
    }
    
    // If it's a number/boolean, safe to stringify
    if (typeof val === 'number' || typeof val === 'boolean') {
        return String(val);
    }

    // Basic escaping
    return String(val)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
