import React from 'react';

import LabelInput from './label-input.jsx';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <LabelInput
                    label = "First Name"
                />
                <LabelInput
                    label = "Last Name"
                />
            </div>
        )
    }
}