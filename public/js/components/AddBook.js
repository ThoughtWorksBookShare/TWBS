import React, {Component} from "react";
import {Link} from "react-router";

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

    submitBook() {
        let imageDateUrl = this.props.imgdataUrl;
        let bookName = this.bookName.value;
        let bookAuthor = this.bookAuthor.value;
        let bookIntroduction = this.bookIntroduction.value;
        if (document.getElementById("imgFile").value === "" || document.getElementById("bookName").value === ""
            || document.getElementById("bookAuthor").value === "" || document.getElementById("bookIntroduction").value === "") {
            this.refs.tip.innerHTML = "信息不完整，请补充！"
        } else {
            this.props.updateBookMessage(imageDateUrl, bookName, bookAuthor, bookIntroduction);
        }
    }

    setTip() {
        let result = this.props.result;
        if(this.refs.tip){
            if (result === 'success') {
                this.refs.tip.innerHTML = '您已提交成功';
                setTimeout(function () {
                    window.location.href = '#/books';
                },1000)
            }

            if (result === 'fail') {
                this.refs.tip.innerHTML = '失败，请重试'
            }
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

                <div id="tip" ref='tip'></div>
                <button type="submit" id="submit" onClick={this.submitBook.bind(this)}>提交</button>
                {this.setTip()}
                <Link to="/books"><button id="cancel">取消</button></Link>
            </div>
        );
    }
};

