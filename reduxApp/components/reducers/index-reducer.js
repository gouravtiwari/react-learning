import { combineReducers } from 'redux';

import { reduce as nameReduce } from './name-reducer';
import { reduce as listReduce } from './list-reducer';

const indexReducer = combineReducers({
    nameEntry: nameReduce,
    nameList: listReduce
});

export default indexReducer;