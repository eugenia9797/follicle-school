// esheen.skin/acne-game/ → the 擠痘木頭人 game, served from its own Cloudflare Pages project
// (repo eugenia9797/Acne_game, deployed to acne-game.pages.dev). Game updates go live there
// without touching this site. Responses are cached at the edge for 60 seconds.
const GAME_ORIGIN = 'https://acne-game.pages.dev';

export async function onRequest({ request, params }) {
  const url = new URL(request.url);
  if (url.pathname === '/acne-game') {
    return Response.redirect(`${url.origin}/acne-game/${url.search}`, 301);
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const rest = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const upstream = await fetch(`${GAME_ORIGIN}/${rest}`, {
    method: request.method,
    headers: { Accept: request.headers.get('Accept') || '*/*' },
    cf: { cacheEverything: true, cacheTtl: 60 },
  });
  const res = new Response(upstream.body, upstream);
  res.headers.set('Cache-Control', 'public, max-age=60');
  res.headers.delete('x-robots-tag');
  return res;
}
