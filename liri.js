function twitter(screenName) {
	if (process.argv[3] = '') { screenName = 'brunoprogramsnow'}
	var client = new Twitter ({
	  consumer_key: keysJs.twitterKeys.consumer_key,
	  consumer_secret: keysJs.twitterKeys.consumer_secret,
	  access_token_key: keysJs.twitterKeys.access_token_key,
	  access_token_secret: keysJs.twitterKeys.access_token_secret
	});
	var stuff = {screen_name: screenName};

	client.get('statuses/user_timeline', stuff, function(error, tweets, response) {
		if (!error) {
			lineBreak();
			for (var i = 0; i < 20; i++) {
				if (tweets[i] != undefined) {
					logAndAppend(tweets[i].created_at + ':')
					logAndAppend('  "' + tweets[i].text + '"');
				}else {
					i = 20;
				}
			}
			lineBreak();
		}
		else {
			console.log('Error: ' + error);
	        return;
		}
	
	});
};
function spotify(choice) {
	if (!choice) {choice = 'Blink 182:Whats my age again'};
	Spotify.search({ type: 'track', query: choice}, function(error, data) {
	    if (!error) {
	    	j = 1
	    	for (var i = 0; i < 20; i++) {
		    	if (data.tracks.items[i] != undefined) {
		    		lineBreak();
		    		logAndAppend('    #' + j)
		    		lineBreak();
			    	logAndAppend('Artist: ' + data.tracks.items[i].artists[0].name)
			    	logAndAppend('Album: ' + data.tracks.items[i].album.name)
			    	logAndAppend('Preview Url: ' + data.tracks.items[i].preview_url)
			    }
			    j++;
			}
			lineBreak();
	    }
	    else {
	    	console.log('Error: ' + error);
	        return;
	    }
	});
};
function movie(choice) {
	if (!choice) {choice = 'batman'};
	Request('http://www.omdbapi.com/?t=' + choice + '&y=&plot=short&r=json', function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	  		body = JSON.parse(body);
	  		lineBreak();
	  		logAndAppend('Title: ' + body.Title);
	  		logAndAppend('Year: ' + body.Year);
	  		logAndAppend('IMDB Rating: ' + body.imdbRating);
	  		logAndAppend('Country: ' + body.Country);
	  		logAndAppend('Language: ' + body.Language);
	  		logAndAppend('Plot: ' + body.Plot);
	  		logAndAppend('Actors: ' + body.Actors);
	  		lineBreak();
	  	} else {
	  		console.log('Error occurred: ' + error);
	  		return;
	  	}
	})
};