/**
 * Data files hold prose as plain strings. Wrap a phrase in **double asterisks**
 * to set it in bold; everything else is escaped the same way Astro escapes text.
 * Use it through `set:html={inlineBold(text)}`.
 */
export function inlineBold(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
