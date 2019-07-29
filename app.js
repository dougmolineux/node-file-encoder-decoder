const fs = require('fs');

const filepath = process.argv[2];
const newFilename = filepath.split('.')[0] + "_copy." + filepath.split('.')[1];
const blobFileName = 'blob';

console.log(`Reading ${filepath}...`);
const originalBitmap = fs.readFileSync(filepath, { encoding: 'base64' });

console.log(`Writing file to ${blobFileName}...`);
fs.writeFileSync(blobFileName, originalBitmap);

console.log(`Reading ${blobFileName}...`);
const blobBitmap = fs.readFileSync(blobFileName);

console.log(`Copying file to ${newFilename}...`);
fs.writeFileSync(newFilename, blobBitmap, { encoding: 'base64' });

console.log('Done')
