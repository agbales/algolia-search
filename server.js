const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.listen(port, function() { console.log('listening')});
