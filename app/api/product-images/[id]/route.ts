import { NextRequest, NextResponse } from 'next/server'

interface ProductImagesResponse {
  images: string[]
}

interface ErrorResponse {
  error: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<ProductImagesResponse | ErrorResponse>> {
  try {
    const { id } = await params
    const token = process.env.NEXT_PUBLIC_GUMROAD_TOKEN

    if (!token) {
      return NextResponse.json(
        { error: 'Token Gumroad manquant' },
        { status: 500 }
      )
    }

    // Fetch product details from Gumroad API to get short_url
    const apiResponse = await fetch('https://api.gumroad.com/v2/products', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store'
    })

    if (!apiResponse.ok) {
      return NextResponse.json(
        { error: `Erreur API Gumroad: ${apiResponse.status}` },
        { status: apiResponse.status }
      )
    }

    interface GumroadProduct {
      id: string
      short_url: string
    }

    interface GumroadApiResponse {
      products: GumroadProduct[]
    }

    const data: GumroadApiResponse = await apiResponse.json()
    const product = data.products?.find((p: GumroadProduct) => p.id === id)

    if (!product) {
      return NextResponse.json(
        { error: 'Produit non trouvé' },
        { status: 404 }
      )
    }

    // Fetch the product page HTML
    const pageResponse = await fetch(product.short_url, {
      cache: 'no-store'
    })

    if (!pageResponse.ok) {
      return NextResponse.json(
        { error: 'Impossible de charger la page produit' },
        { status: pageResponse.status }
      )
    }

    const html = await pageResponse.text()

    // Extract image URLs from HTML
    const images: string[] = []

    // Match og:image meta tags
    const ogImageRegex = /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/gi
    let match: RegExpExecArray | null
    while ((match = ogImageRegex.exec(html)) !== null) {
      if (match[1]) {
        images.push(match[1])
      }
    }

    // Match img tags with src attributes
    const imgRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/gi
    while ((match = imgRegex.exec(html)) !== null) {
      if (match[1] && !images.includes(match[1])) {
        // Filter out small icons, logos, and non-product images
        const url = match[1]
        if (!url.includes('favicon') &&
            !url.includes('logo') &&
            !url.includes('icon') &&
            (url.startsWith('http') || url.startsWith('//'))) {
          images.push(url.startsWith('//') ? `https:${url}` : url)
        }
      }
    }

    return NextResponse.json({ images })
  } catch (error) {
    console.error('[API] Erreur scraping images:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
