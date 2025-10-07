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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Donne vie à ton
              <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 text-transparent bg-clip-text">
                imaginaire
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Apprends, imprime et expose tes propres figurines grâce à un parcours créatif clé en main.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pack-debutant"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg shadow-2xl shadow-primary-600/50 hover:shadow-primary-600/70 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🧩 Découvrir le Pack Débutant
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
                🎨 Explorer les créations Alkemia
              </Link>
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

      {/* Produits Phares Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Ton parcours créatif commence ici
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Trois chemins pour transformer ton imaginaire en réalité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack Débutant */}
          <Link
            href="/pack-debutant"
            className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">🧩</div>
            <h3 className="text-2xl font-display font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
              Pack Débutant
            </h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Tout pour te lancer : imprimante, résine, formation et accompagnement.
            </p>
            <div className="flex items-center gap-2 text-primary-600 font-bold group-hover:gap-3 transition-all">
              Découvrir
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* Collections */}
          <Link
            href="/packs"
            className="group bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-display font-bold text-dark-900 mb-4 group-hover:text-accent-600 transition-colors">
              Collections Créatives
            </h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Choisis un univers : Chibi, Halloween, Fantasy…
            </p>
            <div className="flex items-center gap-2 text-accent-600 font-bold group-hover:gap-3 transition-all">
              Explorer
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* Galerie */}
          <Link
            href="/galerie"
            className="group bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-display font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
              Galerie Alkemia
            </h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Découvre plus de {figurinesData.figurines.length} figurines prêtes à imprimer.
            </p>
            <div className="flex items-center gap-2 text-primary-600 font-bold group-hover:gap-3 transition-all">
              Découvrir
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
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

      {/* Storytelling Section */}
      <section className="bg-gradient-to-br from-gray-900 via-dark-900 to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-600/20 rounded-full filter blur-3xl"></div>

            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed relative z-10">
              <span className="block mb-6">
                <span className="text-primary-400 font-display font-bold">Le Figurarium</span>, c&apos;est un atelier moderne où la technologie devient art.
              </span>
              <span className="block mb-6">
                Ici, on apprend à créer ses figurines, à comprendre la matière,
              </span>
              <span className="block text-accent-300 font-semibold">
                et à transformer l&apos;imagination en réalité.
              </span>
            </p>
          </div>
        </div>
      </section>

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

      {/* Discord Community Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-white/90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Rejoins la communauté
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Besoin d&apos;aide, de conseils ou d&apos;inspiration ?<br />
            Rejoins la communauté du Figurarium sur Discord.
          </p>

          <Link
            href="https://discord.gg/votrelien"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Rejoindre le Discord
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10">
            <a href="https://instagram.com/votre-instagram" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@votre-tiktok" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
