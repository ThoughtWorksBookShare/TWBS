import React,{Component} from 'react';

export default class Personal extends Component{
    render(){
        return(
            <div>
                <Sidebar/>
            </div>
        )
    }
}

class Sidebar extends Component{
    render(){
        return (
            <div id="sideBar">
                <div><button>个人信息</button></div>
                <div><button>我的书库</button></div>
                <div><button>我想看的书</button></div>
                <div><button>我的评论</button></div>
            </div>
        )
    }
}
