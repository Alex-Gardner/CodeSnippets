var Twit = require("twit")
import cred from './cred'

var T = new Twit(cred)

T.get('search/tweets', { q: 'sushi since:2017-02-11', count: 20 }, function(err, data, response) {
  console.log(data)
})

// run in bash: $ node twit-index.js
