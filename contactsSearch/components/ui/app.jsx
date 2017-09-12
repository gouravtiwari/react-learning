import React from 'react';

import Contact from './contact.jsx';

export default class App extends React.Component {
    render() {
        
        return(
            <div>
                <h1>Contact Search</h1>
                <Contact
                    // Assigment#2
                    // props needed to make sure we have query, contacts and 
                    // a searchResults function
                    query = {this.props.query}
                    contacts = {this.props.contacts}
                    searchResults = {this.props.searchResults }
                />
            </div>
        )
    }
}