/**
 * @file automation/deploy_from_conf.js
 * @description Automates the Netlify deployment process for multi-tenant setups.
 * 
 * Capabilities:
 * 1. Reads target configuration from 'project.conf' (Domain, Env Vars).
 * 2. Automatically identifies and links the correct Netlify Site ID based on the Domain.
 * 3. Injects Supabase credentials (SUPABASE_URL, SUPABASE_ANON_KEY) into the Netlify Site environment.
 * 4. Temporarily patches 'netlify.toml' to allow a "Web Client Only" build (skipping Flutter) for local deployment.
 * 5. Triggers a Production Deploy.
 * 
 * Usage: Usually called via the wrapper `automation/netlify_deploy_deno_vars.sh`.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_CONF = path.join(__dirname, 'project.conf');
const NETLIFY_BIN = path.join(__dirname, '../web_client/node_modules/.bin/netlify');

function run(cmd, options = {}) {
    const effectiveCmd = cmd.startsWith('netlify') ?  cmd.replace('netlify', NETLIFY_BIN) : cmd;
    // Merge options with defaults
    const execOptions = { 
        stdio: 'pipe', 
        encoding: 'utf-8', 
        cwd: path.join(__dirname, '..'),
        ...options 
    };
    return execSync(effectiveCmd, execOptions);
}

function parseConf() {
    if (!fs.existsSync(PROJECT_CONF)) {
        throw new Error("project.conf not found!");
    }
    const content = fs.readFileSync(PROJECT_CONF, 'utf-8');
    const config = {};
    content.split('\n').forEach(line => {
        const [key, ...rest] = line.split('=');
        if (key && rest.length > 0) {
            config[key.trim()] = rest.join('=').trim();
        }
    });
    return config;
}

async function main() {
    console.log("🚀 Starting Deployment via project.conf...");
    
    // 1. Read Config
    const config = parseConf();
    const domain = config['DOMAIN'];
    const sbUrl = config['SUPABASE_URL'];
    const sbKey = config['SUPABASE_ANON_KEY'];
    const orgId = config['ORGANIZATION_ID']; // Added for Edge Function parity

    if (!domain || !sbUrl || !sbKey) {
        console.error("❌ Missing required fields in project.conf (DOMAIN, SUPABASE_URL, SUPABASE_ANON_KEY)");
        process.exit(1);
    }
    
    console.log(`📋 Target Domain: ${domain}`);
    console.log(`🔌 DB URL: ${sbUrl}`);

    // 2. Find Site ID
    console.log("🔍 Finding Netlify Site...");
    const sitesJson = run('netlify sites:list --json');
    const sites = JSON.parse(sitesJson);
    
    // Match either custom_domain or part of url
    const cleanDomain = domain.replace(/^https?:\/\//, '');
    
    const targetSite = sites.find(s => {
        if (s.custom_domain === cleanDomain) return true;
        if (s.url && s.url.includes(cleanDomain)) return true;
        if (s.name === cleanDomain) return true;
        return false;
    });

    if (!targetSite) {
        console.error(`❌ Could not find a Netlify site matching domain: ${domain}`);
        process.exit(1);
    }

    console.log(`✅ Found Site: ${targetSite.name} (${targetSite.id})`);

    // 3. Link Site
    try {
        console.log("🔗 Links...");
        try { run('netlify unlink'); } catch(e) {}
        run(`netlify link --id ${targetSite.id}`);
    } catch (e) {
        console.error("❌ Failed to link:", e.message);
        process.exit(1);
    }

    // 4. Set Env Vars
    console.log("🔑 Setting Environment Variables...");
    
    // Helper to pipe 'y' to command
    const setEnv = (key, val) => {
        try {
            // Check if input option works with execSync in this environment
            // It sends to stdin
            run(`netlify env:set ${key} ${val}`, { input: 'y\n' });
        } catch (e) {
            console.log(`Warning setting ${key}: ${e.message}`);
        }
    };

    setEnv('SUPABASE_URL', sbUrl);
    setEnv('SUPABASE_ANON_KEY', sbKey);
    if (orgId) {
        setEnv('ORGANIZATION_ID', orgId);
    }

    // 5. Build/Deploy
    console.log("🛠  Configuring local build...");
    const tomlPath = path.join(__dirname, '../netlify.toml');
    const originalToml = fs.readFileSync(tomlPath, 'utf-8');
    const patchedToml = originalToml.replace(
        'command = "./automation/ci_build.sh"', 
        'command = "cd web_client && npm run build && cp -r dist/* ../build/web/"'
    );
    fs.writeFileSync(tomlPath, patchedToml);

    try {
        console.log("🚀 Deploying...");
        // Stream output to console for this one
        run(`netlify deploy --prod`, { stdio: 'inherit' });
    } catch (e) {
         console.error("❌ Deploy failed:", e.message);
    } finally {
        // Restore TOML
        fs.writeFileSync(tomlPath, originalToml);
        console.log("🧹 Restored configuration.");
    }
    
    console.log("✨ Done.");
}

main();
