import React from 'react';
import * as Immutable from 'immutable';

interface ListProps {
    nameList: Immutable.List<string>;
}

export default class List extends React.Component<ListProps, {}> {
    formNameList(): Array<JSX.Element> {
        return this.props.nameList.map(
            (name) => <li key = {name}>{name}</li>
        ).toArray();
    }
    
    render(): JSX.Element {
        return(
            <div>
                <h1>Name list</h1>
                <ul>{this.formNameList()}</ul>
            </div>
        );
    };
}