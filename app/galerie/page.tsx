"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGumroadProducts } from '@/hooks/useGumroadProducts';

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const { products, loading, error } = useGumroadProducts();

  const categories = ['Toutes'];
  const filteredFigurines = products;

  // Loading state
  if (loading) {
    return (
      <div className="bg-gradient-to-b from-white to-dark-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-dark-600">Chargement des produits...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gradient-to-b from-white to-dark-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-dark-900 font-semibold mb-2">Erreur de chargement</p>
            <p className="text-dark-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-dark-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-dark-900 mb-4">
            Galerie Alkemia
          </h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Explorez notre collection exclusive de figurines premium pour impression 3D résine
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'text-dark-700 hover:bg-dark-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Figurines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFigurines.map((figurine) => (
            <div
              key={figurine.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-dark-100">
                <Image
                  src={figurine.thumbnail_url || figurine.cover_url || figurine.preview_url || 'https://via.placeholder.com/300x300/cccccc/666666?text=STL'}
                  alt={figurine.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold flex items-center gap-2">
                    Voir les détails
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-1 rounded">
                    ALKEMIA ART
                  </span>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {figurine.formatted_price}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-dark-900 mb-2">
                  {figurine.name}
                </h3>
                <div
                  className="text-dark-600 text-sm mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: figurine.description }}
                />
                <div className="flex gap-2">
                  <Link
                    href={`/galerie/${figurine.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-dark-600 font-semibold hover:text-primary-600 border border-dark-200 rounded py-2"
                  >
                    Détails
                  </Link>
                  <a
                    href={figurine.short_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-white bg-primary-600 font-semibold hover:bg-primary-700 rounded py-2 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Acheter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
              À propos de nos figurines
            </h2>
            <p className="text-dark-600 mb-6">
              Toutes nos figurines sont créées par Alkemia, un artiste talentueux spécialisé dans la modélisation 3D pour l&apos;impression résine. Chaque fichier STL est optimisé pour l&apos;impression et livré avec des supports pré-générés.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Haute qualité</div>
                <p className="text-dark-600 text-sm">Modèles détaillés et optimisés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Pré-supportés</div>
                <p className="text-dark-600 text-sm">Fichiers prêts à imprimer</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Usage commercial</div>
                <p className="text-dark-600 text-sm">Licence permissive incluse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
