const cn = require('./connect');

function getPersonalInformation(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db) => {
        const collection = db.collection("users");
        collection.find({}).toArray((err, result) => {
            callback(result[0]);
        })
    })
}

module.exports = getPersonalInformation;