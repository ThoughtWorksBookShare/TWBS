var fs = require('fs');
const cn = require('./connect');

function addBook(req, callback) {
    const path = './public/images/bookPic/';
    const imageDateUrl = req.body.imageDateUrl;
    const bookName = req.body.bookName;
    const bookAuthor = req.body.bookAuthor;
    const bookIntroduction = req.body.bookIntroduction;
    const bookOwner = '';
    const bookStatus = false;
    const bookComments = [];

    if (imageDateUrl && typeof imageDateUrl === 'string') {
        const bookPicture = addBookPic(path, imageDateUrl, bookName, bookAuthor);
        cn.MongoClient.connect(cn.url, (err, db)=> {
            const collection = db.collection('books');
            collection.insertOne({
                bookPicture, bookName, bookAuthor,
                bookIntroduction, bookOwner, bookStatus, bookComments
            });
        })

    } else {
        console.log('没有图片数据');
    }

}

function addBookPic(path, imageDateUrl, bookName, bookAuthor) {
    const regex = /^data:.+\/(.+);base64,(.*)$/;
    const matches = imageDateUrl.match(regex);
    const imgExt = matches[1];
    const imgData = matches[2];
    const currentDate = getNowFormatDate();
    const imgName = bookName + bookAuthor + currentDate;
    const buffer = new Buffer(imgData, 'base64');
    const bookSrc = path + imgName + '.' + imgExt;


    fs.stat(path, function (err, stat) {
        if (!(stat && stat.isDirectory())) {
            console.log('创建image文件夹');
            fs.mkdir(path, function (err) {
                if (err) console.log('创建失败！');
                else console.log('创建成功！');
            });
        } else {
            console.log("public/images/bookPic已存在");

        }

        if (fs.exists(path)) {

            fs.unlink(path + imgName + '.' + imgExt, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("文件删除成功！");
            });
        }

        fs.open(bookSrc, 'w', function (err, fd) {
            if (err) {
                console.error(err);
                return;
            } else {
                fs.writeFile(path + imgName + '.' + imgExt, buffer);
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("文件关闭成功！");
                });
            }
        });
    });

    return bookSrc;
}

function getNowFormatDate() {
    const date = new Date();
    const dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
    const currentDate = dateArr.map((e)=> e < 10 ? ("0" + e) : e).join('');

    return currentDate;
}

module.exports = addBook;
