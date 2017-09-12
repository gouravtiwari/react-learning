import React from 'react';

import LabelInput from './label-input.jsx';
import Submit from './submit.jsx';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };
    }
    
    updateFirstName(value) {
        this.setState({
           firstName: value 
        });
    }
    
    updateLastName(value) {
        this.setState({
           lastName: value 
        });
    }    
    
    render() {
        return(
            <div>
                <LabelInput
                    label = "Given Name"
                    value = {this.state.firstName}
                    changeHandler = {this.updateFirstName.bind(this)}
                />
                <LabelInput
                    label = "Last Name"
                    value = {this.state.lastName}
                    changeHandler = {this.updateLastName.bind(this)}
                />
                <Submit
                    fullName = {this.state.firstName + ' ' + this.state.lastName}  
                />
            </div>
        )
    }
}