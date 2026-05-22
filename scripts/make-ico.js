const fs = require('fs');
const pngToIco = require('png-to-ico').default;

pngToIco('d:/house/src/app/icon.png')
  .then(buf => {
    fs.writeFileSync('d:/house/src/app/favicon.ico', buf);
    console.log('Successfully generated favicon.ico');
  })
  .catch(console.error);
