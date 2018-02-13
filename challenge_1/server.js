const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.send('/index.html')
})

app.listen(3000, function(){
  console.log('listening on port 3000!!');
})