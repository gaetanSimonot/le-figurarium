# ✅ Checklist SEO & Performance - Le Figurarium

## ✅ Complété

### Métadonnées
- [x] Métadonnées générales (title, description, keywords)
- [x] Open Graph (Facebook)
- [x] Twitter Cards
- [x] Métadonnées par page (accueil, galerie, packs, pack-débutant)
- [x] Template de titre dynamique
- [x] Métadonnées canoniques
- [x] MetadataBase configuré

### Fichiers SEO
- [x] robots.txt créé
- [x] sitemap.xml dynamique généré
- [x] manifest.json (PWA) créé

### Schema.org (JSON-LD)
- [x] WebSite schema
- [x] Organization schema
- [x] Product schema (pack débutant)
- [x] Breadcrumb schema
- [x] Composants réutilisables créés

### Configuration Next.js
- [x] Images optimisées (WebP, responsive)
- [x] Compression activée
- [x] poweredByHeader désactivé
- [x] React Strict Mode activé
- [x] SWC Minification activée

### Structure HTML
- [x] Balises sémantiques (header, main, footer, nav)
- [x] Attributs lang="fr" sur html
- [x] Attributs alt sur les images

## 📋 À faire

### Images
- [ ] Créer les icônes PWA (192x192, 512x512)
- [ ] Créer favicon.ico
- [ ] Créer apple-icon.png
- [ ] Créer og-image.jpg (1200x630)
- [ ] Convertir images principales en WebP
- [ ] Optimiser toutes les images existantes
- [ ] Ajouter lazy loading explicite sur images below-the-fold

### Contenu
- [ ] Ajouter Schema.org sur pages figurines individuelles
- [ ] Ajouter Schema.org sur pages packs thématiques
- [ ] Créer page 404 personnalisée
- [ ] Ajouter fil d'Ariane visible sur toutes les pages
- [ ] Optimiser les textes alt des images

### Performance
- [ ] Audit Lighthouse (viser 90+)
- [ ] Optimiser le First Contentful Paint (FCP)
- [ ] Optimiser le Largest Contentful Paint (LCP)
- [ ] Réduire le Cumulative Layout Shift (CLS)
- [ ] Précharger les polices critiques
- [ ] Implémenter le Service Worker (PWA complète)

### Tracking & Analytics
- [ ] Intégrer Google Analytics 4
- [ ] Intégrer Google Search Console
- [ ] Vérifier le site dans Google Search Console
- [ ] Configurer les objectifs de conversion
- [ ] Ajouter le pixel Facebook (si applicable)

### Accessibilité (a11y)
- [ ] Vérifier les contrastes de couleurs
- [ ] Tester la navigation au clavier
- [ ] Ajouter des labels ARIA appropriés
- [ ] Tester avec un lecteur d'écran
- [ ] Vérifier la hiérarchie des headings (h1-h6)

### Sécurité
- [ ] Configurer Content Security Policy (CSP)
- [ ] Ajouter Security Headers
- [ ] Implémenter HTTPS (en production)
- [ ] Configurer HSTS

### Réseaux sociaux
- [ ] Créer et lier comptes sociaux
- [ ] Ajouter les URLs dans Organization schema
- [ ] Tester le partage sur Facebook (Sharing Debugger)
- [ ] Tester le partage sur Twitter (Card Validator)
- [ ] Tester le partage sur LinkedIn

### Technique
- [ ] Ajouter page RSS/Atom feed (si blog)
- [ ] Configurer les redirections 301 si nécessaire
- [ ] Optimiser le bundle JavaScript
- [ ] Implémenter le code splitting
- [ ] Ajouter un loading skeleton pour l'UX

## 🎯 KPIs à surveiller

- **Core Web Vitals**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

- **Lighthouse Scores**
  - Performance: > 90
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 90

- **Indexation**
  - Toutes les pages importantes indexées
  - Pas d'erreurs 404 dans Search Console
  - Rich results visibles dans les SERPs

## 🔧 Commandes utiles

```bash
# Build de production
npm run build

# Analyser le bundle
npm run build && npx @next/bundle-analyzer

# Audit Lighthouse
npx lighthouse https://lefigurarium.com --view

# Tester le manifest
npx pwa-asset-generator --help
```

## 📊 Outils de test

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Schema Markup Validator](https://validator.schema.org/)
- [WebPageTest](https://www.webpagetest.org/)

## 🚀 Priorités

### Haute priorité (faire immédiatement)
1. Créer les icônes manquantes
2. Optimiser les images existantes
3. Tester avec Lighthouse
4. Configurer Google Search Console

### Moyenne priorité (cette semaine)
5. Ajouter Schema.org sur pages manquantes
6. Implémenter Analytics
7. Optimiser les performances
8. Créer page 404

### Basse priorité (ce mois)
9. PWA complète avec Service Worker
10. Implémenter CSP headers
11. Optimisations avancées bundle
12. Tests utilisateurs accessibilité
