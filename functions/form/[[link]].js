// Cloudflare Pages Function: /form/* — injects OG meta tags for a given form slug
// Mirrors netlify/edge-functions/inject-og.js for Cloudflare Pages runtime.
//
// Required env vars in Cloudflare Pages dashboard:
//   SUPABASE_URL, SUPABASE_ANON_KEY

export async function onRequest({ request, env, params, next }) {
  let response;
  let page;

  try {
    const url = new URL(request.url);
    // [[link]] captures everything after /form/ as an array; first segment is the slug
    const slug = Array.isArray(params.link) ? params.link[0] : params.link;

    if (!slug) return next();

    // 1. Fetch the upstream HTML (the SPA index)
    const newHeaders = new Headers(request.headers);
    newHeaders.delete("Range");
    newHeaders.delete("If-Range");
    const upstreamReq = new Request(request, { headers: newHeaders });

    response = await next(upstreamReq);
    page = await response.text();

    const buildResponse = (body) => {
      const headers = new Headers(response.headers);
      headers.delete("Content-Length");
      headers.delete("Content-Range");
      headers.delete("Accept-Ranges");
      headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
      headers.set("Pragma", "no-cache");
      headers.set("Expires", "0");
      headers.set("X-Edge-Version", "cf-v1");
      return new Response(body, { status: 200, headers });
    };

    // 2. Fetch SEO data
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) return buildResponse(page);

    const rpcResp = await fetch(`${supabaseUrl}/rest/v1/rpc/get_occasion_seo_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ p_link_slug: slug }),
    });

    if (!rpcResp.ok) return buildResponse(page);
    const seoData = await rpcResp.json();
    if (!seoData) return buildResponse(page);

    // 3. Prepare metadata
    const unitTitle = seoData.unit_title;
    const orgTitle = seoData.org_title || "Festapp";
    const title = seoData.title || "Event";

    let description =
      seoData.form_description ||
      seoData.description ||
      "Rychlé a jednoduché založení události, prodej vstupenek a registrace.";
    if (description) {
      description = description.replace(/<[^>]+>/gm, " ").replace(/\s+/g, " ").trim();
    }

    const imagePath = seoData.data?.image || seoData.image;
    let imageUrl;
    if (imagePath && imagePath.startsWith("http")) imageUrl = imagePath;
    else if (imagePath) imageUrl = `https://img.festapp.net/${imagePath}`;
    else imageUrl = `${url.origin}/og_image.jpg`;

    const suffix = unitTitle || orgTitle;
    const fullTitle = `${title} - ${suffix}`;
    let updatedPage = page;

    const replaceMeta = (property, content) => {
      const regex = new RegExp(
        `(<meta[^>]*property=["']${property}["'][^>]*content=["'])([^"']*)(["'][^>]*>)`,
        "gi"
      );
      if (regex.test(updatedPage)) {
        updatedPage = updatedPage.replace(regex, `$1${content}$3`);
      } else {
        const tagRegex = new RegExp(`<meta[^>]*property=["']${property}["'][^>]*>`, "gi");
        updatedPage = updatedPage.replace(tagRegex, (match) =>
          match.replace(/content=["'][^"']*["']/i, `content="${content}"`)
        );
      }
    };

    updatedPage = updatedPage.replace(/<title[^>]*>.*?<\/title>/i, `<title>${fullTitle}</title>`);
    replaceMeta("og:title", fullTitle);
    replaceMeta("twitter:title", fullTitle);

    const descTagRegex = /<meta[^>]*name=["']description["'][^>]*>/i;
    updatedPage = updatedPage.replace(descTagRegex, (match) =>
      match.replace(/content=["'][^"']*["']/i, `content="${description}"`)
    );
    replaceMeta("og:description", description);
    replaceMeta("twitter:description", description);

    replaceMeta("og:image", imageUrl);
    replaceMeta("twitter:image", imageUrl);

    replaceMeta("og:url", url.href);
    replaceMeta("twitter:url", url.href);

    updatedPage = updatedPage.replace(
      /<link[^>]*rel=["']canonical["'][^>]*href=["'][^"']*["'][^>]*>/i,
      `<link rel="canonical" href="${url.href}">`
    );

    return buildResponse(updatedPage);
  } catch (e) {
    console.log("Pages Function error:", e);
    if (page) {
      return new Response(page, { status: 200, headers: response?.headers });
    }
    try {
      return next();
    } catch {
      return new Response("Internal Error (Fail Open Failed)", { status: 500 });
    }
  }
}
