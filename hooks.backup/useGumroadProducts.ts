import { useState, useEffect } from 'react';

export interface GumroadProduct {
  id: string;
  name: string;
  description: string;
  thumbnail_url: string;
  short_url: string;
  price: number;
  formatted_price: string;
  published: boolean;
  custom_fields?: {
    createur?: string;
    categorie?: string;
  };
}

export interface FigurineData {
  id: string;
  createur: string;
  nom: string;
  description: string;
  categorie: string;
  mainImage: string;
  images: string[];
  gumroadLink: string;
  prix?: string;
}

interface UseGumroadProductsReturn {
  products: FigurineData[];
  loading: boolean;
  error: string | null;
}

export function useGumroadProducts(): UseGumroadProductsReturn {
  const [products, setProducts] = useState<FigurineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/gumroad/products');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error('Failed to fetch products');
        }

        // Transform Gumroad products to match our figurine format
        const transformedProducts: FigurineData[] = data.products
          .filter((p: GumroadProduct) => p.published)
          .map((product: GumroadProduct) => ({
            id: product.id,
            createur: product.custom_fields?.createur || 'ALKEMIA ART',
            nom: product.name,
            description: product.description || `Figurine ${product.name}`,
            categorie: product.custom_fields?.categorie || 'Général',
            mainImage: product.thumbnail_url || '/images/placeholder.jpg',
            images: [product.thumbnail_url || '/images/placeholder.jpg'],
            gumroadLink: product.short_url,
            prix: product.formatted_price,
          }));

        setProducts(transformedProducts);
      } catch (err) {
        console.error('Error fetching Gumroad products:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
