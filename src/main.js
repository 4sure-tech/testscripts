const { createOffer } = require('./services/offerService');
const { sendOfferToAPI } = require('./services/apiService');
const { generateQR } = require('./services/qrService');
const {prepareOOBPayload} = require('./services/prepareOOBPayload');
const { prepareURLAPI } = require('./services/apiService');

async function main() {
  const offer = await createOffer();
  const sendOfferRepsonse = await sendOfferToAPI(offer);
  const oobPayload = await prepareOOBPayload(sendOfferRepsonse)
  const oobInvite = await prepareURLAPI(oobPayload);
  generateQR(oobInvite.invitation_url)
}

main();