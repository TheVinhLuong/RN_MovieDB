import {
  GET_INITIAL_STATE,
  FETCH_NEW_MOVIES_ERROR,
  FETCH_NEW_MOVIES_RESULT,
} from '../actions/movies';

const initialState={
  movies:[],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_MOVIES_RESULT:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, ...action.movies],
        currentPage: action.currentPage,
      };
    case FETCH_NEW_MOVIES_ERROR:
      console.log("wtf", "FETCH_NEW_MOVIE_ERROR: " + state.movies);
      return {
        ...state,
      };
    case GET_INITIAL_STATE:
      console.log("wtf", "GET_INITIAL_STATE: " + state.movies);
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
