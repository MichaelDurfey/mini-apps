const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(__dirname + '/index.html'));
app.use(express.static(__dirname + '/node_modules'))
app.use(express.static('compiled'))
app.use(express.static('bundle'))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/node_modules/react'))
// app.use(express.static(__dirname + '/node_modules/reactdom'))

app.get('/', (req, res) => {

  res.send('/index.html');
})

app.listen(3000, () => console.log('app listening on port 3000!!') )