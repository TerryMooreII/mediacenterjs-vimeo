/*
	MediaCenterJS - A NodeJS based mediacenter solution
	
    Copyright (C) 2013 - Jan Smolders

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var vimeoFunctions = require('./vimeo-functions');

// Choose your render engine. The default choice is JADE:  http://jade-lang.com/
exports.engine = 'jade';

// Render the indexpage
exports.index = function(req, res, next){

	res.render('vimeo', { data: "Hello MediacenterJS: My first plugin" });
	
};


exports.get = function(req, res, next){

    
    var infoRequest = req.params.id
        , optionalParam = req.params.optionalParam
        , action = req.params.action;
 
 // console.log(infoRequest)
 // console.log(optionalParam)
 // console.log(action)
 
    switch(infoRequest) {
        case('search'):
            console.log('Vimeo.get Search...')
            vimeoFunctions.search(optionalParam, req, res);
        break;
        case('categories'):
            if (optionalParam){
                console.log('Vimeo.get Category ' + optionalParam + '...');
                vimeoFunctions.getCategoryVideos(optionalParam, req, res);
            }else{
                console.log('Vimeo.get Categories...');
                vimeoFunctions.getCategories(req, res);
            }
        break;
        case('categoryInfo'):
            console.log('Vimeo.get Category Info...')
            vimeoFunctions.getCategoryInfo(optionalParam, req, res);
        break;
        case('channels'):
            if (optionalParam){
                console.log('Vimeo.get Channel ' + optionalParam + '...')
                vimeoFunctions.getChannelVideos(optionalParam, req, res);
            }else{
                console.log('Vimeo.get Channels...')
                vimeoFunctions.getChannels(req, res);     
            }
        break;
        case('videos'):
            console.log('Vimeo.get Video ' + optionalParam + '...')
            vimeoFunctions.getVideo(optionalParam, req, res);
        break;     
        default:
                return res.render('vimeo', {data: 'Invalid requst'});
        break;                
    }        

}


