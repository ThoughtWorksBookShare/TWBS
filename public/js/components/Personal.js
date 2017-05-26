import React, {Component} from 'react';
import "!style-loader!css-loader!./../../style/personal.css";
import {Link} from 'react-router';

export default class Personal extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                {this.props.children}
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div id="sideBar">
                <div className="sideBarButton">
                    <span>个人信息</span>
                </div>
                <div className="sideBarButton">
                    <Link to="personal/myBooks"> <span>我的书库</span> </Link>
                </div>
                <div className="sideBarButton">
                    <span>我想看的书</span>
                </div>
                <div className="sideBarButton">
                    <span>我的评论</span>
                </div>
            </div>
        )
    }
}
