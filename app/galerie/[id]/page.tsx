'use client'

import { useState, useEffect } from 'react'
import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface GumroadProduct {
  id: string
  name: string
  description: string
  thumbnail_url: string
  cover_url?: string
  preview_url?: string
  formatted_price: string
  short_url: string
  sales_count?: number
  custom_permalink?: string
  file_info?: {
    Size?: string
  }
}

type TabType = 'description' | 'features' | 'printing'

export default function ProductPage() {
  const params = useParams()
  const productId = decodeURIComponent(params.id as string)

  const [product, setProduct] = useState<GumroadProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<TabType>('description')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('[ProductPage] Fetching product:', productId)

        const token = process.env.NEXT_PUBLIC_GUMROAD_TOKEN
        if (!token) {
          throw new Error('Token Gumroad manquant')
        }

        const response = await fetch('https://api.gumroad.com/v2/products', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`)
        }

        interface GumroadApiResponse {
          products: GumroadProduct[]
        }

        const data: GumroadApiResponse = await response.json()
        const foundProduct = data.products?.find((p: GumroadProduct) => p.id === productId)

        if (!foundProduct) {
          setProduct(null)
          setLoading(false)
          return
        }

        console.log('[ProductPage] Product loaded:', foundProduct.name)
        setProduct(foundProduct)
      } catch (err) {
        console.error('[ProductPage] Erreur:', err)
        setError(err instanceof Error ? err.message : 'Erreur de chargement')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) {
    return (
      <div key="loading" className="bg-gradient-to-b from-white to-dark-50 py-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-dark-600">Chargement du produit...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    notFound()
    return null
  }

  const imageUrl = product.thumbnail_url || product.cover_url || product.preview_url || 'https://via.placeholder.com/800x800/cccccc/666666?text=STL'

  return (
    <div key={`product-${productId}`} className="bg-gradient-to-b from-white to-dark-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
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
            <li className="text-dark-900 font-semibold truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image + Content (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-square bg-gradient-to-br from-dark-100 to-dark-50">
                <Image
                  src={imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  unoptimized
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-xs font-bold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full shadow-sm">
                    ALKEMIA ART
                  </span>
                </div>
              </div>
            </div>

            {/* Title Mobile (hidden on desktop) */}
            <div className="lg:hidden">
              <h1 className="text-4xl font-display font-bold text-dark-900 mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary-600">
                  {product.formatted_price}
                </span>
                {product.sales_count && product.sales_count > 0 && (
                  <span className="text-sm text-dark-600">
                    {product.sales_count} vente{product.sales_count > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-dark-100">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                      activeTab === 'description'
                        ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                        : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                      activeTab === 'features'
                        ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                        : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                    }`}
                  >
                    Caractéristiques
                  </button>
                  <button
                    onClick={() => setActiveTab('printing')}
                    className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                      activeTab === 'printing'
                        ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
                        : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                    }`}
                  >
                    Impression
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8">
                {/* Description Tab */}
                {activeTab === 'description' && (
                  <div className="prose prose-lg max-w-none">
                    <div
                      className="text-dark-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Caractéristiques techniques
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-dark-50 rounded-lg">
                          <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div>
                            <p className="font-semibold text-dark-900">Format</p>
                            <p className="text-sm text-dark-600">Fichiers STL haute résolution</p>
                          </div>
                        </div>

                        {product.file_info?.Size && (
                          <div className="flex items-start gap-3 p-4 bg-dark-50 rounded-lg">
                            <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="font-semibold text-dark-900">Taille du fichier</p>
                              <p className="text-sm text-dark-600">{product.file_info.Size}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start gap-3 p-4 bg-dark-50 rounded-lg">
                          <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                          <div>
                            <p className="font-semibold text-dark-900">Imprimante</p>
                            <p className="text-sm text-dark-600">Résine LCD/MSLA recommandée</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-dark-50 rounded-lg">
                          <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <div>
                            <p className="font-semibold text-dark-900">Niveau</p>
                            <p className="text-sm text-dark-600">Intermédiaire à avancé</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dark-200 pt-6">
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Contenu du package
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-700">Fichiers STL pré-supportés (prêts à imprimer)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-700">Fichiers STL non-supportés (pour personnalisation)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-700">Pack média (images de présentation)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-700">Guide d&apos;impression recommandé</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Printing Tab */}
                {activeTab === 'printing' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Conseils d&apos;impression
                      </h3>
                      <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-6">
                        <p className="text-dark-700 leading-relaxed">
                          <strong>Important :</strong> Ce modèle est optimisé pour l&apos;impression résine.
                          Pour de meilleurs résultats, utilisez une imprimante LCD/MSLA avec une résolution de 50 microns ou moins.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-white border border-dark-200 rounded-lg">
                          <h4 className="font-semibold text-dark-900 mb-2">Résolution recommandée</h4>
                          <p className="text-dark-600 text-sm">0.025 - 0.05mm (25-50 microns)</p>
                        </div>
                        <div className="p-4 bg-white border border-dark-200 rounded-lg">
                          <h4 className="font-semibold text-dark-900 mb-2">Temps d&apos;impression estimé</h4>
                          <p className="text-dark-600 text-sm">8 à 16 heures selon la taille</p>
                        </div>
                        <div className="p-4 bg-white border border-dark-200 rounded-lg">
                          <h4 className="font-semibold text-dark-900 mb-2">Type de résine</h4>
                          <p className="text-dark-600 text-sm">Résine standard ou ABS-like</p>
                        </div>
                        <div className="p-4 bg-white border border-dark-200 rounded-lg">
                          <h4 className="font-semibold text-dark-900 mb-2">Post-traitement</h4>
                          <p className="text-dark-600 text-sm">Nettoyage IPA + durcissement UV</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dark-200 pt-6">
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Support et assistance
                      </h3>
                      <p className="text-dark-700 mb-4">
                        Les fichiers pré-supportés sont testés et validés. Si vous rencontrez des difficultés :
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-dark-700">Vérifiez l&apos;orientation du modèle dans votre slicer</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-dark-700">Assurez-vous que votre plateau d&apos;impression est parfaitement nivelé</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-dark-700">Utilisez les paramètres d&apos;exposition recommandés pour votre résine</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-t border-dark-200 pt-6">
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Licence d&apos;utilisation
                      </h3>
                      <div className="bg-accent-50 rounded-lg p-6">
                        <h4 className="font-semibold text-dark-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Usage commercial autorisé
                        </h4>
                        <p className="text-dark-700 text-sm mb-3">
                          Vous pouvez imprimer et vendre des copies physiques de ce modèle.
                        </p>
                        <h4 className="font-semibold text-dark-900 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Interdictions
                        </h4>
                        <ul className="text-dark-700 text-sm space-y-1 ml-7">
                          <li>• Partage ou revente des fichiers numériques</li>
                          <li>• Modification et redistribution du modèle</li>
                          <li>• Utilisation pour créer des moules de production en masse</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Title Desktop */}
              <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-3xl font-display font-bold text-dark-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-primary-600">
                    {product.formatted_price}
                  </span>
                </div>
                {product.sales_count && product.sales_count > 0 && (
                  <p className="text-sm text-dark-600 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {product.sales_count} vente{product.sales_count > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Purchase Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <a
                  href={product.short_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-4 transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Acheter maintenant
                </a>

                <Link
                  href="/galerie"
                  className="block w-full text-center bg-dark-100 text-dark-700 border-2 border-dark-200 py-3 rounded-xl font-semibold hover:bg-dark-200 transition-colors"
                >
                  ← Retour à la galerie
                </Link>

                <div className="mt-6 pt-6 border-t border-dark-200 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark-900 text-sm">Téléchargement instantané</p>
                      <p className="text-xs text-dark-600">Accès immédiat après paiement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark-900 text-sm">Paiement sécurisé</p>
                      <p className="text-xs text-dark-600">Via Gumroad (CB, PayPal)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark-900 text-sm">Mises à jour gratuites</p>
                      <p className="text-xs text-dark-600">Accès à vie aux nouvelles versions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creator Card */}
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl shadow-lg p-6 border-2 border-accent-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    A
                  </div>
                  <div>
                    <p className="font-bold text-dark-900">Alkemia Art</p>
                    <p className="text-xs text-dark-600">Créateur 3D</p>
                  </div>
                </div>
                <p className="text-sm text-dark-700 mb-4">
                  Sculpteur passionné spécialisé dans les figurines premium pour impression résine.
                </p>
                <a
                  href="https://patreon.com/alkemiaart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-accent-600 text-white py-2 rounded-lg font-semibold hover:bg-accent-700 transition-colors text-sm"
                >
                  Voir tous ses modèles →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
