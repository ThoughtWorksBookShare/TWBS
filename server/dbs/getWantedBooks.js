const cn = require('./connect');

function getWantedBooks(req, callBack) {
    cn.MongoClient.connect(cn.url, (err, db) => {
        const wantedBooksCollection = db.collection('wantedBooks');
        wantedBooksCollection.find({}).toArray((err, result) => {
            let flag = [];
            if (result) {
                flag = result;
            }
            callBack(flag);

        })
    })
}

module.exports = getWantedBooks;