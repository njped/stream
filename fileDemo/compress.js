const zip = require('zlib')
const fs = require('fs')
const gzip = zip.createGzip()

const inputStream = fs.createReadStream('./newText.txt')
const outputStream = fs.createWriteStream('./bigFile2.txt.gz');

inputStream.pipe(gzip).pipe(outputStream);