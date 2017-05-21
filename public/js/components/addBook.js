import React, {Component} from "react";

export default class Test extends Component {
    getImg() {
        let preview = document.getElementById('preview');
        let files = document.getElementById("imgFile").files;
        let imgdataUrl = '';

        if (files) {

            [].forEach.call(files, readAndPreview);

            setTimeout(function () {
                this.props.getImgData(imgdataUrl);
            }.bind(this), 1000);
        }

        function readAndPreview(file) {

            // Make sure `file.name` matches our extensions criteria
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                var reader = new FileReader();

                reader.addEventListener("load", function () {
                    var image = new Image();
                    image.height = 100;
                    image.title = file.name;
                    image.src = this.result;
                    imgdataUrl = this.result;
                    preview.appendChild(image);
                }, false);
                reader.readAsDataURL(file);
            }

        }
    }

    submitImg() {
        let imageDateUrl = this.props.imgdataUrl;
        let bookName = this.bookName.value;
        let bookAuthor = this.bookAuthor.value;
        let bookIntroduction = this.bookIntroduction.value;
        if (document.getElementById("imgFile").value === "" || document.getElementById("bookName").value === ""
            || document.getElementById("bookAuthor").value === "" || document.getElementById("bookIntroduction").value === "") {
            alert("信息不完整，请补充");
        } else {
            this.props.updateBookMessage(imageDateUrl, bookName, bookAuthor, bookIntroduction);
        }
    }

    render() {
        return (
            <div>
                <input type="file" id="imgFile" name="file" onChange={this.getImg.bind(this)}/>
                <div id="preview"></div>
                <div><span>书名</span><input id="bookName" ref={(c) => this.bookName = c}/></div>
                <div><span>作者</span><input id="bookAuthor" ref={(c) => this.bookAuthor = c}/></div>
                <div>
                    <div>简介</div>
                    <textarea rows="5" cols="23" id="bookIntroduction" ref={(c) => this.bookIntroduction = c}/>
                </div>
                <button type="submit" id="submit" onClick={this.submitImg.bind(this)}>提交</button>
                <button id="cancel">取消</button>
            </div>
        );
    }
};

