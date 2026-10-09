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
    sitemap: 'https://www.housestudiointeriors.in/sitemap.xml',
    host: 'https://www.housestudiointeriors.in',
  };
}
