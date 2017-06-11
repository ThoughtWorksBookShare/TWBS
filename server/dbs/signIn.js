const cn = require('./connect');

function verifyInfo(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db)=> {
        const collection = db.collection('users');
        collection.find({"personalMessage.name": req.body.inputName}).toArray((err, result)=> {
            let flag = false;
            if (result.length > 0 && result[0].personalMessage.password == req.body.inputPass) {
                flag = true;
            }
            callback(flag);
        })

    })
}

module.exports = verifyInfo;