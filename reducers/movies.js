import {
  GET_INITIAL_STATE,
  FETCH_NEW_MOVIES_ERROR,
  FETCH_NEW_MOVIES_RESULT,
  FETCH_NEW_MOVIES,
  ON_LIST_SCROLL_MOMENTUM_END,
} from '../actions/movies';

const initialState = {
  movies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_MOVIES:
      console.log("wtf", "fetch new movies from reducer");
      let loadingView = {
        isLoading: true,
      }
      return {
        ...state,
        movies:[...state.movies, loadingView],
        isLoading: true,
      }
    case FETCH_NEW_MOVIES_RESULT:
    let oldMovies = state.movies;
    oldMovies.pop();
      return {
        ...state,
        isLoading: false,
        movies: [...oldMovies, ...action.movies],
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
        ...initialState,
        isLoading: true,
        componentDidMount: true,
        listOffset: 0,
      };
      case ON_LIST_SCROLL_MOMENTUM_END:
      return {
        ...state,
        listOffset: action.listOffset,
      }
    default:
      return state;
  }
};
