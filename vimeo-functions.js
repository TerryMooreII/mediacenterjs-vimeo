var vimeoKey = require('./vimeo-key').key;
var vimeo = require('vimeo')(vimeoKey.key, vimeoKey.secret);

// vimeo.area(method[, params[, access]], callback)

var ITEMS_PER_PAGE = 50;


var params = { query: 'phish'};

vimeo.videos('search', params, function(err, res){
	console.log(res)
});



var params = { 
	channel_id: '258194'
};

vimeo['channels']('getVideos', params, function(err, res) {
  console.log(res.videos.video)
});

)




