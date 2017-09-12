import React from 'react';

export default class Input extends React.Component {
    getLabel() {
        return '';
    }
    
    render() {
        return (
            <div>
                <span>{this.getLabel()}</span>
                <input 
                    type = 'text'
                    value = {this.props.value}
                    onChange = {
                        (evt) => {
                            this.props.changeHandler(evt.target.value)
                        }
                    }
                />
            </div>
        )
    }
}