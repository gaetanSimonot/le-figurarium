const fs = require('fs');
const path = require('path');

const CREATEUR_DIR = path.join(__dirname, '../public/createur');
const OUTPUT_FILE = path.join(__dirname, '../data/figurines-generated.json');

function scanDirectory(dir) {
  const figurines = [];

  try {
    const createurs = fs.readdirSync(dir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const createur of createurs) {
      const createurPath = path.join(dir, createur);
      const figurineFolders = fs.readdirSync(createurPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const figurineFolder of figurineFolders) {
        const figurinePath = path.join(createurPath, figurineFolder);
        const files = fs.readdirSync(figurinePath);

        // Chercher la vignette ou la première image
        const vignetteFile = files.find(f => f.toLowerCase().includes('vignette'));
        const imageFiles = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
        const mainImage = vignetteFile || imageFiles[0];

        if (mainImage) {
          const id = `${createur.toLowerCase().replace(/\s+/g, '-')}-${figurineFolder.toLowerCase().replace(/\s+/g, '-')}`;

          figurines.push({
            id,
            createur,
            nom: figurineFolder,
            description: `Figurine ${figurineFolder} par ${createur}`,
            categorie: detectCategory(figurineFolder),
            images: imageFiles.map(f => `/createur/${createur}/${figurineFolder}/${f}`),
            mainImage: `/createur/${createur}/${figurineFolder}/${mainImage}`,
            gumroadLink: `https://gumroad.com/l/${figurineFolder.toLowerCase().replace(/\s+/g, '-')}`
          });
        }
      }
    }

    return figurines;
  } catch (error) {
    console.error('Erreur lors du scan:', error);
    return [];
  }
}

function detectCategory(name) {
  const nameLower = name.toLowerCase();

  if (nameLower.includes('alien') || nameLower.includes('kafka') || nameLower.includes('goldorak')) {
    return 'Sci-Fi';
  }
  if (nameLower.includes('goku') || nameLower.includes('lucci') || nameLower.includes('rengoku') || nameLower.includes('mandalo')) {
    return 'Anime';
  }
  if (nameLower.includes('zeus') || nameLower.includes('dragon')) {
    return 'Mythologie';
  }
  if (nameLower.includes('hellboy')) {
    return 'Comics';
  }

  return 'Fantasy';
}

// Générer les données
const figurines = scanDirectory(CREATEUR_DIR);

// Créer le dossier data s'il n'existe pas
const dataDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Écrire le fichier JSON
fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ figurines }, null, 2), 'utf-8');

console.log(`✅ ${figurines.length} figurines générées dans ${OUTPUT_FILE}`);
