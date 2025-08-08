require('dotenv').config();

if (!process.env.API_ENDPOINT) {
  throw new Error("Missing API_ENDPOINT in .env file");
}

if (!process.env.TOKEN) {
  throw new Error("Missing TOKEN in .env file");
}

if (!process.env.CREDENTIAL_DEFINITION) {
  throw new Error("Missing CREDENTIAL_DEFINITION in .env file");
}
if (!process.env.ISSUER_DID) {
  throw new Error("Missing ISSUER_DID in .env file");
}
if (!process.env.SCHEMA_NAME) {
  throw new Error("Missing SCHEMA_NAME in .env file");
}
if (!process.env.SCHEMA_VERSION) {
  throw new Error("Missing SCHEMA_VERSION in .env file");
}
module.exports = {
  token:process.env.TOKEN,
  apiEndpoint: process.env.API_ENDPOINT,
  credentialDefintion: process.env.CREDENTIAL_DEFINITION,
  issuerDid: process.env.ISSUER_DID,
  schemaName: process.env.SCHEMA_NAME,
  schemaVersion: process.env.SCHEMA_VERSION
};