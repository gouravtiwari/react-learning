import * as ActionBasics from './basics';

export const CHANGE_NAME = 'CHANGE_NAME';

export function change(name: string): ActionBasics.Action<string> {
    return {
        type: CHANGE_NAME,
        payload: name
    };
}