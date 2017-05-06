import "!style-loader!css-loader!./../../style/signIn.css";
import React from "react";
import {Link} from 'react-router'

class SignIn extends React.Component {
    sign() {
        const inputName = this.refs.name.value;
        const inputPass = this.refs.pass.value;
        this.props.verifyInfo(inputName, inputPass);
    }

    setTip() {
        let tagStr = "登录成功";
        if (this.props.exist === false) {
            tagStr = "用户名或密码错误";
        }
        document.getElementById('tag').innerHTML = tagStr;
    }

    render() {

        return <div id="sign">
            <h1>TWBS</h1>
            <div id='op'></div>
            <div className="input">
                <div className="in"><img src="../../images/person.png" alt=""/><input type="text" id="in1" ref="name"
                                                                                      onBlur={this.sign.bind(this)}
                                                                                      placeholder="name"/></div>
                <div className="in"><img src="../../images/password.png" alt=""/><input type="password" id="in2"
                                                                                        ref="pass"
                                                                                        onBlur={this.sign.bind(this)}
                                                                                        placeholder="password"/>
                    <div id='tag'></div>
                </div>

                <div id="outclick"><img src="../../images/click.png" alt=""/>
                    <button className="in" id="click" onClick={this.setTip.bind(this)}>signin</button>
                </div>
                <div id="aa">
                    <Link to="/signUp" id="up">signUp</Link>
                    <Link to="z" id="forget">forgotPassword</Link>
                </div>

            </div>

        </div>
    }
}

module.exports = SignIn;