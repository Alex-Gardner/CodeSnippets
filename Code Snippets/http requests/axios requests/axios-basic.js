// Try to run these with runkit or directly from node
// $ node **'filename'**.js

var axios = require('axios');

// *******-- Sample open api test (working)
// this script works for both client and server (no CORS issues)
//   --->> response.headers.access-control-allow-origin: "*"

axios
  .get(`https://api.github.com/users/kentcdodds/repos?per_page=100&sort=pushed`)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
