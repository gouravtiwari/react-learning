import React from 'react';

export default class Greet extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>from {this.props.from}</h2>
            </div>
        );
    }
}