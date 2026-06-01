const fs = require('fs');
const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;

async function generateFavicon() {
  const inputPath = 'd:/house/src/app/apple-icon.png';
  const tempPath = 'd:/house/src/app/temp-48.png';
  const outputPath = 'd:/house/public/favicon.ico';

  try {
    // 1. Resize apple-icon.png to 48x48px using sharp
    await sharp(inputPath)
      .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(tempPath);

    // 2. Convert the 48x48 PNG to ICO
    const buf = await pngToIco(tempPath);
    fs.writeFileSync(outputPath, buf);
    console.log('Successfully generated public/favicon.ico (48x48)');

    // 3. Clean up the temp file
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();
