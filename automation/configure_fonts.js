
const fs = require('fs');
const path = require('path');

// Arguments: [node, script, projectRoot, fontFamilyBase]
const projectRoot = process.argv[2];
const fontFamilyBase = process.argv[3] || 'Futura'; // Default if not set

if (!projectRoot) {
    console.error("Usage: node configure_fonts.js <projectRoot> [fontFamilyBase]");
    process.exit(1);
}

const fontSourceDir = path.join(projectRoot, 'automation/fonts');
const flutterFontDir = path.join(projectRoot, 'fonts');
const webFontDir = path.join(projectRoot, 'web_client/src/assets/fonts');
const pubspecPath = path.join(projectRoot, 'pubspec.yaml');
const webThemePath = path.join(projectRoot, 'web_client/src/theme_config.css');

// Ensure source exists
if (!fs.existsSync(fontSourceDir)) {
    console.error(`Font source directory not found: ${fontSourceDir}`);
    process.exit(0); // Not an error, just nothing to do
}

// Ensure dests exist
if (!fs.existsSync(flutterFontDir)) fs.mkdirSync(flutterFontDir, { recursive: true });
if (!fs.existsSync(webFontDir)) fs.mkdirSync(webFontDir, { recursive: true });

// 1. Scan and Classify Fonts
const fonts = [];
const files = fs.readdirSync(fontSourceDir);

console.log(`Scanning fonts in ${fontSourceDir}...`);

files.forEach(file => {
    if (!file.match(/\.(ttf|otf)$/i)) return;

    const srcPath = path.join(fontSourceDir, file);
    let weight = 400;
    let style = 'normal';
    const lowerName = file.toLowerCase();

    // FILE: automation/configure_fonts.js

    // Heuristic for Weight (Restored for CSS differentiation)
    if (lowerName.includes('bold') || lowerName.includes('700')) weight = 700;
    else if (lowerName.includes('medium') || lowerName.includes('500')) weight = 500;
    else if (lowerName.includes('light') || lowerName.includes('300')) weight = 300;
    
    // Heuristic for Style
    if (lowerName.includes('italic')) style = 'italic';

    // File copying prep
    // Web handles filenames without spaces better generally, but we can match flutter for strictness or simplify.
    // Previous logic removed spaces for web. Let's stick to that for safety in CSS urls.
    const webFilename = file.replace(/\s+/g, '');
    
    fonts.push({
        appFilename: file, // Keep original for Flutter
        webFilename: webFilename,
        weight: weight, // This will be 400 for Medium now
        style: style,
        srcPath: srcPath
    });
});

if (fonts.length === 0) {
    console.log("No fonts found. Exiting.");
    process.exit(0);
}

// 2. Clear and Copy Files
console.log(`Found ${fonts.length} fonts. Syncing...`);

fonts.forEach(font => {
    // Flutter Copy
    fs.copyFileSync(font.srcPath, path.join(flutterFontDir, font.appFilename));
    // Web Copy
    fs.copyFileSync(font.srcPath, path.join(webFontDir, font.webFilename));
});


// 3. Update pubspec.yaml
console.log("Updating pubspec.yaml...");
if (fs.existsSync(pubspecPath)) {
    let pubspec = fs.readFileSync(pubspecPath, 'utf8');
    
    let newFontSection = `  fonts:\n    - family: ${fontFamilyBase}\n      fonts:\n`;
    
    fonts.forEach(font => {
        newFontSection += `        - asset: fonts/${font.appFilename}\n`;
        // REMOVED explicit weight generation for Pubspec
        // if (font.weight !== 400) newFontSection += `          weight: ${font.weight}\n`;
        if (font.style !== 'normal') newFontSection += `          style: ${font.style}\n`;
    });
    
    const fontsRegex = /  fonts:\n(\s{4}- family:[\s\S]*?)(?=\n\s{2}[a-z]|\nflutter:|$)/;
    
    if (pubspec.match(fontsRegex)) {
        pubspec = pubspec.replace(fontsRegex, newFontSection.trimEnd()); // trimEnd to avoid double newlines
        fs.writeFileSync(pubspecPath, pubspec);
        console.log("✔ pubspec.yaml updated.");
    } else {
        console.warn("⚠ Could not find '  fonts:' section in pubspec.yaml to replace. Please check indentation.");
    }
}

// 4. Update theme_config.css
console.log("Updating theme_config.css...");
if (fs.existsSync(webThemePath)) {
    let css = fs.readFileSync(webThemePath, 'utf8');
    
    let newCssRules = "";
    fonts.forEach(font => {
        // We must map format('truetype') or 'opentype'.
        const ext = path.extname(font.webFilename).toLowerCase();
        const format = ext === '.otf' ? 'opentype' : 'truetype';
        
        newCssRules += `@font-face {\n`;
        newCssRules += `    font-family: '${fontFamilyBase}';\n`;
        newCssRules += `    src: url('./assets/fonts/${font.webFilename}') format('${format}');\n`;
        // Keep weight in CSS only if it differs from normal? 
        // User said "at other places" too, but CSS needs differentiation.
        // However, Medium (500) was the one complained about. 
        // Since we mapped Medium -> 400 above, it will output "font-weight: 400" (or nothing).
        newCssRules += `    font-weight: ${font.weight};\n`; 
        newCssRules += `    font-style: ${font.style};\n`;
        newCssRules += `}\n\n`;
    });

    // Replace all existing @font-face blocks
    // This regex matches any @font-face { ... } block globally
    const fontFaceRegex = /@font-face\s?\{[^}]+\}/g;
    
    // If we have existing rules, we replace the whole block(s) with our new set
    // We want to insert our new rules at the top or replace existing ones.
    
    if (css.match(fontFaceRegex)) {
        // Remove old ones
        css = css.replace(fontFaceRegex, '');
        // Trim leading whitespace/newlines from replacements
        css = css.replace(/^\s+/g, ''); 
        // Prepend new rules
        css = newCssRules + css;
    } else {
        // Just prepend
        css = newCssRules + css;
    }
    
    fs.writeFileSync(webThemePath, css);
    console.log("✔ theme_config.css updated.");
}

console.log("Dynamic Font Configuration Complete.");
