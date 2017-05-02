const express = require("express");
const app = express();
const signIn = require('./server/routers/signIn')

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', signIn);
app.listen(3000, function () {
    console.log("listen 3000!!");
})
