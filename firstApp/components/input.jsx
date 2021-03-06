import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Welcome to UC Extension'
        };
    }
    
    render() {
        return (
            <input 
                type = 'text'
                value = {this.state.text}
                onChange = {
                    (evt) => {
                        console.log(evt.target.value);
                        this.setState({
                            text: evt.target.value
                        });
                    }
                }
            />
        )
    }
}