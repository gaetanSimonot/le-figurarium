# Le Figurarium

Site e-commerce pour la vente de fichiers STL (figurines 3D) avec intégration Gumroad.

## 🎯 Contexte du projet

Le Figurarium est une vitrine pour **Alkemia Art**, créateur de figurines 3D premium pour impression résine. Le site charge dynamiquement les produits depuis l'API Gumroad et propose une expérience d'achat optimisée.

## 🛠️ Stack technique

- **Framework** : Next.js 15.5.4 (App Router)
- **React** : 19.1.0
- **TypeScript** : Types stricts, pas de `any`
- **Styling** : Tailwind CSS
- **Déploiement** : Vercel
- **API externe** : Gumroad API

## 📁 Structure du projet

```
le-figurarium/
├── app/
│   ├── page.tsx                    # Page d'accueil
│   ├── galerie/
│   │   ├── page.tsx               # Liste des produits Gumroad
│   │   └── [id]/page.tsx          # Fiche produit détaillée
│   ├── pack-debutant/             # Page pack débutant
│   ├── packs/                     # Page packs thématiques
│   └── api/
│       ├── products/route.ts      # API avec cache 5min
│       └── product-images/[id]/   # Scraping images Gumroad
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── hooks/
│   └── useGumroadProducts.ts      # Hook pour charger produits
├── data/
│   ├── produits.json              # Données statiques (packs)
│   └── figurines-generated.json   # Backup figurines
└── public/
    └── images/                    # Assets statiques
```

## 🔑 Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_GUMROAD_TOKEN=votre_token_gumroad
```

⚠️ **Important** : Le token doit être configuré sur Vercel (Settings → Environment Variables) pour Production, Preview et Development.

## 🚀 Commandes

```bash
# Développement
npm run dev              # Démarre le serveur de dev

# Build
npm run build            # Production build

# Linting
npm run lint

# Test SEO
npm run test:seo
```

## 🎨 Fonctionnalités principales

### ✅ Implémenté

1. **Page d'accueil**
   - Hero section avec background
   - Mise en avant du Pack Débutant
   - Packs thématiques
   - Aperçu galerie (6 figurines)

2. **Galerie dynamique**
   - Chargement depuis API Gumroad
   - Cache 5 minutes (in-memory + CDN)
   - Filtres par catégorie
   - Cards produits avec images

3. **Fiche produit**
   - Layout 2/3 - 1/3 (contenu/sidebar)
   - 3 onglets : Description, Caractéristiques, Impression
   - Sidebar sticky avec prix et CTA
   - Breadcrumb navigation
   - Lien direct vers Gumroad

4. **API Routes**
   - `/api/products` : Liste produits avec cache 5min
   - `/api/product-images/[id]` : Scraping images Gumroad

5. **SEO**
   - Metadata dynamique
   - Sitemap
   - Robots.txt
   - JSON-LD structured data

## 🐛 Problèmes résolus

1. ✅ Build Vercel échouait : Erreurs TypeScript (`any` non autorisé)
2. ✅ 404 sur Vercel : `next.config.ts` utilisait `module.exports` au lieu de `export default`
3. ✅ Page produit blanche : ID URL encodé, ajout de `decodeURIComponent()`
4. ✅ Galerie lente : Ajout cache API 5 minutes
5. ✅ Routes API manquantes : Recréées avec types stricts

## 📝 Notes importantes

### TypeScript
- **Toujours** utiliser des types explicites
- **Jamais** de `any`
- Interfaces pour toutes les réponses API

### Gumroad API
- Token en `NEXT_PUBLIC_` car utilisé côté client ET serveur
- Rate limiting : cache obligatoire (5min actuellement)
- Structure produit : `{ id, name, description, thumbnail_url, cover_url, preview_url, formatted_price, short_url }`

### Cache
- **In-memory** : 5 minutes (app/api/products/route.ts)
- **CDN** : `Cache-Control: public, s-maxage=300, stale-while-revalidate=600`
- Réinitialise au redémarrage Vercel

### Next.js 15
- App Router obligatoire
- Turbopack en dev uniquement (`--turbopack` retiré du build)
- `params` est une Promise à await
- Images `unoptimized: true` (domaine externe Gumroad)

## 🔮 À faire (prochaine session)

1. **Galerie d'images produit**
   - Utiliser `/api/product-images/[id]` pour scraper images Gumroad
   - Carousel d'images dans fiche produit

2. **Optimisations**
   - Vercel KV pour cache persistant
   - Ajuster durée cache selon rate limiting

3. **Améliorations UX**
   - Filtres galerie (prix, popularité)
   - Recherche produits
   - Loading skeletons

4. **Assets manquants**
   - Créer icon-192.png pour PWA
   - Ajouter images manquantes

## 🤝 Workflow Git

```bash
git status
git add .
git commit -m "Description des changements"
git push
```

Vercel déploie automatiquement à chaque push sur `master`.

---

**Dernière mise à jour** : Session du 3 octobre 2025
**Repository** : https://github.com/gaetanSimonot/le-figurarium
