import React, {Component} from "react";
import {Link} from "react-router";

export default class AddDesiredBook extends Component {
    componentDidMount() {
        if(!this.getCookieUser()){
            window.location = "#/";
        }
    }

    getCookieUser() {
        let user;
        let allCookies = document.cookie.split("; ");
        allCookies.forEach((val) => {
            let cookie = val.split("=");
            let cookieName = cookie[0];
            let cookieValue = cookie[1];
            if (cookieName === "user") {
                user = cookieValue;
            }
        });
        return user;
    }

    getImg() {
        let files = this.desiredBookImgFile.files;

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
                    this.desiredBookPreview.appendChild(image);

                    let imgdataUrl = reader.result;
                    this.props.getDesiredImgData(imgdataUrl);
                }, false);
            }

        }
    }

    submitBook() {
        let imageDateUrl = this.props.imgdataUrl;
        let desiredBookName = this.desiredBookName.value;
        let desiredBookAuthor = this.desiredBookAuthor.value;
        let user = this.getCookieUser();

        if (this.desiredBookImgFile.value === "" || this.desiredBookName.value === ""
            || this.desiredBookAuthor.value === "") {
            this.desiredBookTip.innerHTML = "信息不完整，请补充！"
        } else {
            this.props.updateDesiredBookMessage(imageDateUrl, desiredBookName, desiredBookAuthor, user);
        }
    }

    setTip() {
        let result = this.props.result;
        if (this.desiredBookTip) {
            if (result === 'success') {
                this.desiredBookTip.innerHTML = '您已提交成功';
                setTimeout(function () {
                    window.location.href = '#/wantedBooks';
                }, 1000)
            }

            if (result === 'fail') {
                this.desiredBookTip.innerHTML = '失败，请重试'
            }
        }

    }

    render() {
        return (
            <div className="addDesiredBook">
                <input type="file" name="file" ref={(c) => this.desiredBookImgFile = c}
                       onChange={this.getImg.bind(this)}/>
                <div ref={(c) => this.desiredBookPreview = c}></div>
                <div className="msgInput"><span>书名</span><input ref={(c) => this.desiredBookName = c}/></div>
                <div className="msgInput"><span>作者</span><input ref={(c) => this.desiredBookAuthor = c}/></div>
                <div ref={(c) => this.desiredBookTip = c}></div>
                <button type="submit" id="submit" onClick={this.submitBook.bind(this)}>提交</button>
                {this.setTip()}
                <Link to="/wantedBooks">
                    <button>取消</button>
                </Link>
            </div>
        )
    }
}