export class ColorUtils {
    /**
     * Parses a color string (Hex, RGB, RGBA) into {r, g, b}
     * Returns null if invalid.
     */
    static parseToRgb(color) {
        if (!color) return null;

        let r = 0, g = 0, b = 0;

        // Handle Hex
        if (color.startsWith('#')) {
            const cleanHex = color.substring(1);
            if (cleanHex.length === 3) {
                r = parseInt(cleanHex[0] + cleanHex[0], 16);
                g = parseInt(cleanHex[1] + cleanHex[1], 16);
                b = parseInt(cleanHex[2] + cleanHex[2], 16);
            } else if (cleanHex.length === 6) {
                r = parseInt(cleanHex.substring(0, 2), 16);
                g = parseInt(cleanHex.substring(2, 4), 16);
                b = parseInt(cleanHex.substring(4, 6), 16);
            } else {
                return null;
            }
        }
        // Handle RGB / RGBA
        else if (color.startsWith('rgb')) {
            const values = color.match(/\d+/g);
            if (values && values.length >= 3) {
                r = parseInt(values[0]);
                g = parseInt(values[1]);
                b = parseInt(values[2]);
            } else {
                return null;
            }
        } else {
             return null;
        }

        return { r, g, b };
    }

    /**
     * Converts a Hex string (e.g. #RRGGBB or #RGB) to HSL object {h, s, l}
     * h: 0-360, s: 0-1, l: 0-1
     */
    static hexToHsl(hex) {
        // Use the new parser, even though method is named hexToHsl
        const rgb = ColorUtils.parseToRgb(hex);
        if (!rgb) return { h: 0, s: 0, l: 0 }; // Fallback

        let { r, g, b } = rgb;
        r /= 255;
        g /= 255;
        b /= 255;
        
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta === 0)
            h = 0;
        else if (cmax === r)
            h = ((g - b) / delta) % 6;
        else if (cmax === g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0)
            h += 360;

        l = (cmax + cmin) / 2;
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        return { h, s, l };
    }

    /**
     * Converts HSL object {h, s, l} to Hex string #RRGGBB
     */
    static hslToHex(h, s, l) {
        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255).toString(16);
        g = Math.round((g + m) * 255).toString(16);
        b = Math.round((b + m) * 255).toString(16);

        if (r.length === 1)
            r = "0" + r;
        if (g.length === 1)
            g = "0" + g;
        if (b.length === 1)
            b = "0" + b;

        return "#" + r + g + b;
    }

    /**
     * Blends a foreground color with transparency over a background color.
     * Returns Hex string.
     * @param {string} fgHex Foreground color (Hex)
     * @param {number} fgOpacity Foreground opacity 0-1
     * @param {string} bgHex Background color (Hex) - assumed opaque
     */
    static alphaBlend(fgHex, fgOpacity, bgHex) {
        const fg = ColorUtils.parseToRgb(fgHex);
        const bg = ColorUtils.parseToRgb(bgHex);

        if (!fg || !bg) return bgHex || '#000000'; // Fallback

        // Blend: result = fg * alpha + bg * (1 - alpha)
        let r = Math.round(fg.r * fgOpacity + bg.r * (1 - fgOpacity));
        let g = Math.round(fg.g * fgOpacity + bg.g * (1 - fgOpacity));
        let b = Math.round(fg.b * fgOpacity + bg.b * (1 - fgOpacity));

        const toHex = (n) => n.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    
    /**
     * Calculates the relative luminance of a color (W3C WCAG 2.0).
     * @param {Object} rgb {r, g, b} 0-255
     * @returns number 0-1
     */
    static getRelativeLuminance(rgb) {
        // Convert 8-bit color to sRGB sRGB = V_8bit / 255
        // Then linearized: if V_sRGB <= 0.03928 then V = V_sRGB / 12.92 else V = ((V_sRGB + 0.055) / 1.055) ^ 2.4
        const sRGB = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
        const linear = sRGB.map(v => {
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        // L = 0.2126 * R + 0.7152 * G + 0.0722 * B
        return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
    }

    /**
     * Calculates the contrast ratio between two relative luminances.
     * Ratio = (L1 + 0.05) / (L2 + 0.05) where L1 is lighter.
     * Returns 1 to 21.
     */
    static getContrastRatio(lum1, lum2) {
        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);
        return (lighter + 0.05) / (darker + 0.05);
    }

    /**
     * Determines if Black (#000000) provides better contrast than White (#FFFFFF).
     * @param {string} color (Hex/RGB background)
     * @returns boolean true if black text is better, false for white.
     */
    static isLight(color) {
         const rgb = ColorUtils.parseToRgb(color);
         if (!rgb) return true; // Fallback
         
         const bgLum = ColorUtils.getRelativeLuminance(rgb);
         const blackLum = 0.0; // Luminance of #000000
         const whiteLum = 1.0; // Luminance of #FFFFFF
         
         const contrastBlack = ColorUtils.getContrastRatio(bgLum, blackLum);
         const contrastWhite = ColorUtils.getContrastRatio(bgLum, whiteLum);

         // Strategy: Prefer White text if it meets the ISO/WCAG "Large Text" minimum (3.0:1).
         // This aligns with the "pill button" aesthetic for mid-tones (e.g. olive/dark yellow).
         if (contrastWhite >= 3.0) {
             return false;
         }

         // Otherwise force Black if White is unreadable (< 3.0).
         return true;
    }
}
