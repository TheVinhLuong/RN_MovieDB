import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
    FETCH_NEW_MOVIES,
} from '../actions/movies';

export const fetchLatestMovies = () => fetch('https://api.themoviedb.org/3/discover/movie?api_key=556a96690df70c3bdf54e13e3ea5a867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

const fetchMovies = function* (action) {
    const response = yield call(fetchLatestMovies);
    const result = yield response.json();
    console.log("wtf", result);
}

const movieSaga = function* () {
    yield takeEvery(FETCH_NEW_MOVIES, fetchMovies);
}

export default movieSaga;
