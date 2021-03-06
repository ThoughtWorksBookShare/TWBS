const ObjectID = require('mongodb').ObjectID;
const cn = require('./connect');

function getBook(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db) => {
        const collection = db.collection('books');
        collection.find({_id: ObjectID(req.body.bookId)}).toArray((err, result) => {
            callback(result[0]);
        })
    })
}

module.exports = getBook;