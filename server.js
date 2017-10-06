const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.listen(3000, function() { console.log('listening')});
