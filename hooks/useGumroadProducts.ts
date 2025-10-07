'use client'
import { useState, useEffect } from 'react'

interface GumroadProduct {
  id: string
  name: string
  description: string
  thumbnail_url: string
  cover_url?: string
  preview_url?: string
  formatted_price: string
  short_url: string
  tags?: string[]
  category?: 'full-size' | 'chibi' | 'other' // Catégorie détectée
}

export function useGumroadProducts() {
  const [products, setProducts] = useState<GumroadProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('[useGumroadProducts] Fetching products from API')

        const response = await fetch('/api/products')

        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`)
        }

        const data = await response.json()
        console.log('[useGumroadProducts] Products loaded:', data.length)

        // Debug: extraire tous les tags uniques
        const allTags = new Set<string>()
        data.forEach((product: GumroadProduct) => {
          product.tags?.forEach(tag => allTags.add(tag))
        })
        console.log('[useGumroadProducts] Tags uniques trouvés:', Array.from(allTags).sort())

        // Détecter les catégories (Full Size, Chibi) depuis le nom/description
        const productsWithCategory = data.map((product: GumroadProduct) => {
          const nameAndDesc = `${product.name} ${product.description}`.toLowerCase()

          let category: 'full-size' | 'chibi' | 'other' = 'other'

          if (nameAndDesc.includes('chibi')) {
            category = 'chibi'
          } else if (nameAndDesc.includes('full size') || nameAndDesc.includes('fullsize')) {
            category = 'full-size'
          }

          return { ...product, category }
        })

        // Debug: compter les produits par catégorie
        const categoryCounts = productsWithCategory.reduce((acc: Record<string, number>, p: GumroadProduct) => {
          acc[p.category || 'other'] = (acc[p.category || 'other'] || 0) + 1
          return acc
        }, {} as Record<string, number>)
        console.log('[useGumroadProducts] Produits par catégorie:', categoryCounts)

        setProducts(productsWithCategory)
      } catch (err) {
        console.error('[useGumroadProducts] Erreur:', err)
        setError(err instanceof Error ? err.message : 'Erreur de chargement')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
