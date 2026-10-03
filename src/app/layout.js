import { Montserrat, Playfair_Display } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://housestudiointeriors.in'),
  title: 'House studio interiors, specialized in PVC & UPVC cupboards',
  description: 'House studio interiors, specialized in PVC & UPVC cupboards. Premium modular kitchens, custom wardrobes, and modern home interior design in Nellore, Andhra Pradesh.',
  keywords: 'House studio interiors, PVC cupboards, UPVC cupboards, PVC interior design, UPVC modular cupboards, best interior designers in Nellore, top interior decorators Andhra Pradesh, house interior design, home interiors, modular kitchen designers, luxury villa design, living room decor, bedroom interiors, custom wardrobes, modern home renovation, turnkey house projects, affordable interior design, premium living room decor, bespoke furniture, customized wardrobes, TV unit design, false ceiling design, Vastu compliant interiors, apartment interior design, independent house design, duplex house interiors, villa renovation, residential interiors, commercial interior design, turnkey interior contractors, 2BHK interior design Nellore, 3BHK interior cost, space planning, contemporary home decor, traditional Indian interiors, minimalist house design, smart home interiors, HouseStudio Interiors',
  openGraph: {
    title: 'House studio interiors, specialized in PVC & UPVC cupboards',
    description: 'House studio interiors, specialized in PVC & UPVC cupboards. Premium modular kitchens, custom wardrobes, and modern home interior design.',
    url: 'https://housestudiointeriors.in',
    siteName: 'HouseStudio Interiors',
    images: [
      {
        url: '/icon-backup.png',
        width: 800,
        height: 600,
        alt: 'House studio interiors, specialized in PVC & UPVC cupboards',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House studio interiors, specialized in PVC & UPVC cupboards',
    description: 'House studio interiors, specialized in PVC & UPVC cupboards. Premium modular kitchens, custom wardrobes, and modern home interior design.',
  },
  verification: {
    google: 'SldWElIQ-tx8DstDxmZIj0oQd8EtuB-1o6StQsjCwAQ',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'House Studio Interiors',
  alternateName: 'House studio interiors, specialized in PVC & UPVC cupboards',
  description: 'House studio interiors, specialized in PVC & UPVC cupboards, modular kitchens, custom wardrobes, and luxury home interiors in Nellore.',
  url: 'https://housestudiointeriors.in',
  telephone: '+917995827590',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vedayapalem',
    addressLocality: 'Nellore',
    addressRegion: 'Andhra Pradesh',
    postalCode: '524004',
    addressCountry: 'IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
