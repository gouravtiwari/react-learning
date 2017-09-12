import { combineReducers } from 'redux';

import { reduce as contactReduce } from './contact-reducer';
import { reduce as resultsReduce } from './results-reducer';

// Assignment#2
// This contains contacts (list) and query (search-terms)
const indexReducer = combineReducers({
    contacts: contactReduce,
    query: resultsReduce
});

export default indexReducer;