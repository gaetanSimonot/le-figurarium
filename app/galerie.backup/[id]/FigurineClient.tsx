"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import figurinesData from '@/data/figurines-generated.json';
import GumroadOverlay from '@/components/GumroadOverlay';

interface Figurine {
  id: string;
  createur: string;
  nom: string;
  description: string;
  categorie: string;
  images: string[];
  mainImage: string;
  gumroadLink: string;
}

export default function FigurineClient({ figurine }: { figurine: Figurine }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showGumroad, setShowGumroad] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white to-dark-50 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-dark-600">
            <li>
              <Link href="/" className="hover:text-primary-600 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/galerie" className="hover:text-primary-600 transition-colors">
                Galerie
              </Link>
            </li>
            <li>/</li>
            <li className="text-dark-900 font-semibold">{figurine.nom}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-100 shadow-2xl">
              <Image
                src={figurine.images[selectedImageIndex]}
                alt={`${figurine.nom} - Image ${selectedImageIndex + 1}`}
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>

            {/* Thumbnails */}
            {figurine.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {figurine.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden bg-dark-100 transition-all ${
                      selectedImageIndex === index
                        ? 'ring-4 ring-primary-600 scale-105'
                        : 'hover:ring-2 hover:ring-primary-400'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${figurine.nom} - Miniature ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                  {figurine.createur}
                </span>
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {figurine.categorie}
                </span>
              </div>
              <h1 className="text-5xl font-display font-bold text-dark-900 mb-4">
                {figurine.nom}
              </h1>
              <p className="text-xl text-dark-600">
                {figurine.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
                Caractéristiques
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Fichier STL haute résolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Optimisé pour impression résine</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Fichiers pré-supportés inclus</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Licence d&apos;usage commercial incluse</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">{figurine.images.length} vue{figurine.images.length > 1 ? 's' : ''} détaillée{figurine.images.length > 1 ? 's' : ''}</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <button
                onClick={() => setShowGumroad(true)}
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Acheter maintenant
              </button>
              <Link
                href="/galerie"
                className="block w-full text-center bg-white text-primary-600 border-2 border-primary-600 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors"
              >
                Retour à la galerie
              </Link>
            </div>

            {/* Info Box */}
            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-200">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-dark-900 mb-1">Besoin d&apos;aide ?</h3>
                  <p className="text-sm text-dark-700">
                    Nos fichiers sont livrés avec un guide d&apos;impression détaillé. Pour toute question, contactez notre support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Figurines */}
        <div className="mt-20">
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-8 text-center">
            Autres figurines de {figurine.createur}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {figurinesData.figurines
              .filter(f => f.createur === figurine.createur && f.id !== figurine.id)
              .slice(0, 4)
              .map((relatedFigurine) => (
                <Link
                  key={relatedFigurine.id}
                  href={`/galerie/${relatedFigurine.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden bg-dark-100">
                    <Image
                      src={relatedFigurine.mainImage}
                      alt={relatedFigurine.nom}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-display font-bold text-dark-900 mb-1">
                      {relatedFigurine.nom}
                    </h3>
                    <p className="text-sm text-dark-600 line-clamp-2">
                      {relatedFigurine.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Gumroad Overlay */}
      {showGumroad && (
        <GumroadOverlay
          link={figurine.gumroadLink}
          onClose={() => setShowGumroad(false)}
        />
      )}
    </div>
  );
}
