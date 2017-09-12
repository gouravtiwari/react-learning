export const UPDATE_LIST = 'UPDATE_LIST';

export function update(name) {
    return {
        type: UPDATE_LIST,
        payload: name
    };
}