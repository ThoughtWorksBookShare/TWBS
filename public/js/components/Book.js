import React, {Component} from "react";

export default class Book extends Component {
    componentWillMount() {
        const url = (window.location.href);
        const parms = url.split(":");
        const parmId = parms[parms.length - 1];
        this.props.getBookInfo(parmId);
    }

    render() {
        const book = this.props.book;
        let status = "";

        if (!book.status) {
            status = "未借出";
        }
        else {
            status = "已借出";
        }

        return (
            <div>
                <div className="bookInfo">
                    <div className="bookPicture">
                        <img src={book.bookPicture}/>
                    </div>
                    <div className="bookName">
                        <h3>{book.bookName}</h3>
                    </div>
                </div>
                <div className="bookInfo">
                    <div className="author">
                        <span>作者：{book.bookAuthor}</span>
                    </div>
                    <div className="introduction">
                        <span>简介：{book.bookIntroduction}</span>
                    </div>
                    <div className="bookOwner">
                        <span>书主：{book.bookOwner}</span>
                    </div>
                    <div className="status">
                        <span>状态：{status}</span>
                    </div>
                </div>
                <div className="comments">
                    <div className="writeComment">
                        <input type="text"/>
                        <button>评论</button>
                    </div>
                    <div className="commentsList">
                        <div className="comment">
                            <div id="headPortrait">
                                <img src="../../images/user.jpg"/>
                            </div>
                            <p>评论信息</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
