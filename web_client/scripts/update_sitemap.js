import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

try {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const today = new Date().toISOString().split('T')[0];
  
  // Regex to match <lastmod>YYYY-MM-DD</lastmod>
  const regex = /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g;
  
  if (regex.test(sitemap)) {
    sitemap = sitemap.replace(regex, `<lastmod>${today}</lastmod>`);
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`Successfully updated sitemap.xml lastmod to ${today}`);
  } else {
    console.warn('Warning: No <lastmod> tag found in sitemap.xml to update.');
  }
} catch (error) {
  console.error('Error updating sitemap.xml:', error);
  process.exit(1);
}
