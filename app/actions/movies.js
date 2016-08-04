require('isomorphic-fetch');

export const MOVIES_LOADED = 'MOVIES_LOADED';
export const MOVIES_LOADING = 'MOVIES_LOADING';
export const moviesActions = {
    loadMovies() {
    return (dispatch) => {
        dispatch({ type: MOVIES_LOADING });
        return fetch(`/api/movies`)
    .then(response => response.json())
    .then(json => dispatch({
            type: MOVIES_LOADED,
            movies: json
        }))
    };
}
};