export const FETCH_NEW_MOVIES = "FETCH_NEW_MOVIES";
export const FETCH_NEW_MOVIES_RESULT = "FETCH_NEW_MOVIES_RESULT";
export const FETCH_NEW_MOVIES_ERROR = "FETCH_NEW_MOVIES_ERROR";
export const GET_INITIAL_STATE = "GET_INITIAL_STATE";

export const fetchNewMovies = () => ({
    type: FETCH_NEW_MOVIES,
});

export const getInitialState = () => ({
    type: GET_INITIAL_STATE,
});