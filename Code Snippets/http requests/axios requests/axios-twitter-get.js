// -- Get request -server side (CORS issues when running from browser)

// request run with previously obtained token:
// access_token:"AAAAAAAAAAAAAAAAAAAAAFdYzwAAAAAAQU8arQXgJyQ%2FZVBqTP
//g%2BZSNGrNU%3DZQYnnjLEtWFAFiPb4Ux9FsfmfNYL4rICH2EmWU7GDCaHB5GQ4H"
var axios = require('axios');

var bearer_token =
  'AAAAAAAAAAAAAAAAAAAAAFdYzwAAAAAAQU8arQXgJyQ%2FZVBqTPg%2BZSNGrNU%3DZQYnnjLEtWFAFiPb4Ux9FsfmfNYL4rICH2EmWU7GDCaHB5GQ4H';

var get_auth = {
  headers: {
    Authorization: 'Bearer ' + bearer_token,
  },
};

var get_url = 'https://api.twitter.com/1.1/search/tweets.json?q=%40kentcdodds';
// the url should be modified to reflect the corrent search parameters
var get_url2 =
  'https://api.twitter.com/1.1/search/tweets.json?q=%40DreamScenery&src=typd';

// Dynamic URL parameters:
var params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');

// e.g: params.append('q', '@kentcdodds');
// params.toString();
//  --> 'q=%40kentcdodds'
var get_url3 = `https://api.twitter.com/1.1/search/tweets.json?${params}`;
// same result as get_url

//-- Standard Axios format
axios
  .get(get_url, get_auth)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

//------------------ Config format (Works in Runkit)

axios({
  method: 'get',
  url: get_url,
  headers: get_auth.headers,
  responseType: 'json',
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
