// Request is a callback-based HTTP request service -*Not promise based
// Example of basic request call to server

var request = require('request');

var options = {
  url: 'https://api.github.com/users/kentcdodds/repos',
  headers: {
    'User-Agent': 'request',
  },
};

// !!!!!!! from current testing (04/04/17), the
//callback function needs the error, response, and body parameters to work
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

request(options, callback);

//--------------------------

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var repos = JSON.parse(body);
    repos.map(function(repo) {
      return console.log(repo.name);
    });
  }
}
request(options, callback);
