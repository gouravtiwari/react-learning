import React from 'react';

import Form from './form.jsx';
import List from './list.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className = "app">
                <h1>User registration</h1>
                <Form
                    nameEntry = {this.props.nameEntry}
                    nameList = {this.props.nameList}
                    changeName = {this.props.appChangeName}
                    updateList = {this.props.appUpdateList}
                />
                <List
                    nameList = {this.props.nameList}
                />
            </div>
        )
    };
}