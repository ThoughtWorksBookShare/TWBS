const express = require("express");
const app = express();
const signIn = require('./server/routers/signIn');
const signUp =  require('./server/routers/signUp');
const addBook =  require('./server/routers/addBook');
const showBooks = require('./server/routers/showBooks');

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', signIn);
app.use('/',signUp);
app.use('/',addBook);
app.use('/',showBooks);

app.listen(3000, function () {
    console.log("listen 3000!!");
});
