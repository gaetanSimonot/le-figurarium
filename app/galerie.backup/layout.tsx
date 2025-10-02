import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie STL Premium - Figurines 3D Exclusives',
  description: 'Découvrez notre collection de fichiers STL premium pour impression 3D résine. Créations exclusives par Alkemia Art, Bulkamancer, Gruumpy et Nomnom.',
  keywords: 'galerie STL, figurines 3D, fichiers STL résine, modèles 3D premium, Alkemia Art',
  openGraph: {
    title: 'Galerie STL Premium - Figurines 3D Exclusives',
    description: 'Collection exclusive de fichiers STL pour impression 3D résine',
    type: 'website',
    url: 'https://lefigurarium.com/galerie',
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
