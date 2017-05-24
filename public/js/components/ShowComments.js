import React, {Component} from 'react';

export default class Commments extends Component {
    componentWillMount() {
        this.props.showComments();
    }

    render() {
        const comments = this.props.comments.map((val, index) => {
            return <div key={index} className="commentsInformation">
                <div>{val.bookName}</div>
                <div className="bookPicture"><img src={val.bookPicture}/></div>
                <div><p>{val.comment}</p></div>
                <div>{val.time}</div>
            </div>
        });
        return (
            <div>
                <div className="user">
                    <div className="headUser" id="headPortrait"><img src="../../images/user.jpg"/></div>
                    <div>用户名</div>
                </div>
                <div>
                    {comments}
                </div>
            </div>
        )
    }
}