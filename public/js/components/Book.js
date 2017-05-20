import React, {Component} from "react";

export default class Book extends Component {
    componentWillMount(){
        const url = (window.location.href);
        const parms = url.split(":");
        const parmId = parms[parms.length - 1];
        this.props.getBookInfo(parmId);
    }
    render() {
        return (
            <div>
                <div className="bookInfo">
                    <div className="bookPicture">
                        <img src={this.props.book.bookPicture}/>
                    </div>
                    <div className="bookName">
                        <h3>{this.props.book.bookName}</h3>
                    </div>
                </div>
                <div className="bookInfo">
                    <div className="author">
                        <span>作者：{this.props.book.author}</span>
                    </div>
                    <div className="introduction">
                        <span>简介：{this.props.book.introduction}</span>
                    </div>
                    <div className="bookOwner">
                        <span>书主：{this.props.book.bookOwner}</span>
                    </div>
                    <div className="status">
                        <span>状态：{this.props.book.status}</span>
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
