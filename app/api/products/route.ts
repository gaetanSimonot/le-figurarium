import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const token = process.env.NEXT_PUBLIC_GUMROAD_TOKEN

    if (!token) {
      return NextResponse.json(
        { error: 'Token Gumroad manquant' },
        { status: 500 }
      )
    }

    console.log('[API] Fetching all products')

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
    console.log('[API] Products loaded:', data.products?.length || 0)

    return NextResponse.json(data.products || [])
  } catch (error) {
    console.error('[API] Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
