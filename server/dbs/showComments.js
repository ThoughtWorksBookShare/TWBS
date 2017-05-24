const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function showComments(callback) {
    cn.MongoClient.connect(cn.url, (err, db) => {
        const commentsCollection = db.collection("comments");
        const booksCollection = db.collection("books");

        commentsCollection.find({}).toArray((err, result) => {
            for (let i = 0; i < result.length; i++) {
                booksCollection.findOne({_id: ObjectID(result[i].bookId)}, {
                    bookPicture: "",
                    bookName: "",
                    _id: 0
                }, (err, res) => {
                    result[i].bookPicture = res.bookPicture;
                    result[i].bookName = res.bookName;
                    if (i === result.length - 1) {
                        callback(result);
                    }
                });
            }
        })
    })
}

module.exports = showComments;