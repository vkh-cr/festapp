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
 * Sanitizes an HTML string by stripping dangerous elements and attributes
 * while preserving safe formatting tags. Returns a SafeHtml object.
 *
 * Allowed tags: p, br, b, i, u, strong, em, a, img, div, span, h1-h6, ul, ol, li, table, tr, td, th, thead, tbody, blockquote, hr, sub, sup, figure, figcaption
 * Allowed attributes: href, src, alt, class, style, width, height, target, fetchpriority
 * Strips: script, iframe, object, embed, form, input, on* event handlers
 */
export function sanitizeHtml(str) {
    if (!str) return new SafeHtml('');

    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');

    const ALLOWED_TAGS = new Set([
        'p', 'br', 'b', 'i', 'u', 'strong', 'em', 'a', 'img', 'div', 'span',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li',
        'table', 'tr', 'td', 'th', 'thead', 'tbody', 'blockquote', 'hr',
        'sub', 'sup', 'figure', 'figcaption',
    ]);
    const ALLOWED_ATTRS = new Set([
        'href', 'src', 'alt', 'class', 'style', 'width', 'height', 'target', 'fetchpriority',
    ]);

    function cleanNode(node) {
        const children = [...node.childNodes];
        for (const child of children) {
            if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();
                if (!ALLOWED_TAGS.has(tag)) {
                    child.remove();
                    continue;
                }
                // Remove dangerous attributes (on* event handlers, javascript: hrefs)
                for (const attr of [...child.attributes]) {
                    if (attr.name.startsWith('on') || !ALLOWED_ATTRS.has(attr.name)) {
                        child.removeAttribute(attr.name);
                    } else if (attr.name === 'href' && attr.value.trim().toLowerCase().startsWith('javascript:')) {
                        child.removeAttribute(attr.name);
                    }
                }
                cleanNode(child);
            }
        }
    }

    cleanNode(doc.body);
    return new SafeHtml(doc.body.innerHTML);
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
