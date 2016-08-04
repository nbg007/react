import expect from 'expect'
import { Map, List, Record } from 'Immutable'
import * as selectors from '../../app/selectors/index'
import {Movie} from '../../app/reducers/movies'

const LANGUAGES = ['en', 'te', 'zh'];
const TOTAL_MOVIES = 12;
var state = {};
var moviesState = Map();
var navigationState = Map();

let createMovies = (n) => {
    var movies = {};
    for (let i = 0; i < n; i++) {
        let movieObj = {movieId: 'hello' + i, languageCode: LANGUAGES[i % LANGUAGES.length]};
        movieObj.id = movieObj.movieId + '-' + movieObj.languageCode;
        movies[movieObj.id] = Movie(movieObj);
    }
    return Map(movies);
};

beforeEach('set up state', function () {
    let moviesState = Map({isLoading: true, movies: createMovies(TOTAL_MOVIES)});
    let navigationState = Map({
        groups: [{
            id: 'movieId',
            title: 'Movies'
        }, {
            id: 'languageCode',
            title: 'Languages'
        }],
        activeGroup: 'movieId',
        activeGroupId: null,
        activeMovieId: null
    });
    let sortState = Map({
        sortOrder: 'SORT_STACKS_ASC'
    });

    state = {
        navigation: navigationState,
        movies: moviesState,
        sort: sortState
    };
});

describe('Selector: getActiveGroup', () => {
    it('should return group based on activeGroup in state', () => {
        expect(selectors.getActiveGroup(state).id).toEqual('movieId');
    });
});

describe('Selector: getVisibleMovieStacks', () => {
    it('should return stacks of movies based on activeGroup', () => {
        state.navigation = state.navigation.merge({activeGroup: 'languageCode'});
        let movieStacks = selectors.getVisibleMovieStacks(state);

        var data = movieStacks.reduce((codes, val) => {
            let lc = val[0].get('languageCode');
            if (codes.indexOf(lc)) {
                codes.push(lc);
            }
            return codes;
        }, []);

        expect(data).toEqual(LANGUAGES);
    });
    it('should return single stack for invalid activeGroup', () => {
        state.navigation = state.navigation.merge({activeGroup: 'languageCode11'});
        let movieStacks = selectors.getVisibleMovieStacks(state);

        expect(movieStacks.length).toEqual(1);
    })
});

describe('Selector: getVisibleMovies', () => {
    it('should return movies based on activeGroup and activeGroupId', () => {
        state.navigation = state.navigation.merge({activeGroup: 'languageCode', activeGroupId: 'en'});
        state.sort = state.sort.merge({sortOrder: 'SORT_STACKS_ASC'});
        let movies = selectors.getVisibleMovies(state);

        expect(movies.size).toEqual(TOTAL_MOVIES / LANGUAGES.length);
    });
    it('should return empty array for invalid activeGroupId', () => {
        state.navigation = state.navigation.merge({activeGroup: 'languageCode', activeGroupId: 'ennn'});

        let movies = selectors.getVisibleMovies(state);
        expect(movies.size).toEqual(0);
    });
});

describe('Selector: getVisibleMovie', () => {
    it('should return movie based on activeMovieId', () => {
        state.navigation = state.navigation.merge({activeMovieId: 'hello0-en'});
        let movie = selectors.getVisibleMovie(state);
        expect(movie.movieId).toEqual('hello0');
    });
    it('should return null for invalid activeMovieId', () => {
        state.navigation = state.navigation.merge({activeMovieId: 'hello0-blah'});
        let movie = selectors.getVisibleMovie(state);
        expect(movie).toNotExist();
    });
});

