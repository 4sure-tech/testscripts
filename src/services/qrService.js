const qrcode = require('qrcode');
const path = require('path');
const tinyUrl = require('tinyurl')

async function generateQR(url) {
  
  const shortUrl = await tinyUrl.shorten(url);
  const qrConsole = await qrcode.toString(shortUrl, { type: 'terminal' });
  console.log(qrConsole);
}

module.exports = { generateQR };
