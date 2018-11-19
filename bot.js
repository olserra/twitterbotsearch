var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

var params = {
  q: 'Lady Gaga',
  count: 1
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
}