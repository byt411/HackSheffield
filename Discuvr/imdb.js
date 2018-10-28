// This Javascript priece was adapted by Danielius Viktorovas
// The program takes a .json file from URL
// .json contains ID's of IMDB movies
// With rating over 6, produced later than ~1990 and
// With more than 1000 votes
// Then it picks random ID and redirects user to the random movie
function Get(yourUrl){
	var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get('https://www.jasonbase.com/things/jgA1.json'));
var idIndex = Math.floor(Math.random() * 54398);
var id = JSON.stringify(json_obj[idIndex].tconst);
var idString = id.toString();
if (idString.length == 6)
	idString = '0' + id;
window.location.replace("https://www.imdb.com/title/" + "tt" + idString);