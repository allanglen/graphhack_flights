var express = require('express')
var exphbs = require('express3-handlebars');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.render('index');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
