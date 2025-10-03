import { NextResponse } from 'next/server'

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
  price: number
}

interface GumroadApiResponse {
  success: boolean
  products: GumroadProduct[]
}

interface CacheEntry {
  data: GumroadProduct[]
  timestamp: number
}

// In-memory cache
let productsCache: CacheEntry | null = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

export async function GET() {
  try {
    // Check cache first
    const now = Date.now()
    if (productsCache && (now - productsCache.timestamp) < CACHE_DURATION) {
      console.log('[API /products] Returning cached data')
      return NextResponse.json(productsCache.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
        }
      })
    }

    console.log('[API /products] Fetching fresh data from Gumroad')

    const token = process.env.NEXT_PUBLIC_GUMROAD_TOKEN

    if (!token) {
      return NextResponse.json(
        { error: 'Token Gumroad manquant' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.gumroad.com/v2/products', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Erreur API Gumroad: ${response.status}` },
        { status: response.status }
      )
    }

    const data: GumroadApiResponse = await response.json()

    if (!data.products) {
      return NextResponse.json(
        { error: 'Aucun produit trouvé' },
        { status: 404 }
      )
    }

    // Update cache
    productsCache = {
      data: data.products,
      timestamp: now
    }

    console.log('[API /products] Cached', data.products.length, 'products')

    return NextResponse.json(data.products, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    })
  } catch (error) {
    console.error('[API /products] Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
