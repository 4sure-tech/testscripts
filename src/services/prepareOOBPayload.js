async function prepareOOBPayload(offer) {

  const oobPayload = {
  "accept": [
    "didcomm/aip1"
  ],
  "handshake_protocols": [
    "https://didcomm.org/didexchange/1.0"
  ],
  "attachments": [
    {
      "id": offer.cred_ex_id,
      "type": "credential-offer"
    }
  ],
  "goal_code": "issue-vc",
  "goal": "issue a credential",
  "use_did_method": "did:peer:4"
  }
  return oobPayload;
}

module.exports = {prepareOOBPayload}