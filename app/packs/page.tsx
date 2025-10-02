import ProductCard from '@/components/ProductCard';
import produitsData from '@/data/produits.json';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Packs STL Thématiques - Collections Exclusives | Le Figurarium',
  description: 'Découvrez nos packs thématiques : Halloween, Noël, Chibi et plus. Collections de fichiers STL premium pour impression 3D résine.',
  keywords: 'packs STL, collections thématiques, pack halloween, pack noël, STL résine',
  openGraph: {
    title: 'Packs STL Thématiques - Collections Exclusives',
    description: 'Collections saisonnières et thématiques de fichiers STL premium',
    type: 'website',
    url: 'https://lefigurarium.com/packs',
  },
};

export default function PacksPage() {
  const allPacks = produitsData.packs;

  return (
    <div className="bg-gradient-to-b from-white to-dark-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-dark-900 mb-4">
            Nos Packs
          </h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Découvrez tous nos packs de fichiers STL, du pack débutant complet aux collections thématiques saisonnières
          </p>
        </div>

        {/* Pack Débutant Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-8">
            Pack Débutant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPacks
              .filter(pack => pack.type === 'starter')
              .map(pack => (
                <ProductCard
                  key={pack.id}
                  {...pack}
                  linkUrl="/pack-debutant"
                />
              ))}
          </div>
        </section>

        {/* Packs Thématiques Section */}
        <section>
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-8">
            Packs Thématiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPacks
              .filter(pack => pack.type === 'thematique')
              .map(pack => (
                <ProductCard
                  key={pack.id}
                  {...pack}
                />
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-center text-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Explorez notre galerie complète de figurines Alkemia disponibles individuellement
          </p>
          <Link
            href="/galerie"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-dark-50 transition-colors"
          >
            Voir la Galerie
          </Link>
        </div>
      </div>
    </div>
  );
}
