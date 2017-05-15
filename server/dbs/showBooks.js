const cn = require('./connect');

function showBooks(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db)=> {
        const collection = db.collection("books");
        collection.find({}).toArray((err, result)=> {
            callback(result);
        })
    })
}

module.exports = showBooks;