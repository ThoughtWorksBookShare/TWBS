var fs = require('fs');
const cn = require('./connect');

function addBook(req, callback) {
    let path = './public/images/bookPic/';

    let imageDateUrl = req.body.imageDateUrl;
    if (imageDateUrl && typeof imageDateUrl === 'string') {

        let regex = /^data:.+\/(.+);base64,(.*)$/;
        let matches = imageDateUrl.match(regex);
        let imgExt = matches[1];
        console.log(imgExt);
        let imgData = matches[2];
        let imgName = 'imgname';
        let buffer = new Buffer(imgData, 'base64');

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

            fs.open(path + imgName + '.' + imgExt, 'w', function (err, fd) {
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


    } else {
        console.log('没有图片数据');
    }

}

module.exports = addBook;
