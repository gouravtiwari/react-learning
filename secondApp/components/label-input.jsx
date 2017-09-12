import React from 'react';

import Input from './input.jsx';

export default class LabelInput extends Input {
    getLabel() {
        return this.props.label;
    }
}