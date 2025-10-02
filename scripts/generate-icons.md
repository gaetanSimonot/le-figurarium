# Guide de génération des icônes et images optimisées

## Icônes PWA à créer

Créez les icônes suivantes dans le dossier `/public` :

### Icônes requises
- `favicon.ico` - 32x32, 16x16
- `icon-192.png` - 192x192 (format PNG)
- `icon-512.png` - 512x512 (format PNG)
- `apple-icon.png` - 180x180 (format PNG)

### Images Open Graph
- `og-image.jpg` - 1200x630 (format JPG optimisé)
- `pack-debutant.jpg` - 1200x630 (déjà existant, à optimiser)

## Outils recommandés

### En ligne
- [Favicon Generator](https://realfavicongenerator.net/)
- [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)

### Ligne de commande
```bash
# Installation de sharp pour optimisation d'images
npm install -D sharp

# Script de conversion (créer convert-images.js)
```

## Optimisation des images existantes

### Convertir en WebP
```bash
# Installer cwebp (https://developers.google.com/speed/webp/download)
cwebp -q 80 input.jpg -o output.webp
```

### Optimiser les JPG/PNG
```bash
# Avec ImageMagick
magick input.jpg -quality 85 -strip output.jpg

# Avec OptiPNG
optipng -o7 image.png
```

## Checklist images

- [ ] Créer favicon.ico
- [ ] Créer icon-192.png
- [ ] Créer icon-512.png
- [ ] Créer apple-icon.png
- [ ] Créer og-image.jpg
- [ ] Optimiser toutes les images du dossier /public/images/
- [ ] Créer versions WebP des images principales
- [ ] Vérifier les dimensions recommandées

## Dimensions recommandées par type

| Type | Dimensions | Format | Qualité |
|------|------------|--------|---------|
| Favicon | 32x32, 16x16 | ICO | - |
| PWA Icon | 192x192, 512x512 | PNG | Lossless |
| Apple Touch | 180x180 | PNG | Lossless |
| Open Graph | 1200x630 | JPG | 80-85% |
| Figurines | 800x800 | JPG/WebP | 75-85% |
| Hero Images | 1920x1080 | JPG/WebP | 80-85% |
