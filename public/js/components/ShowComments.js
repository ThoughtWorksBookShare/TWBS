import React, {Component} from 'react';

export default class Commments extends Component {
    render() {
        return (
            <div>
                <div className="user">
                    <div className="headUser" id="headPortrait"><img src="../../images/user.jpg"/></div>
                    <div>用户名</div>
                </div>
                <div className="commentsInformation">
                    <div>自控力</div>
                    <div className="bookPicture"><img src="../../images/logo.jpg"/></div>
                    <div><p>白颖嘿嘿嘿</p></div>
                    <div>时间</div>
                    <div>点赞哦</div>
                </div>
            </div>
        )
    }
}