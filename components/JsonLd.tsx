export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Le Figurarium',
    description: 'Boutique de fichiers STL premium pour impression 3D résine',
    url: 'https://lefigurarium.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lefigurarium.com/galerie?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Le Figurarium',
    url: 'https://lefigurarium.com',
    logo: 'https://lefigurarium.com/images/logo.png',
    description: 'Boutique de fichiers STL premium pour impression 3D résine',
    sameAs: [
      // Ajouter les réseaux sociaux quand disponibles
      // 'https://www.facebook.com/lefigurarium',
      // 'https://www.instagram.com/lefigurarium',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  price: string;
  image: string;
  url: string;
}

export function ProductJsonLd({ name, description, price, image, url }: ProductJsonLdProps) {
  const priceValue = price.replace(/[^0-9]/g, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `https://lefigurarium.com${image}`,
    url: `https://lefigurarium.com${url}`,
    offers: {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `https://lefigurarium.com${url}`,
    },
    brand: {
      '@type': 'Brand',
      name: 'Le Figurarium',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string;
    item: string;
  }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://lefigurarium.com${item.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
