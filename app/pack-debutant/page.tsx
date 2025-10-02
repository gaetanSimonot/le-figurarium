import produitsData from '@/data/produits.json';
import type { Metadata } from 'next';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Pack Débutant - Imprimante 3D + 36 STL Premium | Le Figurarium',
  description: 'Kit complet pour débutants : Imprimante Mars 4 Ultra + 36 figurines STL exclusives + résine + guide. Tout pour commencer l\'impression 3D résine.',
  keywords: 'pack débutant impression 3D, Mars 4 Ultra, STL résine, kit impression 3D, figurines STL',
  openGraph: {
    title: 'Pack Débutant - Kit Complet Impression 3D Résine',
    description: 'Imprimante Mars 4 Ultra + 36 STL premium + résine + guide complet. Tout pour démarrer l\'impression 3D.',
    type: 'website',
    url: 'https://lefigurarium.com/pack-debutant',
    images: [
      {
        url: '/images/pack-debutant.jpg',
        width: 1200,
        height: 630,
        alt: 'Pack Débutant Impression 3D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pack Débutant - Kit Complet Impression 3D Résine',
    description: 'Imprimante Mars 4 Ultra + 36 STL premium + résine + guide complet',
    images: ['/images/pack-debutant.jpg'],
  },
};

export default function PackDebutantPage() {
  const pack = produitsData.packs.find(p => p.id === 'pack-debutant');

  if (!pack) {
    return <div>Pack introuvable</div>;
  }

  return (
    <>
      <ProductJsonLd
        name={pack.nom}
        description={pack.description}
        price={pack.prix}
        image={pack.image}
        url="/pack-debutant"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', item: '/' },
          { name: 'Pack Débutant', item: '/pack-debutant' },
        ]}
      />
      <div className="bg-gradient-to-b from-white to-dark-50 py-16">
        <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-dark-900 mb-4">
              {pack.nom}
            </h1>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              {pack.description}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="animate-slide-up">
              <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-dark-100">
                <Image
                  src="/images/impirmante.jpg"
                  alt="Imprimante 3D Mars 4 Ultra"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
                    Pack Débutant
                  </span>
                  <div className="text-5xl font-bold text-primary-600 mb-6">
                    {pack.prix}
                  </div>
                </div>

                <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
                  Ce pack contient :
                </h2>
                <ul className="space-y-4 mb-8">
                  {pack.contenu.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-dark-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pack.stripeLink}
                  className="block w-full bg-primary-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                  Commander maintenant
                </a>

                <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                  <p className="text-sm text-dark-600 text-center">
                    Paiement sécurisé via Stripe • Livraison immédiate des fichiers numériques
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-dark-900 mb-2">
                36 STL sur 12 mois
              </h3>
              <p className="text-dark-600">
                Recevez 3 nouvelles figurines exclusives chaque mois pendant un an
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-dark-900 mb-2">
                Matériel inclus
              </h3>
              <p className="text-dark-600">
                Imprimante 3D résine et résine premium pour commencer immédiatement
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-dark-900 mb-2">
                Support prioritaire
              </h3>
              <p className="text-dark-600">
                Assistance technique dédiée pour vous accompagner dans vos impressions
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
