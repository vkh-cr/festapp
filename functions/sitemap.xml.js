// Cloudflare Pages Function: /sitemap.xml
// Mirrors netlify/edge-functions/sitemap.js but uses Cloudflare API
// (env, not Deno.env; onRequest, not default export).
//
// Required env vars in Cloudflare Pages dashboard:
//   SUPABASE_URL, SUPABASE_ANON_KEY, ORGANIZATION_ID

export async function onRequest({ request, env }) {
  const defaultSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL(request.url).origin}/</loc>
    <priority>1.0</priority>
  </url>
</urlset>`;

  const fallback = (body) =>
    new Response(body, { headers: { "Content-Type": "application/xml" } });

  try {
    const url = new URL(request.url);
    const baseUrl = url.origin;

    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;
    const orgId = env.ORGANIZATION_ID || 1;

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Missing Supabase credentials, falling back to static sitemap.");
      return fallback(defaultSitemap);
    }

    const rpcResp = await fetch(`${supabaseUrl}/rest/v1/rpc/get_available_occasions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ p_organization_id: orgId, p_unit_id: null }),
    });

    if (!rpcResp.ok) {
      console.error(`Supabase RPC Error: ${rpcResp.status} ${rpcResp.statusText}`);
      return fallback(defaultSitemap);
    }

    const data = await rpcResp.json();
    let occasions = [];
    if (Array.isArray(data)) occasions = data;
    else if (data && Array.isArray(data.occasions)) occasions = data.occasions;
    else if (data && data.data && Array.isArray(data.data.occasions)) occasions = data.data.occasions;

    if (occasions.length === 0) return fallback(defaultSitemap);

    const today = new Date().toISOString().split("T")[0];
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>1.0</priority>\n  </url>\n`;

    occasions.forEach((occ) => {
      if (occ && occ.link) {
        const cleanLink = occ.link.trim();
        if (cleanLink) {
          xml += `  <url>\n    <loc>${baseUrl}/form/${cleanLink}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n  </url>\n`;
        }
      }
    });

    xml += `</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    });
  } catch (e) {
    console.error("Sitemap Generation Error:", e);
    return fallback(defaultSitemap);
  }
}
