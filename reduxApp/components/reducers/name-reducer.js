import { CHANGE_NAME } from '../actions/name-actions';

export function reduce(state='', action) {
    switch(action.type) {
        case CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
}