const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function changeCount(req, callBack) {
    const id = req.body._id;
    const user = req.body.user;
    let flag = false;
    let bookPicture = "";
    let bookName = "";
    let bookAuthor = "";

    cn.MongoClient.connect(cn.url, (err, db) => {
        const wantedBooksCollection = db.collection('wantedBooks');
        const userCollection = db.collection('users');
        let isExistDesiredBook = false;

        wantedBooksCollection.findOne({_id: ObjectID(id)}, (err, result) => {
            bookName = result.desiredBookName;
            bookPicture = result.bookPicture;
            bookAuthor = result.desiredBookAuthor;

            userCollection.find({name: user}).toArray((err, result)=> {
                let myWantedBooks = result[0].myWantedBooks;

                if (!result[0].myWantedBooks) {
                    myWantedBooks = [];

                    userCollection.updateOne({name: user}, {
                        $set: {
                            "myWantedBooks": []
                        }
                    });
                }

                myWantedBooks.forEach((ele)=> {
                    if (ele.bookPicture === bookPicture) {
                        isExistDesiredBook = true;
                    }
                });

                if (isExistDesiredBook) {
                    wantedBooksCollection.find({}).toArray((err, result) => {
                        callBack(result);
                    })
                }
                else {
                    userCollection.updateOne({name: user}, {
                        $push: {
                            "myWantedBooks": {bookPicture, bookName, bookAuthor}
                        }
                    });

                    wantedBooksCollection.updateOne({_id: ObjectID(id)}, {$inc: {"count": 1}}, (err, result) => {

                        wantedBooksCollection.find({}).toArray((err, result) => {
                            callBack(result);
                        })
                    })
                }
            });

        });


    })
}

module.exports = changeCount;