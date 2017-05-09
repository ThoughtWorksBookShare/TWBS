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
        var imageDateUrl = this.props.imgdataUrl;

        if (!document.getElementById("imgFile").files) {
            alert("no")
        }else {
            this.props.updateBookMessage(imageDateUrl);
        }
    }
    render() {
        return (
            <div>
                <input type="file" id="imgFile" name="file" onChange={this.getImg.bind(this)}/>
                <div id="preview"></div>
                <button type="submit" id="submit" onClick={this.submitImg.bind(this)}>提交</button>
            </div>
        );
    }
};

