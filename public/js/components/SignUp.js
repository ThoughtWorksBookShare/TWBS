import "!style-loader!css-loader!./../../style/signUp.css";
import React, {Component} from "react";

export  default class SignUp extends Component {
    vertifyName() {
        var name = this.refs.inputName.value;
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(name))) {
            this.refs.tag1.innerHTML = '请输入正确的电话号';
            this.refs.inputName.focus();
        }
        else {
            this.refs.tag1.innerHTML = "";
            this.refs.inputPass.focus();

        }
    }

    vertifyPassword() {
        var password = this.refs.inputPass.value;
        if (!(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,12})$/).test(password)) {
            this.refs.tag2.innerHTML = '请输入6到12位的数字字母组合密码';
            this.refs.inputPass.focus();

        }
        else {
            this.refs.tag2.innerHTML = '';
            this.refs.inputPass1.focus();
        }
    }

    vertifyPassword1() {

        var password = this.refs.inputPass.value;
        var password1 = this.refs.inputPass1.value;
        if (password != password1) {
            this.refs.tag3.innerHTML = "和第一次所输密码不符,请重新输入";
            this.refs.inputPass1.focus();
        }
        else {
            this.refs.tag3.innerHTML = "";
        }

    }

    signUp() {
        var name = this.refs.inputName.value;
        var password = this.refs.inputPass.value;
        var password1 = this.refs.inputPass1.value;

        if (name && password && password1 && (password === password1)) {
            this.props.handleData(name, password);
        }
        else {
            this.refs.tag3.innerHTML = "用户名和密码输入有误,请重新输入";
            setTimeout(()=> {
                this.refs.tag3.innerHTML = "";
            }, 4000)
        }
    }

    turnPage() {
        if (this.props.signUp === true) {
            window.location.href = '/';
        }
        else if (this.props.signUp === false) {
            this.refs.tag3.innerHTML = '该账号已存在请重新注册';
        }
    }

    render() {
        return <div id='signUp'>
            <div id="signUp-in">
                <div className="up-input"><input type="text" id="input1" ref='inputName' placeholder="请用正确的手机号注册"
                                                 onBlur={this.vertifyName.bind(this)}/>
                    <div id="tag1" ref='tag1'></div>
                </div>
                <div className="up-input"><input type="password" id="input2" ref="inputPass" placeholder="请设置密码"
                                                 onBlur={this.vertifyPassword.bind(this)}/>
                    <div id="tag2" ref="tag2"></div>
                </div>
                <div className="up-input"><input type="password" id="input3" ref="inputPass1"
                                                 placeholder="请再次确认密码"
                                                 onBlur={this.vertifyPassword1.bind(this)}/>
                    <div id="tag3" ref='tag3'></div>
                </div>
                <button className="up-input" onClick={this.signUp.bind(this)}>signUp</button>
                {this.turnPage()}
            </div>
        </div>
    }
}
