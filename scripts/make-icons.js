const sharp = require('sharp');

async function run() {
  const input = 'd:/house/src/app/icon.jpeg';
  
  // App icon (512x512)
  await sharp(input)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile('d:/house/src/app/icon.png');
    
  // Apple icon (180x180)
  await sharp(input)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile('d:/house/src/app/apple-icon.png');
    
  // Favicon for public (48x48)
  await sharp(input)
    .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile('d:/house/public/favicon.png');

  console.log('Icons generated successfully.');
}

run().catch(console.error);
