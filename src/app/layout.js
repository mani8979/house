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
  metadataBase: new URL('https://www.housestudiointeriors.in'),
  title: 'House studio interiors, specialized in PVC & UPVC cupboards',
  description: 'House Studio Interiors specializes in premium PVC & UPVC cupboards, modular kitchens, custom wardrobes, and luxury home interior design in Nellore, Andhra Pradesh.',
  keywords: 'House studio interiors, PVC cupboards, UPVC cupboards, PVC interior design, UPVC modular cupboards, best interior designers in Nellore, top interior decorators Andhra Pradesh, house interior design, home interiors, modular kitchen designers, luxury villa design, living room decor, bedroom interiors, custom wardrobes, modern home renovation, turnkey house projects, affordable interior design, premium living room decor, bespoke furniture, customized wardrobes, TV unit design, false ceiling design, Vastu compliant interiors, apartment interior design, independent house design, duplex house interiors, villa renovation, residential interiors, commercial interior design, turnkey interior contractors, 2BHK interior design Nellore, 3BHK interior cost, space planning, contemporary home decor, traditional Indian interiors, minimalist house design, smart home interiors, HouseStudio Interiors',
  alternates: {
    canonical: 'https://www.housestudiointeriors.in/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'House studio interiors, specialized in PVC & UPVC cupboards',
    description: 'House Studio Interiors specializes in premium PVC & UPVC cupboards, modular kitchens, custom wardrobes, and luxury home interior design in Nellore, Andhra Pradesh.',
    url: 'https://www.housestudiointeriors.in/',
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
    description: 'House Studio Interiors specializes in premium PVC & UPVC cupboards, modular kitchens, custom wardrobes, and luxury home interior design in Nellore, Andhra Pradesh.',
    images: ['/icon-backup.png'],
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
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.housestudiointeriors.in/#website',
      'url': 'https://www.housestudiointeriors.in/',
      'name': 'House Studio Interiors',
      'alternateName': 'House studio interiors, specialized in PVC & UPVC cupboards',
      'description': 'House Studio Interiors specializes in premium PVC & UPVC cupboards, modular kitchens, and custom interior design in Nellore.',
      'inLanguage': 'en-IN'
    },
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://www.housestudiointeriors.in/#organization',
      'name': 'House Studio Interiors',
      'alternateName': 'House studio interiors, specialized in PVC & UPVC cupboards',
      'description': 'House Studio Interiors specializes in premium PVC & UPVC cupboards, modular kitchens, custom wardrobes, and luxury home interior design in Nellore, Andhra Pradesh.',
      'url': 'https://www.housestudiointeriors.in/',
      'logo': 'https://www.housestudiointeriors.in/assets/images/logo.jpeg',
      'image': 'https://www.housestudiointeriors.in/icon-backup.png',
      'telephone': '+917995827590',
      'email': 'housestudiointeriors@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Vedayapalem',
        'addressLocality': 'Nellore',
        'addressRegion': 'Andhra Pradesh',
        'postalCode': '524004',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 14.4154537,
        'longitude': 79.9565417
      },
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Nellore'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Andhra Pradesh'
        }
      ],
      'sameAs': [
        'https://wa.me/917995827590',
        'https://www.instagram.com/housestudio_interiors',
        'https://www.facebook.com/share/1B7a8y9EUH/'
      ],
      'priceRange': '₹₹'
    }
  ]
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
