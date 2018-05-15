var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'CK1GW2OCJtxQgVkMx2AWbRkRI',
  consumer_secret: 'CTUmTC6ta3Rsglq8itt0pJTWAtjtEqghvgkpBt2d1hs0ap8q57',
  access_token_key: '846415922172755969-uSnOBnfNsNU23ytTnyzv7Tmk4lk6w6I',
  access_token_secret: 'e3ekmV25hQkN8t29hgFgMVtUy14xxSW21MqQng3qyo2wM'
});

var params = {screen_name: 'DreamScenery'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      console.log(tweets);
  } else {
      throw error
  }
});

// $node node-twitter-index.js

// 'tweets' will return an array
// To get to the actual picture i.e.: (filename.jpg)
// Array -> object -> extended_entities (obj) -> media (array) -> object -> media_url_https **(or media_url)
//  response[*arrayIndex*].extended_entities.media[0].media_url_https
