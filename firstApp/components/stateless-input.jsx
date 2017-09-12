import React from 'react';

export default class StatelessInput extends React.Component {
    render() {
        return (
            <input
                type = "text"
                value = {this.props.value}
                onChange = {
                    (evt) => {
                        this.props.changeHandler(evt.target.value)
                    }
                }
            />
        );
    }
}