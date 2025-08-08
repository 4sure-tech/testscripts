const axios = require('axios');
const { apiEndpoint,token } = require('../config/env');

axios.defaults.baseURL = apiEndpoint
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

async function sendOfferToAPI(offer) {
  try {
    const res = await axios.post(`/issue-credential-2.0/create-offer`, offer);
    return res.data;  
  } catch (err) {
    console.error("Error sending to API:", err.message);
    if (err.response) {
      console.error("Status:", err.response.status, "Data:", err.response.data);
    }
  }
}

async function prepareURLAPI(payload) {
    try {
    const res = await axios.post(`/out-of-band/create-invitation`, payload);
    return res.data;
  } catch (err) {
    console.error("Error preparing OOB API:", err.message);
    if (err.response) {
      console.error("Status:", err.response.status, "Data:", err.response.data);
    }
  }
}

async function getIssuanceStatus(cred_ex_id) {
  try {
    const res = await axios.get(`/issue-credential-2.0/records/${cred_ex_id}`);
  } catch (err) {
    if (err.response) {
      console.error('Status',err.response.status , 'Data', err.response.data )
    }
  }
  
}

async function issueCredential(cred_ex_id) {
  try {
    const res = await axios.get(`/issue-credential-2.0/records/${cred_ex_id}/issue`,cred_ex_id);
  } catch (err) {
    if (err.response) {
      console.error('Status',err.response.status , 'Data', err.response.data )
    }
  }
}

module.exports = { sendOfferToAPI , prepareURLAPI ,getIssuanceStatus,issueCredential};
