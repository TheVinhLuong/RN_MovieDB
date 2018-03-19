import {
  GET_INITIAL_STATE,
  FETCH_NEW_MOVIES_ERROR,
  FETCH_NEW_MOVIES_RESULT,
} from '../actions/movies';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_NEW_MOVIES_RESULT:
      console.log("wtf", "fetch new movies: " + action.movies);
      return [
        ...state,
        {
          movies: action.movies,
        }
      ];
    case FETCH_NEW_MOVIES_ERROR:
      console.log("wtf", "FETCH_NEW_MOVIE_ERROR: " + state.movies);
      return {
        ...state,
      }
    case GET_INITIAL_STATE:
      console.log("wtf", "GET_INITIAL_STATE: " + state.movies);
      return {
        ...state,
      }
    default:
      return state;
  }
};
