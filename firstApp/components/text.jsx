import React from 'react';

export default class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'React is fun',
            flag: false
        };
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.text}</h3>
                <div
                    onClick = {
                        (evt) => {
                            var text;
                            if (this.state.flag) {
                                text = 'React is fun';
                            } else {
                                text = 'React is NOT fun'
                            }
                            this.setState({
                                text: text,
                                flag: !this.state.flag
                            });
                        }
                    }
                >
                    Click Me
                </div>
            </div>
        );
    }
}