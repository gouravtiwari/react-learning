import { connect } from 'react-redux';

import { change } from '../actions/name-actions';
import { update } from '../actions/list-actions';

import App from './app.jsx';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        appChangeName: (name) => dispatch(change(name)),
        appUpdateList: (name) => {
            //dispatch(change(''));
            dispatch(update(name));
        }
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;