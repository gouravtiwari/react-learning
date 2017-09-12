export const SEARCH_RESULTS = 'SEARCH_RESULTS';

export function searchResults(query) {
    // Assignment#2 
    // This function simply takes query and return an object containing query
    // So, that searchResults can be found with the query
    return {
        type: SEARCH_RESULTS,
        payload: query
    }
}   
