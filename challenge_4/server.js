const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
  res.send('/index.html')
})


app.listen(8080, () => console.log('listening on 8080!!!'));