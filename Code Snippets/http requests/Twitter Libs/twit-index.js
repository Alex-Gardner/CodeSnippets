var Twit = require("twit")

var T = new Twit({
  consumer_key:         'CK1GW2OCJtxQgVkMx2AWbRkRI',
  consumer_secret:      'CTUmTC6ta3Rsglq8itt0pJTWAtjtEqghvgkpBt2d1hs0ap8q57',
  access_token:         '846415922172755969-uSnOBnfNsNU23ytTnyzv7Tmk4lk6w6I',
  access_token_secret:  'e3ekmV25hQkN8t29hgFgMVtUy14xxSW21MqQng3qyo2wM',
  timeout_ms:           30*1000,  // optional HTTP request timeout to apply to all requests.
})

T.get('search/tweets', { q: 'sushi since:2017-02-11', count: 20 }, function(err, data, response) {
  console.log(data)
})

// run in bash: $ node twit-index.js
