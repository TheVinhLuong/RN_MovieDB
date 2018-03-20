import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
    FETCH_NEW_MOVIES, FETCH_NEW_MOVIES_ERROR, FETCH_NEW_MOVIES_RESULT,
} from '../actions/movies';

export const fetchLatestMovies = (currentPage) => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=556a96690df70c3bdf54e13e3ea5a867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`);

const fetchMovies = function* (action) {
    try {
        var currentPage = action.currentPage;
        if(!currentPage){
            currentPage = 1;
        }
        console.log("wtf", "current page: " + currentPage);
        const response = yield call(fetchLatestMovies, currentPage);
        const result = yield response.json();
        if (result.error) {
            console.log("wtf", "result error:" + result.error);
            yield put({ type: FETCH_NEW_MOVIES_ERROR, error: result.error });
        } else {
            ++currentPage;
            console.log("wtf", "result results:" + result.results);
            yield put({ type: FETCH_NEW_MOVIES_RESULT, movies: result.results, isLoading: false, currentPage: currentPage });
        }
    } catch (error) {
        console.log("wtf", "result exception:" + error);
        yield put({type: FETCH_NEW_MOVIES_ERROR, error: error});
    }
}

const movieSaga = function* () {
    yield takeEvery(FETCH_NEW_MOVIES, fetchMovies);
}

export default movieSaga;
