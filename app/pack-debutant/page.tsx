import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pack Débutant - Le Figurarium',
  description: 'Ton imprimante + 1 an d\'aventure créative. Apprends en imprimant dès le jour 1.',
};

export default function PackDebutantPage() {
  return (
    <div className="min-h-screen">
      {/* HERO Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-600/10 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                PRODUIT PHARE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Le Pack Débutant
                <span className="block text-primary-400 mt-2">
                  Ton imprimante + 1 an d&apos;aventure créative
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Apprends en imprimant. Pas de formation théorique de 6 mois.<br />
                <span className="font-semibold text-accent-400">Tu commences le jour même.</span>
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-white">[Prix]</span>
                <span className="text-xl text-gray-400">€</span>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105"
              >
                Commander maintenant
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/impirmante.jpg"
                  alt="Saturn 3 Ultra avec figurines"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover"
                  unoptimized
                  priority
                />
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

      {/* CE QUE TU REÇOIS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Ce que tu reçois
          </h2>
          <p className="text-xl text-dark-600">
            Tout pour démarrer, physique et numérique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Physique */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-dark-900">Dans le colis</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">Saturn 3 Ultra (Elegoo)</span>
                  <p className="text-dark-600 text-sm mt-1">Imprimante résine haute précision</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">1L résine Elegoo</span>
                  <p className="text-dark-600 text-sm mt-1">Pour démarrer immédiatement</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">Guide démarrage rapide</span>
                  <p className="text-dark-600 text-sm mt-1">Tout ce qu&apos;il faut savoir pour commencer</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Numérique */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-dark-900">Accès immédiat</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">36 STL exclusifs Alkemia</span>
                  <p className="text-dark-600 text-sm mt-1">3 nouvelles figurines chaque mois pendant 12 mois</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">Discord communauté privée</span>
                  <p className="text-dark-600 text-sm mt-1">Entraide, conseils, galerie</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">Base de connaissances</span>
                  <p className="text-dark-600 text-sm mt-1">Articles + vidéos tutoriels</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold text-dark-900">Sessions live mensuelles</span>
                  <p className="text-dark-600 text-sm mt-1">Sculpt en direct + Q&A</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
              Comment ça marche
            </h2>
            <p className="text-xl text-dark-600">
              Ton parcours sur 12 mois
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-600 to-primary-600 hidden md:block"></div>

            <div className="space-y-12">
              {/* Jour 1 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">Jour 1</h3>
                  <p className="text-dark-600 leading-relaxed">
                    Réception du colis + accès immédiat à la plateforme. Tu peux lancer ta première impression le jour même avec le guide de démarrage.
                  </p>
                </div>
              </div>

              {/* Semaine 1 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-white font-bold text-xl">7</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">Semaine 1</h3>
                  <p className="text-dark-600 leading-relaxed">
                    Premières impressions réussies. Tu explores les tutoriels vidéos et découvres les bases : réglages, supports, post-traitement.
                  </p>
                </div>
              </div>

              {/* Mois 2-12 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">Mois 2-12</h3>
                  <p className="text-dark-600 leading-relaxed">
                    Progression naturelle. Chaque mois, 3 nouvelles figurines exclusives pour pratiquer de nouvelles techniques. Tu avances à ton rythme.
                  </p>
                </div>
              </div>

              {/* Toute l'année */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">Toute l&apos;année</h3>
                  <p className="text-dark-600 leading-relaxed">
                    Live mensuels + communauté Discord active. Tu poses tes questions, partages tes créations, et tu n&apos;es jamais seul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LE DISCORD */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-10 lg:p-16 text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                COMMUNAUTÉ
              </div>

              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                Le Discord du Figurarium
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Une communauté bienveillante où tu trouveras toujours quelqu&apos;un pour t&apos;aider, te conseiller ou simplement admirer tes créations.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">#</span>
                  </div>
                  <div>
                    <span className="font-bold">questions</span>
                    <p className="text-white/70 text-sm">Aide technique et conseils</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">#</span>
                  </div>
                  <div>
                    <span className="font-bold">live-sculpt</span>
                    <p className="text-white/70 text-sm">Sessions en direct avec les artistes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">#</span>
                  </div>
                  <div>
                    <span className="font-bold">galerie</span>
                    <p className="text-white/70 text-sm">Partage tes impressions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">#</span>
                  </div>
                  <div>
                    <span className="font-bold">tutoriels</span>
                    <p className="text-white/70 text-sm">Guides et techniques avancées</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Accès après achat
              </a>
            </div>

            {/* Visual */}
            <div className="bg-white/10 backdrop-blur-sm p-10 lg:p-16 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-white/80 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <p className="text-white/90 text-lg font-semibold">Une communauté active</p>
                <p className="text-white/70">toute l&apos;année</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA BASE DE CONNAISSANCES */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
              La base de connaissances
            </h2>
            <p className="text-xl text-dark-600">
              Tu apprends quand tu veux, à ton rythme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Articles */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-dark-900 mb-4">
                Articles progressifs
              </h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                De débutant à avancé. Chaque article est pensé pour que tu puisses appliquer immédiatement ce que tu apprends.
              </p>
              <ul className="space-y-2 text-dark-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Premiers pas avec la Saturn 3
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Gestion des supports
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Post-traitement et finitions
                </li>
              </ul>
            </div>

            {/* Vidéos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-dark-900 mb-4">
                Vidéos tutoriels
              </h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                Voir faire, c&apos;est comprendre. Des tutoriels vidéos clairs pour maîtriser les techniques essentielles.
              </p>
              <ul className="space-y-2 text-dark-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Unboxing et installation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Première impression guidée
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Techniques avancées
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Ce pack est fait pour toi si...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* OUI */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-display font-bold text-green-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              C&apos;est pour toi
            </h3>
            <ul className="space-y-3 text-dark-900">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tu veux te lancer dans l&apos;impression 3D sans te prendre la tête</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tu préfères apprendre en faisant plutôt qu&apos;en théorie</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tu veux créer tes propres figurines pour jouer ou exposer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tu cherches une communauté bienveillante pour progresser</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tu veux un accompagnement sur le long terme</span>
              </li>
            </ul>
          </div>

          {/* NON */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
            <h3 className="text-2xl font-display font-bold text-red-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Ce n&apos;est pas pour toi
            </h3>
            <ul className="space-y-3 text-dark-900">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Tu cherches juste des fichiers STL sans imprimante</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Tu veux imprimer en masse pour revendre</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Tu préfères l&apos;impression FDM (filament)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Tu as déjà une imprimante résine et maîtrises le process</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Tu n&apos;as pas l&apos;espace pour installer une imprimante</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {/* Q1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Quand vais-je recevoir mon pack ?
              </h3>
              <p className="text-dark-600 leading-relaxed">
                L&apos;accès numérique est immédiat après paiement. Le colis physique (imprimante + résine) est expédié sous 48h ouvrées et arrive généralement en 3-5 jours en France métropolitaine.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Je n&apos;ai jamais fait d&apos;impression 3D, c&apos;est vraiment pour débutants ?
              </h3>
              <p className="text-dark-600 leading-relaxed">
                Oui ! Le pack est conçu pour partir de zéro. Le guide de démarrage, les tutoriels vidéos et la communauté Discord sont là pour t&apos;accompagner pas à pas. Tu peux lancer ta première impression le jour même.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Les 36 figurines, je les reçois toutes d&apos;un coup ?
              </h3>
              <p className="text-dark-600 leading-relaxed">
                Non, tu reçois 3 nouvelles figurines exclusives chaque mois pendant 12 mois. Cela te permet de progresser naturellement et d&apos;avoir toujours du nouveau contenu à imprimer.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Que se passe-t-il après les 12 mois ?
              </h3>
              <p className="text-dark-600 leading-relaxed">
                Tu gardes l&apos;accès à vie aux 36 figurines reçues et à la base de connaissances. L&apos;accès au Discord communauté et aux lives mensuels reste actif tant que tu le souhaites.
              </p>
            </div>

            {/* Q5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                Puis-je payer en plusieurs fois ?
              </h3>
              <p className="text-dark-600 leading-relaxed">
                Oui, le paiement en 3x sans frais est disponible via Stripe au moment du checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Prêt à donner vie à ton imaginaire ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Commande maintenant et commence ton aventure créative dès aujourd&apos;hui.
          </p>

          <div className="flex items-baseline justify-center gap-4 mb-8">
            <span className="text-5xl font-bold text-white">[Prix]</span>
            <span className="text-xl text-gray-400">€</span>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-12 py-6 rounded-xl font-bold text-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105 mb-10"
          >
            Commander le Pack Débutant
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Reassurances */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Paiement sécurisé Stripe
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Livraison suivie
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Accès immédiat
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
