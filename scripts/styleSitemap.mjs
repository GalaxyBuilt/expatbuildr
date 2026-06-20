import fs from 'fs';
import path from 'path';

const DIST_DIR = './dist';
const XSL_PATH = '/sitemap-style.xsl';

async function styleSitemaps() {
    console.log('✨ Institutional Branding: Styling Sitemaps...');

    try {
        const files = fs.readdirSync(DIST_DIR);
        const sitemaps = files.filter(f => f.endsWith('.xml') && f.startsWith('sitemap'));

        for (const file of sitemaps) {
            const filePath = path.join(DIST_DIR, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Inject the XSL stylesheet reference after the XML declaration
            const xslLine = `<?xml-stylesheet type="text/xsl" href="${XSL_PATH}"?>`;
            
            if (!content.includes(xslLine)) {
                content = content.replace('?>', `?>\n${xslLine}`);
                fs.writeFileSync(filePath, content);
                console.log(`✅ Indexed: ${file}`);
            }
        }
    } catch (error) {
        console.error('❌ Style Injection Failed:', error);
    }
}

styleSitemaps();
