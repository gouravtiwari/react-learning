import * as React from 'react';
import * as Immutable from 'immutable';

import Form from './form.jsx';
import List from './list.jsx';

interface AppProps {
    nameEntry: string;
    nameList: Immutable.List<string>;
    appChangeName: any;
    appUpdateList: any;
}

export default class App extends React.Component<AppProps, {}> {
    render(): JSX.Element {
        return (
            <div className = "app">
                <h1>User registration</h1>
                <Form
                    nameEntry = {this.props.nameEntry}
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