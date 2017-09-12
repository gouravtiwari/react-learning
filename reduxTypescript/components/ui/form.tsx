import * as React from 'react';
import * as Immutable from 'immutable';

interface FormProps {
    nameEntry: string;
    changeName: any;
    updateList: any;
}

export default class Form extends React.Component<FormProps, {}> {
    handleClick() {
        this.props.changeName('');
        this.props.updateList(this.props.nameEntry);
    }
    
    handleChange(evt: any) {
        this.props.changeName(evt.target.value);
    }
    
    render(): JSX.Element {
        return (
            <div className = "form">
                <input
                    className = "form-control"
                    type = "text"
                    value = {this.props.nameEntry}
                    onChange = {this.handleChange.bind(this)}
                />
                <input
                    className = "form-control"
                    type = "button"
                    value = "Add Name"
                    onClick = {this.handleClick.bind(this)}
                />
            </div>
        )
    };
}