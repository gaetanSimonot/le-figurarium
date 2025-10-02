import { NextRequest, NextResponse } from 'next/server'

interface GumroadProduct {
  id: string
  name: string
  description: string
  price: number
  formatted_price: string
  short_url: string
  thumbnail_url: string | null
  preview_url?: string
  cover_url?: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const token = process.env.NEXT_PUBLIC_GUMROAD_TOKEN

    if (!token) {
      return NextResponse.json(
        { error: 'Token Gumroad manquant' },
        { status: 500 }
      )
    }

    console.log('[API] Fetching product:', id)

    const response = await fetch('https://api.gumroad.com/v2/products', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store' // Always fetch fresh data
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Erreur API Gumroad: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const product = data.products?.find((p: GumroadProduct) => p.id === id)

    if (!product) {
      return NextResponse.json(
        { error: 'Produit non trouvé' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('[API] Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
