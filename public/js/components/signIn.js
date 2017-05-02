import"!style-loader!css-loader!./../../style/signIn.css";
import React from "react";

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

        return <div className="input">
                <p>name:<input type="text" ref="name" onBlur={this.sign.bind(this)}/></p>
                <br/><br/>
                <p>password:<input type="text" ref="pass" onBlur={this.sign.bind(this)}/></p>
                <p id='tag'></p>
                <br/>
                <button className="click" onClick={this.setTip.bind(this)}>登录</button>
            </div>
    }
}

module.exports = SignIn;