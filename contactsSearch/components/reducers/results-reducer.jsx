import * as Immutable from 'immutable';

import { SEARCH_RESULTS } from '../actions/contact-actions';

export function reduce(state = '', action) {
    // Assigment#2
    // For Search results type it will return payload (query)
    if(action.type === SEARCH_RESULTS){
        return action.payload;
    } else {
        return state;
    }
}
