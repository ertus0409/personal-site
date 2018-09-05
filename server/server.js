const express = require('express');
const http = require('http');
const path = require('path');


const publicPath = path.join(__dirname,'../template');

const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));








server.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
