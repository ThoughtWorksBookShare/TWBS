const express = require("express");
const app = express();
const signIn = require('./server/routers/signIn');
const signUp = require('./server/routers/signUp');
const addBook = require('./server/routers/addBook');
const showBooks = require('./server/routers/showBooks');
const getBook = require('./server/routers/getBook');
const addBookComment = require('./server/routers/addBookComment');
const showComments = require('./server/routers/showComments');
const addDesiredBook = require('./server/routers/addDesiredBook');
const getWantedBooks = require("./server/routers/getWantedBooks");
const changeCount = require("./server/routers/changeCount");
const getPersonalInformation = require("./server/routers/getPersonalInformation");

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use('/', signIn);
app.use('/', signUp);
app.use('/', addBook);
app.use('/', showBooks);
app.use('/', getBook);
app.use('/', addBookComment);
app.use('/', showComments);
app.use('/', addDesiredBook);
app.use('/', getWantedBooks);
app.use('/',changeCount);
app.use('/', getPersonalInformation);

app.listen(3000, function () {
    console.log("listen 3000!!");
});
