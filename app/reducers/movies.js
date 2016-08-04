import { Map, List, Record } from 'Immutable';
import {
    MOVIES_LOADED,
    MOVIES_LOADING
} from '../actions/movies'

export const Movie = Record({
    id: undefined,
    movieId: undefined,
    movieName: undefined,
    imageType: undefined,
    thumbnailUrl: undefined,
    fullSizeImageUrl: undefined,
    languageCode: undefined
}, 'Movie');

const initialMoviesState = new Map({
    movies: Map(),
    isLoading: true
});

const constructMovieId = (movie) => movie.movieId + "-" + movie.languageCode;

const movies = (state = initialMoviesState, action = null) => {
    switch (action.type) {
        case MOVIES_LOADED:
            // remove duplicates.
            let newMovies = action.movies.reduce((obj, movie) => {
                movie.id = constructMovieId(movie);
                obj[movie.id] = new Movie(movie);
                return obj;
            }, {});
            let allMovies = state.get('movies').merge(Map(newMovies));
            return state.merge({movies: allMovies, isLoading: false});
        case MOVIES_LOADING:
            return state.merge({isLoading: true});
        default:
            return state;
    }
};

export default movies