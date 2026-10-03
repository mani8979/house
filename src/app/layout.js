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
  title: 'HouseStudio Interiors | Premium Home & Villa Interior Design',
  description: 'House Studio Interiors, specialized in PVC & UPVC cupboards — see it, add it, build it, push it. Premium home & villa interior design in Nellore, Andhra Pradesh.',
  keywords: 'best interior designers in Nellore, top interior decorators Andhra Pradesh, house interior design, home interiors, modular kitchen designers, luxury villa design, living room decor, bedroom interiors, custom wardrobes, modern home renovation, turnkey house projects, affordable interior design, premium living room decor, bespoke furniture, customized wardrobes, TV unit design, false ceiling design, Vastu compliant interiors, apartment interior design, independent house design, duplex house interiors, villa renovation, residential interiors, commercial interior design, turnkey interior contractors, 2BHK interior design Nellore, 3BHK interior cost, space planning, contemporary home decor, traditional Indian interiors, minimalist house design, smart home interiors, HouseStudio Interiors',
  openGraph: {
    title: 'HouseStudio Interiors | Premium Home & Villa Interior Design',
    description: 'House Studio Interiors, specialized in PVC & UPVC cupboards — see it, add it, build it, push it. Premium home & villa interior design.',
    url: 'https://housestudiointeriors.in',
    siteName: 'HouseStudio Interiors',
    images: [
      {
        url: '/icon-backup.png',
        width: 800,
        height: 600,
        alt: 'HouseStudio Interiors - Premium Home Design',
      },
    ],
    locale: 'en_IN',
    type: 'website',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
