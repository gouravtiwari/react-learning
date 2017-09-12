import * as ActionBasics from '../actions/basics';
import * as NameActions from '../actions/name-actions';

export function reduce(state: string ='', 
                       action: ActionBasics.Action<string>): string {
    switch(action.type) {
        case NameActions.CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
}