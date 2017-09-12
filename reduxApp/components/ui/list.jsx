import React from 'react';

export default class List extends React.Component {
    render() {
        return(
            <div>
                <h1>Name list</h1>
                <ul>
                    {
                        this.props.nameList.map(
                            (name) => 
                                <li key = {name}>
                                    {name}
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    };
}