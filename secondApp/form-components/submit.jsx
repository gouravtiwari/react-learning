import React from 'react';

export default class Submit extends React.Component {
    render() {
        return(
            <div>
                <input 
                    type="button"
                    value="Save"
                    onClick = {
                        (evt) => {
                            console.log(this.props.fullName)
                        }
                    }
                />
            </div>
        )
    }
}