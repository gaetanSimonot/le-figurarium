import { MetadataRoute } from 'next';
import figurinesData from '@/data/figurines-generated.json';
import produitsData from '@/data/produits.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lefigurarium.com';
  const lastModified = new Date();

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pack-debutant`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packs`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Pages dynamiques des figurines
  const figurinePages: MetadataRoute.Sitemap = figurinesData.figurines.map((figurine) => ({
    url: `${baseUrl}/galerie/${figurine.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Pages dynamiques des packs
  const packPages: MetadataRoute.Sitemap = produitsData.packs
    .filter(pack => pack.type === 'thematique')
    .map((pack) => ({
      url: `${baseUrl}/packs/${pack.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...figurinePages, ...packPages];
}
