const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, function() {
  console.log('listening on port 3000!');
});

