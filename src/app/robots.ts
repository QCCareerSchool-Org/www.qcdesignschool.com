import type { MetadataRoute } from 'next';

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
  sitemap: 'https://www.qcdesignschool.com/sitemap_index.xml',
});

export default robots;
