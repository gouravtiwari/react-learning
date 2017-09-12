import { connect } from 'react-redux';

import * as ContactActions from '../actions/contact-actions';

import App from './app.jsx';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        // Assigment#2
        // props needed to dispatch searchResults function
        searchResults: (query) => {
            dispatch(ContactActions.searchResults(query))
        }
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;