export const CHANGE_NAME = 'CHANGE_NAME';

export function change(name) {
    return {
        type: CHANGE_NAME,
        payload: name
    };
}