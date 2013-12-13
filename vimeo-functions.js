var vimeoKey = require('./vimeo-key').key;
var vimeo = require('vimeo')(vimeoKey.key, vimeoKey.secret);
var ITEMS_PER_PAGE = 50;

//defaults
var params = {
	page: 1, 
	per_page: 25,
	full_response: true,
	short_response: false 
};

exports.search = function(query, req, res){
	
	if (req.query.page)
		params.page = req.query.page;

	if (!query || query === undefined)
		return res.json(invalidRequest());

	if (req.query.sort)
		params.sort = req.query.sort;

	params.query = query;
	
	vimeo.videos('search', params, function(err, result){
		res.json(result || noResults());
	});
};

exports.getCategories = function(req, res){

	if (req.query.page)
		params.page = req.query.page;

	vimeo.categories('getAll', params, function(err, result){
		res.json(result || noResults());
	});
};

exports.getCategoryInfo = function(query, req, res){

	if (req.query.page)
		params.page = req.query.page;

	if (!query || query === undefined)
		return res.json(invalidRequest());

	params.category = query;

	vimeo.categories('getInfo', params, function(err, result){
		res.json(result || noResults());
	});
};

exports.getCategoryVideos = function(category, req, res){

	if (req.query.page)
		params.page = req.query.page;


	if (!category || category === undefined)
		return res.json(invalidRequest());

	params.category = category;

	vimeo.categories('getRelatedVideos', params, function(err, result){
		res.json(result || noResults());
	});
};

exports.getChannels = function(req, res){

	if (req.query.page)
		params.page = req.query.page;

	if (req.query.sort)
		params.sort = req.query.sort;


	vimeo.channels('getAll', params, function(err, result){
		res.json(result || noResults());
	});
};

exports.getChannelVideos = function(channelId, req, res){

	if (!channelId || channelId === undefined)
		return res.json(invalidRequest());		

	if (req.query.page)
		params.page = req.query.page;

	params.channel_id = channelId;

	vimeo.channels('getVideos', params, function(err, result){
		res.json(result  || noResults());
	});
};

exports.getVideo = function(videoId, req, res){

	if (!videoId || videoId === undefined)
		return res.json(invalidRequest());

	params.video_id = videoId;

	vimeo.videos('getInfo', params, function(err, result){
		console.log(err);
		res.json(result || noResults());
	});
};


var noResults = function(message){
	return { error: message || 'No Results.' }
};

var invalidRequest = function(message){
	return { error: message || 'Invalid Request' }
};




