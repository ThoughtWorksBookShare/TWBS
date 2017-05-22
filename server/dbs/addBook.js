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
        const bookPicture = addBookPic(path,imageDateUrl,bookName,bookAuthor);
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

function addBookPic(path,imageDateUrl,bookName,bookAuthor) {
    let regex = /^data:.+\/(.+);base64,(.*)$/;
    let matches = imageDateUrl.match(regex);
    let imgExt = matches[1];
    let imgData = matches[2];
    let imgName = bookName + bookAuthor;
    let buffer = new Buffer(imgData, 'base64');
    let bookImg = imgName + '.' + imgExt;
    const bookSrc = path + bookImg;


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

            fs.unlink(bookSrc, function (err) {
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
                fs.writeFile(bookSrc, buffer);
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("文件关闭成功！");
                });
            }
        });
    });

    return '../../images/bookPic/'+bookImg;
}

module.exports = addBook;
