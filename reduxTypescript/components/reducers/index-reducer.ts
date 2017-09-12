import { combineReducers } from 'redux';

import * as NameReducer from './name-reducer';
import * as ListReducer from './list-reducer';

const indexReducer = combineReducers({
    nameEntry: NameReducer.reduce,
    nameList: ListReducer.reduce
});

export default indexReducer;