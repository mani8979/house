export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://housestudiointeriors.in/sitemap.xml',
    host: 'https://housestudiointeriors.in',
  };
}
