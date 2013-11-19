var vimeoKey = require('./vimeo-key').key;
var vimeo = require('vimeo')(vimeoKey.key, vimeoKey.secret);

// vimeo.area(method[, params[, access]], callback)

var ITEMS_PER_PAGE = 50;

var params = { page: 1, per_page: 25, full_response: true };


exports.search = function(req, res){
	var query = req.q;
	if (!query || query === undefined){
		return res.json(noResults());
	}

	params.query = query;
	vimeo.videos('search', params, function(err, result){
		console.log(result);
		res.json(result);
	});
}

var noResults = function(message){
	return { error: message || 'No Results.' }
}



// var params = { 
// 	channel_id: '258194'
// };

// vimeo['channels']('getVideos', params, function(err, res) {
//   console.log(res.videos.video)
// });





