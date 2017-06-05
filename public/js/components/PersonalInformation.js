import React, {Component} from 'react';

export default class PersonalInformation extends Component {
    componentWillMount() {
        this.props.showPersonalInformation();
    }

    render() {
        {
            console.log(this.props.personalInformation)
        }

        if (!this.props.personalInformation) {
            return false;
        }

        return (
            <div>
                {this.props.personalInformation.personalMessage.name}
            </div>
        )
    }
}
