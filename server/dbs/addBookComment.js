const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function addBookComment(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db) => {
        const booksCollection = db.collection("books");
        const commentsCollection = db.collection("comments");
        const whereStr = {"_id": ObjectID(req.body.needComment.id)};
        const dateTime = new Date();
        const time = dateTime.toLocaleString();
        booksCollection.findOne(whereStr, (err, result) => {
            result.bookComments.push(req.body.needComment.comment);
            booksCollection.save(result);
            callback(result);
        });
        commentsCollection.insertOne({
            bookId: req.body.needComment.id,
            comment: req.body.needComment.comment,
            time: time
        }, (err, result) => {
            if (err) {
                console.log("error");
            }
        })
    })
}

module.exports = addBookComment;