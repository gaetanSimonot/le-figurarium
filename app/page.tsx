import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import produitsData from '@/data/produits.json';
import figurinesData from '@/data/figurines-generated.json';

export default function Home() {
  const packDebutant = produitsData.packs.find(p => p.id === 'pack-debutant');
  const packsThematiques = produitsData.packs.filter(p => p.type === 'thematique');
  const figurinesPreview = figurinesData.figurines.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/accueil.png"
            alt="Background"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 via-dark-900/40 to-dark-900/60"></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-600/10 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Fichiers STL Premium
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Donnez vie à vos
              <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 text-transparent bg-clip-text">
                créations 3D
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Des fichiers STL premium pour impression 3D résine. Créations exclusives, qualité professionnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pack-debutant"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg shadow-2xl shadow-primary-600/50 hover:shadow-primary-600/70 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Pack Débutant
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>

              <Link
                href="/galerie"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                Voir la Galerie
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{figurinesData.figurines.length}+</div>
                <div className="text-gray-400 text-sm">Figurines</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Premium</div>
                <div className="text-gray-400 text-sm">Qualité</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Pack Débutant Section - STAR PRODUCT */}
      {packDebutant && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-400 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
              {/* Content */}
              <div className="flex flex-col justify-center text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  MEILLEURE OFFRE
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                  Pack Débutant
                </h2>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Tout ce dont vous avez besoin pour démarrer l&apos;impression 3D résine avec un an de figurines exclusives
                </p>

                <div className="space-y-4 mb-10">
                  {packDebutant.contenu.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{packDebutant.prix}</span>
                  </div>
                  <Link
                    href="/pack-debutant"
                    className="group bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center gap-2"
                  >
                    Découvrir l&apos;offre
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Image de l'imprimante */}
              <div className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/impirmante.jpg"
                    alt="Imprimante 3D Mars 4 Ultra"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Mars 4 Ultra
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packs Thématiques Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Packs Thématiques
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Collections saisonnières et thématiques exclusives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packsThematiques.map((pack) => (
            <ProductCard
              key={pack.id}
              {...pack}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/packs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-xl font-bold text-lg hover:bg-dark-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Voir tous les packs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Galerie Preview Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              GALERIE EXCLUSIVE
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
              Nos Créations Premium
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Découvrez nos figurines exclusives créées par des artistes 3D de talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {figurinesPreview.map((figurine) => (
              <Link
                key={figurine.id}
                href={`/galerie/${figurine.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={figurine.mainImage}
                    alt={figurine.nom}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Creator Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold bg-white/90 backdrop-blur-sm text-accent-700 px-3 py-1.5 rounded-full shadow-lg">
                      {figurine.createur}
                    </span>
                  </div>

                  {/* View Button on Hover */}
                  <div className="absolute bottom-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white text-primary-700 px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
                      Voir détails
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
                      {figurine.categorie}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {figurine.nom}
                  </h3>
                  <p className="text-dark-600 text-sm line-clamp-2">{figurine.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Voir toute la galerie
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
