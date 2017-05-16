import React, {Component} from 'react';

export default class Book extends Component {
    render() {
        return (
            <div>
                <div className="bookInfo">
                    <div className="bookPicture">
                        <img src="../../images/book1.jpg"/>
                    </div>
                    <div className="bookName">
                        <h3>自控力</h3>
                    </div>
                </div>
                <div className="bookInfo">
                    <div className="author">
                        <span>作者：</span>
                    </div>
                    <div className="introduction">
                        <span>简介：</span>
                    </div>
                    <div className="bookOwner">
                        <span>书主：</span>
                    </div>
                    <div className="status">
                        <span>状态：</span>
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
