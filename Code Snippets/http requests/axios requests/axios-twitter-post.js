// ********-- Twitter post request for oauth2 key
// -- Application only requests - https://dev.twitter.com/oauth/application-only ------

// Try to run these with runkit or directly from node
// $ node **'filename'**.js

var axios = require('axios');

// Step 1-a (Get and encode your consumer key and consumer secret)
// These are obtained from twitter when registering an app
var consumer_key = encodeURIComponent('CK1GW2OCJtxQgVkMx2AWbRkRI');
var consumer_secret = encodeURIComponent(
  'CTUmTC6ta3Rsglq8itt0pJTWAtjtEqghvgkpBt2d1hs0ap8q57',
);
// ** Note: runkit does not currently support 'encodeURIComponent' or 'btoa'
// Used a browser to retrieve these values and enter them in runkit

// Step 1-b (Concat 2 values into single string with colon)
var credentials = `${consumer_key}:${consumer_secret}`;
// Step 1-c (btoa() performs a Base64 encode of received value)
var coded_cred = btoa(credentials);
//Q0sxR1cyT0NKdHhRZ1ZrTXgyQVdiUmtSSTpDVFVtVEM2dGEzUnNnbHE4aXR0MHBKVFdBdGp0RXFnaHZna3BCdDJkMWhzMGFwOHE1Nw==

var url = 'https://api.twitter.com/oauth2/token';

// I've pulled out the header for ease of viewing
var auth = {
  headers: {
    Authorization: 'Basic ' + coded_cred,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
};

axios
  .post(url, 'grant_type=client_credentials', auth)
  .then(response => {
    console.log(response);
    var bearer_token = response.data.access_token;
  })
  .catch(error => {
    console.log(error);
  });

// The response from the server is an access token: used to make application-only requests
