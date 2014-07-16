var webshot = require('webshot');
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
webshot('http://localhost/github/congress-pics/index.html', 'hello_world.png', {streamType: 'png', quality: 100}, function(err) {
  // screenshot now saved to hello_world.png
});
