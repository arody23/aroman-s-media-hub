import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const assetsDir = path.resolve('public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
  { id: 'ce6fedba-f92f-4a6c-a484-ef4ebe1f7346', file: 'aroman-logo.png' },
  { id: 'bd4544af-b0b6-4de2-b583-be4073329371', file: 'angelina-shapper.jpg' },
  { id: 'f8637fc3-a5fb-4ff5-9839-f7a2a2c86e5d', file: 'aroman-portrait.jpg' },
  { id: '36ad8d88-c847-49b1-b7d9-759b4c98c1da', file: 'ds-travel.jpg' },
  { id: 'e48ab8bb-aeba-43ce-935a-85e5101e7b96', file: 'gaana.jpg' },
  { id: 'ebe83cd4-7eda-494f-ab11-e7d098197723', file: 'orbis-creativa.jpg' },
  { id: 'fb291c09-3587-4686-a901-bb1d8e09c536', file: 'the-sisters.png' }
];

const host = 'be1dca21-3a6b-46be-91e2-ba6bfb785bbc.lovableproject.com';

for (const item of assets) {
  const urlPath = `/__l5e/assets-v1/${item.id}/${item.file}`;
  const destPath = path.join(assetsDir, item.file);

  console.log(`Downloading ${item.file}...`);
  const file = fs.createWriteStream(destPath);
  
  https.get({
    host: host,
    path: urlPath,
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved ${item.file}`);
    });
  }).on('error', (err) => {
    fs.unlink(destPath, () => {});
    console.error(`Error downloading ${item.file}:`, err.message);
  });
}
