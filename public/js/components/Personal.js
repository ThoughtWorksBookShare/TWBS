import React, {Component} from 'react';
import "!style-loader!css-loader!./../../style/personal.css";
import {Link} from 'react-router';

export default class Personal extends Component {

    render() {

        return (
            <div id="personal">
                <div id="personalSideBar">
                    <Sidebar/>
                </div>
                <div id="personalRightBar">{this.props.children}</div>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {

        return (
            <div id="sideBar">
                <div className="sideBarButton">
                    <Link to="personal"><span>个人信息</span></Link>
                </div>
                <div className="sideBarButton">
                    <Link to="personal/myBooks"><span>我的书库</span></Link>
                </div>
                <div className="sideBarButton">
                    <Link to="personal/myWantedBooks"><span>我想看的书</span></Link>
                </div>
                <div className="sideBarButton">
                    <Link to="personal/myComments"><span>我的评论</span></Link>
                </div>
            </div>
        )
    }
}
