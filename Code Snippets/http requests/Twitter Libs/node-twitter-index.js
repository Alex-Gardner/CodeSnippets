var Twitter = require('twitter');
import cred from './cred'

var client = new Twitter(cred);

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
