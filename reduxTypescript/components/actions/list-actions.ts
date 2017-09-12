import * as ActionBasics from './basics';

export const UPDATE_LIST = 'UPDATE_LIST';

export function update(name: string): ActionBasics.Action<string> {
    return {
        type: UPDATE_LIST,
        payload: name
    };
}