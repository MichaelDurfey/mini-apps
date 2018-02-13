var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname))
app.use(bodyParser.json());

app.get('/', res => {
  res.writeHead(200);
  res.send('/index.html');
})

app.post('/', (req, res) => {
 console.log('post!');
 console.log(req.body);
 res.end();
})

app.listen(3000, function(){
  console.log('server listening on port 3000 !!')
})