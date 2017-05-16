import React, {Component} from 'react';
import "!style-loader!css-loader!./../../style/header.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Head/>
            </div>
        )
    }
}

class Head extends Component {
    render() {

        let userName;
        const cookies = document.cookie.split("; ");
        cookies.find((val) => {
            const user = val.split("=");
            if (user[0] === "user") {
                userName = user[1];
            }
        });

        return (
            <div id="head">
                <div id="logo" className="head">
                    <img src="../../images/logo.jpg"/>
                </div>
                <div id="headName" className="head">
                    <h1>TWBS</h1>
                </div>
                <Nav/>
                <div id="user" className="head">
                    <div id="headPortrait" className="headUser">
                        <img src="../../images/user.jpg"/>
                    </div>
                    <div className="headUser">
                        <h5>{userName}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <div id="nav" className="head">
                <div className="nav">
                    书库
                </div>
                <div className="nav">
                    精评
                </div>
                <div className="nav">
                    想看的书
                </div>
                <div className="nav">
                    个人中心
                </div>
            </div>
        )
    }
}