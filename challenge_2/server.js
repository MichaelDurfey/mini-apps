var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', res => {
  res.writeHead(200);
  console.log('get!')
  res.send('/index.html');
})

app.post('/', (req, res) => {
  let input = req.body.input;
  input = [JSON.parse(input)];
  let keys = Object.keys(input[0]);
  let values = [];
 let mapVals = (currentNode, result = '') => {
    for (var k in currentNode) {
      if (typeof currentNode[k] !== 'object' && currentNode[k] !== null){
      values.push(currentNode[k])
      } else {
        mapVals(currentNode[k]);
      }
    }
  };
  mapVals(input);
  values = values.join(',')
  let data = {
    keys: keys,
    values: values
  }
  data = JSON.stringify(data);
  res.send(data);
})

app.listen(3000, function(){
  console.log('server listening on port 3000 !!')
})