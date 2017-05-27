import React, {Component} from "react";
import {Link} from "react-router";

export default class AddBook extends Component {
    componentDidMount() {
        if (!this.getCookieUser()) {
            window.location = "#/";
        }
    }

    getImg() {
        let files = this.imgFile.files;

        if (files) {
            [].forEach.call(files, readAndPreview.bind(this));
        }

        function readAndPreview(file) {

            // Make sure `file.name` matches our extensions criteria
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                let reader = new FileReader();
                reader.readAsDataURL(file);

                reader.addEventListener("load", ()=> {
                    let image = new Image();
                    image.height = 100;
                    image.title = file.name;
                    image.src = reader.result;
                    this.preview.appendChild(image);

                    let imgdataUrl = reader.result;
                    this.props.getImgData(imgdataUrl);
                }, false);
            }

        }
    }

    submitBook() {
        let imageDateUrl = this.props.imgdataUrl;
        let bookName = this.bookName.value;
        let bookAuthor = this.bookAuthor.value;
        let bookIntroduction = this.bookIntroduction.value;
        let bookOwner = this.getCookieUser();

        console.log(this.bookName.value.length + "______name");
        if (this.imgFile.value === "" || this.bookName.value === ""
            || this.bookAuthor.value === "" || this.bookIntroduction.value === "") {
            this.tip.innerHTML = "信息不完整，请补充！"
        }
        else if (this.bookName.value.length >= 20 || this.bookAuthor.value >= 20 || this.bookIntroduction.value >= 100) {
            this.tip.innerHTML = "信息过长，请删减！"
        }
        else {
            this.props.updateBookMessage(imageDateUrl, bookName, bookAuthor, bookIntroduction, bookOwner);
        }
    }

    getCookieUser() {
        let bookOwner;
        let allCookies = document.cookie.split("; ");
        allCookies.forEach((val) => {
            let cookie = val.split("=");
            let cookieName = cookie[0];
            let cookieValue = cookie[1];
            if (cookieName === "user") {
                bookOwner = cookieValue;
            }
        });
        return bookOwner;
    }

    setTip() {
        let result = this.props.result;
        if (this.tip) {
            if (result === 'success') {
                this.tip.innerHTML = '您已提交成功';
                setTimeout(function () {
                    window.location.href = '#/books';
                }, 1000)
            }

            if (result === 'fail') {
                this.tip.innerHTML = '失败，请重试'
            }
        }

    }

    render() {
        return (
            <div>
                <div className="addBook">
                    <input type="file" id="imgFile" name="file" ref={(c) => this.imgFile = c}
                           onChange={this.getImg.bind(this)}/>
                    <div id="preview" ref={(c) => this.preview = c}></div>
                    <div className="msgInput">
                        <span>书名</span>
                        <input id="bookName" placeholder="请输入20字以内的书名" ref={(c) => this.bookName = c}/>
                    </div>
                    <div className="msgInput">
                        <span>作者</span>
                        <input id="bookAuthor" placeholder="请输入20字以内的作者名" ref={(c) => this.bookAuthor = c}/>
                    </div>
                    <div className="msgInput">
                        <div className="bookIntro">简介</div>
                        <div><textarea placeholder="请输入100字以内的简介" rows="5" cols="23" id="bookIntroduction"
                                       ref={(c) => this.bookIntroduction = c}/>
                        </div>
                    </div>

                    <div id="tip" ref={(c) => this.tip = c}></div>
                    <button type="submit" id="submit" onClick={this.submitBook.bind(this)}>提交</button>
                    {this.setTip()}
                    <Link to="/books">
                        <button id="cancel">取消</button>
                    </Link>
                </div>
            </div>
        );
    }
};

