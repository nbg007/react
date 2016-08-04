
import expect from 'expect'
import { Map, List, Record } from 'Immutable'
import reducer from '../../app/reducers/movies'
import {Movie} from '../../app/reducers/movies'
import * as types from '../../app/actions/movies'

describe('Reducer: Movies', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(Map({
                movies: Map(),
                isLoading: true
            }));
    });

    it('should turn off isLoading on MOVIES_LOADED', () => {
        let state = Map({ isLoading: true, movies: Map() });
        let newState = reducer(state, {
            type: types.MOVIES_LOADED,
            movies: []
        });
        expect(newState.get('isLoading')).toEqual(false);
    });

    it('should add movies to state on MOVIES_LOADED', () => {
        let movieObj = {movieId: 'hello1', languageCode: 'en'};
        let state = Map({ isLoading: true, movies: Map({ 'hello1-en' : Movie(movieObj)} ) });
        movieObj = {movieId: 'hello2', languageCode: 'en'};
        let newState = reducer(state, {
            type: types.MOVIES_LOADED,
            movies: [ movieObj ]
        });
        expect(newState.get('movies').size).toEqual(2);
    });

    it('should eleminate duplicate movies on MOVIES_LOADED', () => {
        let movieObj = {movieId: 'hello', languageCode: 'en'};
        let state = Map({ isLoading: true, movies: Map({ 'hello-en' : Movie(movieObj)} ) });
        let newState = reducer(state, {
            type: types.MOVIES_LOADED,
            movies: [ movieObj ]
        });
        expect(newState.get('movies').size).toEqual(1);
    });
});