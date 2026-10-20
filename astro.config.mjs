import { defineConfig } from 'astro/config';

// While the site is only on damianeire.github.io/damianevans.net it lives under a
// sub-path; the deploy workflow sets SITE_BASE for that. Once damianevans.net
// points at GitHub Pages, SITE_BASE is removed and the site lives at the root.
const base = process.env.SITE_BASE || '/';

// Root-relative links written in Markdown ("/media/x.jpg", "/music/"), including
// ones inside raw HTML, get the base prepended, so the same content works in both places.
const prefix = base.replace(/\/$/, '');
const fix = (v) => (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? prefix + v : v);
function prefixBase() {
  const walk = (node) => {
    if (node.type === 'element') {
      for (const key of ['href', 'src']) if (node.properties?.[key]) node.properties[key] = fix(node.properties[key]);
    } else if (node.type === 'raw') {
      node.value = node.value.replace(/\b(href|src)="(\/(?!\/)[^"]*)"/g, (_, attr, url) => `${attr}="${prefix}${url}"`);
    }
    node.children?.forEach(walk);
  };
  return () => (tree) => { if (prefix) walk(tree); };
}

// Old WordPress addresses that people may have linked to or bookmarked.
const oldUrls = {
  '/bio': '/about/',
  '/recordings': '/music/',
  '/online-portfolio': '/music/',
  '/phd-download-page': '/writing/phd/',
  '/phd-recital': '/writing/phd/',
  '/aic-new-music-journal-article': '/writing/#rum',
  '/whats-the-connection-between-the-1916-uprising-and-jazz': '/writing/ireland-jazz-1919/',
  '/getting-productive-with-scrivener-zotero-and-alfred-zothero': '/writing/scrivener-zotero/',
  '/documenting-jazz-17-19-january-2019': '/writing/documenting-jazz/',
  '/documenting-jazz-2020': '/writing/documenting-jazz/',
  '/documenting-jazz-2021': '/writing/documenting-jazz/',
  '/jazzstudiesreadinggroup': '/writing/jazz-studies-reading-group/',
  '/the-galway-jazz-club-2004-2006': '/galway-jazz-club/',
  '/galway-jazz-club-newsletter-volume-i-issue-14': '/galway-jazz-club/#newsletter',
  '/galway-jazz-festival-programme-2005': '/galway-jazz-club/#festival',
  '/how-and-where-to-promote-a-jazz-gig-in-dublin': '/random/promoting-a-jazz-gig-in-dublin/',
  '/choirs-in-dublin': '/random/mapping-choirs-in-dublin/',
  '/a-chess-game': '/random/chess-game/',
  '/irish-chess-union-all-play-all-2020-1200-1700-game-7': '/random/chess-game/',
};

export default defineConfig({
  site: 'https://damianevans.net',
  base,
  trailingSlash: 'ignore',
  markdown: {
    rehypePlugins: [prefixBase()],
    smartypants: true,
  },
  redirects: Object.fromEntries(Object.entries(oldUrls).map(([from, to]) => [from, fix(to)])),
});
