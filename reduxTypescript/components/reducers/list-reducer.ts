import * as Immutable from 'immutable';

import * as ActionBasics from '../actions/basics';
import * as ListActions from '../actions/list-actions';

export function reduce(state: Immutable.List<string> = Immutable.List<string>(), 
                       action: ActionBasics.Action<string>): Immutable.List<string> {
    switch(action.type) {
        case ListActions.UPDATE_LIST:
            const name: string = action.payload;
            
            if (name.trim() !== '' && !state.includes(name)) {
                return state.push(name);
            } else {
                return state;
            }
        default:
            return state;
    }
}