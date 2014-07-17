var webshot = require('webshot');
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
webshot('http://localhost/github/congress-pics/index.html', 'full.png', 
	{streamType: 'png', quality: 100,
	windowSize:	
{ width: 1600
, height: 1050 }, shotSize: {height: 'all'}}, function(err) {
  // screenshot now saved to hello_world.png
});
