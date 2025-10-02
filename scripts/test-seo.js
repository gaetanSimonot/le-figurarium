#!/usr/bin/env node

/**
 * Script de test SEO pour Le Figurarium
 * Vérifie la présence des éléments SEO essentiels
 */

const fs = require('fs');
const path = require('path');

const results = {
  passed: [],
  failed: [],
  warnings: [],
};

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    results.passed.push(`✓ ${description}`);
    return true;
  } else {
    results.failed.push(`✗ ${description}`);
    return false;
  }
}

function checkFileContent(filePath, pattern, description) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (pattern.test(content)) {
      results.passed.push(`✓ ${description}`);
      return true;
    } else {
      results.failed.push(`✗ ${description}`);
      return false;
    }
  } else {
    results.failed.push(`✗ ${description} (fichier manquant)`);
    return false;
  }
}

console.log('\n🔍 Test SEO - Le Figurarium\n');
console.log('═'.repeat(50));

// Vérification des fichiers essentiels
console.log('\n📁 Fichiers SEO essentiels');
checkFile('public/robots.txt', 'robots.txt présent');
checkFile('app/sitemap.ts', 'sitemap.ts présent');
checkFile('app/manifest.ts', 'manifest.ts présent');

// Vérification des images
console.log('\n🖼️  Images et icônes');
const hasIcons = [
  checkFile('public/favicon.ico', 'favicon.ico'),
  checkFile('public/icon-192.png', 'icon-192.png (PWA)'),
  checkFile('public/icon-512.png', 'icon-512.png (PWA)'),
  checkFile('public/apple-icon.png', 'apple-icon.png'),
  checkFile('public/images/og-image.jpg', 'og-image.jpg (Open Graph)'),
];

if (!hasIcons.every(Boolean)) {
  results.warnings.push('⚠ Certaines icônes sont manquantes - voir scripts/generate-icons.md');
}

// Vérification des métadonnées dans layout.tsx
console.log('\n📋 Métadonnées');
checkFileContent(
  'app/layout.tsx',
  /export const metadata.*Metadata/s,
  'Métadonnées exportées dans layout.tsx'
);
checkFileContent(
  'app/layout.tsx',
  /openGraph:/,
  'Open Graph configuré'
);
checkFileContent(
  'app/layout.tsx',
  /twitter:/,
  'Twitter Cards configuré'
);

// Vérification des composants JSON-LD
console.log('\n🏷️  Schema.org (JSON-LD)');
checkFile('components/JsonLd.tsx', 'Composants JSON-LD créés');
checkFileContent(
  'app/layout.tsx',
  /JsonLd/,
  'JSON-LD importé dans layout'
);

// Vérification de la configuration Next.js
console.log('\n⚙️  Configuration Next.js');
checkFileContent(
  'next.config.ts',
  /compress: true/,
  'Compression activée'
);
checkFileContent(
  'next.config.ts',
  /poweredByHeader: false/,
  'poweredByHeader désactivé'
);

// Vérification du robots.txt
console.log('\n🤖 Robots.txt');
checkFileContent(
  'public/robots.txt',
  /Sitemap:/,
  'Sitemap référencé dans robots.txt'
);
checkFileContent(
  'public/robots.txt',
  /User-agent: \*/,
  'User-agent configuré'
);

// Affichage des résultats
console.log('\n' + '═'.repeat(50));
console.log('\n📊 Résultats\n');

if (results.passed.length > 0) {
  console.log('✅ Tests réussis:');
  results.passed.forEach(msg => console.log(`  ${msg}`));
}

if (results.failed.length > 0) {
  console.log('\n❌ Tests échoués:');
  results.failed.forEach(msg => console.log(`  ${msg}`));
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  Avertissements:');
  results.warnings.forEach(msg => console.log(`  ${msg}`));
}

const total = results.passed.length + results.failed.length;
const score = Math.round((results.passed.length / total) * 100);

console.log('\n' + '═'.repeat(50));
console.log(`\n🎯 Score SEO: ${score}% (${results.passed.length}/${total})\n`);

if (score === 100) {
  console.log('🎉 Parfait ! Tous les tests SEO sont passés.\n');
} else if (score >= 80) {
  console.log('👍 Bon travail ! Quelques améliorations restent possibles.\n');
} else if (score >= 60) {
  console.log('⚠️  Des améliorations sont nécessaires.\n');
} else {
  console.log('❌ Action requise : plusieurs éléments SEO manquent.\n');
}

console.log('📖 Consultez SEO-CHECKLIST.md pour la liste complète.\n');

process.exit(results.failed.length > 0 ? 1 : 0);
