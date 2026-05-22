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
  title: 'HouseStudio Interiors | Premium Home & Villa Interior Design',
  description: 'Transform your house into a dream home with HouseStudio Interiors. We specialize in premium modern home interiors, modular kitchens, bespoke wardrobes, living room designs, and luxury villa renovations in Nellore, Andhra Pradesh.',
  keywords: 'house interior design, home interiors, modular kitchen, luxury villa design, living room decor, bedroom interiors, custom wardrobes, modern home renovation, Nellore interior designers, Vedayapalem, Andhra Pradesh, residential interiors, turnkey house projects',
  openGraph: {
    title: 'HouseStudio Interiors | Premium Home & Villa Interior Design',
    description: 'Transform your house into a dream home. Experts in modular kitchens, living spaces, and luxury home interiors.',
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
    icon: '/house-favicon.ico?v=2',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
