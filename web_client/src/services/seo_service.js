export class SeoService {
    
    /**
     * Updates SEO meta tags based on the FormModel.
     * @param {FormModel} formModel 
     */
    static updateMetaTags(formModel) {
        if (!formModel) return;

        const title = formModel.title || 'Festapp Event';
        
        // Extract plain text description from HTML header
        let description = '';
        let imageUrl = null;

        if (formModel.header) {
            description = this._extractTextFromHtml(formModel.header);
            imageUrl = this._extractImageFromHtml(formModel.header);
        }

        // Fallbacks
        if (!description) {
            description = formModel.description || 'Rychlé a jednoduché založení události, prodej vstupenek a registrace.';
        }
        
        // Add date info if available
        if (formModel.startTime) {
            const dateStr = this._formatDate(formModel.startTime);
            if (dateStr) {
                description = `${dateStr} - ${description}`;
            }
        }

        // 1. Update Title
        document.title = `${title} - Vstupenky.online`;

        // 2. Update Description
        this._setMetaTag('name', 'description', description);

        // 3. Update OG Tags
        this._setMetaTag('property', 'og:title', title);
        this._setMetaTag('property', 'og:description', description);
        if (imageUrl) {
            this._setMetaTag('property', 'og:image', imageUrl);
        }

        // 4. Update Twitter Tags
        this._setMetaTag('property', 'twitter:title', title);
        this._setMetaTag('property', 'twitter:description', description);
        if (imageUrl) {
            this._setMetaTag('property', 'twitter:image', imageUrl);
        }
    }

    static _setMetaTag(attrName, attrValue, content) {
        // Truncate content if too long (standard SEO practice)
        // Meta desc ~160 chars, OG desc ~200-300 chars. 
        // We'll be generous but safe to avoid massive HTML dumps being put into attribute.
        let safeContent = content ? content.trim() : '';
        if (safeContent.length > 300) {
            safeContent = safeContent.substring(0, 297) + '...';
        }

        let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
        
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attrName, attrValue);
            document.head.appendChild(element);
        }
        
        element.setAttribute('content', safeContent);
    }

    static _extractTextFromHtml(htmlString) {
        if (!htmlString) return '';
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    }

    static _extractImageFromHtml(htmlString) {
        if (!htmlString) return null;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const img = doc.querySelector('img');
        return img ? img.src : null;
    }

    static _formatDate(dateObj) {
        if (!dateObj) return '';
        return dateObj.toLocaleDateString('cs-CZ', {
            day: 'numeric', 
            month: 'numeric', 
            year: 'numeric'
        });
    }
}
