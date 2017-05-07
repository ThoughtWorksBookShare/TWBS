const cn = require('./connect');

function AddInfo(req, callback) {
    let flag;
    cn.MongoClient.connect(cn.url, (err, db)=> {
        const collection = db.collection('users');
        collection.find({name: req.body.name}).toArray((err, res)=> {

            if (res.length > 0) {
                flag = false;
            }
            else {
                collection.insert({name: req.body.name, password: req.body.password}, (err, res)=> {
                    if (res.result.ok == 1) {
                        flag = true;
                    }
                    callback(flag);
                })
            }

        });

    });
}

module.exports = AddInfo;