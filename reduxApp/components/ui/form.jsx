import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div className = "form">
                <input
                    className = "form-control"
                    type = "text"
                    value = {this.props.nameEntry}
                    onChange = {
                        (evt) => this.props.changeName(evt.target.value)
                    }
                />
                <input
                    className = "form-control"
                    type = "button"
                    value = "Add Name"
                    onClick = {
                        (evt) => this.props.updateList(this.props.nameEntry)
                    }
                />
            </div>
        )
    };
}