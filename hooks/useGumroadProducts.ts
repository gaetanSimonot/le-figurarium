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
}

export function useGumroadProducts() {
  const [products, setProducts] = useState<GumroadProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('[useGumroadProducts] Fetching products from Gumroad API')

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

        const data = await response.json()
        console.log('[useGumroadProducts] Products loaded:', data.products?.length)
        setProducts(data.products || [])
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
