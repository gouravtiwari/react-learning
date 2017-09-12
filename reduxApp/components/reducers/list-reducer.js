import Immutable from 'immutable';

import { UPDATE_LIST } from '../actions/list-actions';

export function reduce(state=Immutable.List(), action) {
    switch(action.type) {
        case UPDATE_LIST:
            const name = action.payload;
            
            if (name.trim() !== '' && !state.includes(name)) {
                return state.push(name);
            } else {
                return state;
            }
        default:
            return state;
    }
}