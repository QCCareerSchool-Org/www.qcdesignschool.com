import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/siteUrl';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: [ 'Baiduspider', 'Yandex' ],
      disallow: '/',
    },
    {
      userAgent: '*',
      disallow: [
        '/wp-admin/',
        '/blog/wp-admin/',
        '/*?*playAgain=',
      ],
      allow: '/blog/wp-admin/admin-ajax.php',
      crawlDelay: 10,
      other: { 'Content-Signal': 'search=yes, ai-input=yes, ai-train=yes' },
    },
  ],
  sitemap: `${siteUrl}/sitemap_index.xml`,
});

export default robots;
