import React,{Component} from 'react';

export default class WantedBooks extends Component{

    turn(){
        window.location = "#/wantedBooks/addDesiredBook";
    }
    render(){
        return(
            <div>
               <button className="uploadDesiredBook" onClick={this.turn}>我还想看</button>
            </div>
        )
    }
}
