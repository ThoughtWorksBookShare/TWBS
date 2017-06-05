import React, {Component} from 'react';

export default class PersonalInformation extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.personalInformation.personalMessage.name}
                </div>
               <div>
                  <img src={this.props.personalInformation.personalMessage.headPortrait}/>
               </div>
            </div>
        )
    }
}
