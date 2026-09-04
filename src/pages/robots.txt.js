export function GET({ site }) {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /coming-soon/',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site)}`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
