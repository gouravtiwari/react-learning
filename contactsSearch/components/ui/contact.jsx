import React from 'react';

export default class Contact extends React.Component {
    render() {
        // Assigment#2
        // I wanted to filter inside reducer, 
        // but figure-out that moving this inside reducer will corrupt original list
        // Question:
        // Can I can also use history state approach here if that is must to move it inside reducer?
        const contacts = this.props.contacts.filter(
            (contact) => contact.indexOf(this.props.query) !== -1
        );
        
        return(
            
            <div className='contact-search'>
                <input
                    type="text"
                    placeholder="Contact Search"
                    value = { this.props.query }
                    onChange = {
                        (evt) => {
                            // Assigment#2
                            // searchResults call on change of inputs from user
                            return this.props.searchResults(evt.target.value);
                        }
                    }
                />
                <div className='list'> 
                    <h3>Contacts list</h3>
                    {
                        contacts.map(
                                (contact) =>
                                    <li key = { contact }>
                                        { contact }
                                    </li>
                            )
                    }
                </div>
            </div>
            
        )
    }
}
