const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function addBookComment(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db) => {
        const collection = db.collection("books");
        const whereStr = {"_id": ObjectID(req.body.needComment.id)};
        collection.findOne(whereStr, (err, result) => {
            result.bookComments.push(req.body.needComment.comment);
            collection.save(result);
            callback(result);
        })
    })
}

module.exports = addBookComment;