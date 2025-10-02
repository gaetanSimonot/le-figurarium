import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebsiteJsonLd, OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Le Figurarium - Fichiers STL Premium pour Impression 3D Résine",
    template: "%s | Le Figurarium",
  },
  description: "Boutique de fichiers STL premium pour impression 3D résine. Découvrez nos packs débutant, collections thématiques et galerie exclusive Alkemia. Créations d'artistes 3D de talent.",
  keywords: "STL, fichiers STL, impression 3D résine, figurines 3D, modèles 3D, Mars 4 Ultra, Alkemia Art, Bulkamancer, Gruumpy, Nomnom",
  authors: [{ name: "Le Figurarium" }],
  creator: "Le Figurarium",
  publisher: "Le Figurarium",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://lefigurarium.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lefigurarium.com',
    siteName: 'Le Figurarium',
    title: 'Le Figurarium - Fichiers STL Premium pour Impression 3D',
    description: 'Boutique de fichiers STL premium pour impression 3D résine. Packs débutant, collections thématiques et galerie exclusive.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Figurarium - Fichiers STL Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Figurarium - Fichiers STL Premium',
    description: 'Boutique de fichiers STL premium pour impression 3D résine',
    images: ['/images/og-image.jpg'],
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
  verification: {
    // Ajouter les clés de vérification quand disponibles
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans bg-white`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
