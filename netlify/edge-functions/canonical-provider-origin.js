const CANONICAL_ORIGINS = new Map([
  ['festivalslunovrat.netlify.app', 'https://app.festivalslunovrat.cz'],
]);

const RETIREMENT_WORKER_PATHS = new Set([
  '/festapp_service_worker.js',
  '/flutter_service_worker.js',
]);

export default function canonicalProviderOrigin(request, context) {
  const url = new URL(request.url);
  const canonicalOrigin = CANONICAL_ORIGINS.get(url.hostname);
  if (!canonicalOrigin) return context.next();

  // Let the host-specific Netlify rewrites replace cached application and
  // push workers before all ordinary navigation leaves the provider origin.
  if (RETIREMENT_WORKER_PATHS.has(url.pathname) || url.pathname.startsWith('/push/')) {
    return context.next();
  }

  return Response.redirect(canonicalOrigin + url.pathname + url.search, 301);
}

export const config = { path: '/*' };
