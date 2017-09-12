import React from 'react';

import Greet from './greet.jsx';
import Text from './text.jsx';
import Input from './input.jsx';
import StatelessInput from './stateless-input.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'attendance sheet'
        };
    }
    
    updateInputValue(value) {
        this.setState({
            inputValue: value
        });
    }
    
    render() {
        var firstName = 'John'
        var lastName = 'Smith'
        return (
            <div>
                <Greet
                    name = {firstName + ' ' + lastName}
                    from = 'Stanford'
                />
                <Text/>
                <Input/>
                <StatelessInput
                    value = {this.state.inputValue}
                    changeHandler = {this.updateInputValue.bind(this)}
                />
            </div>
        );
    }
}