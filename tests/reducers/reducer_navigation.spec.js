
import expect from 'expect'
import { Map, List, Record } from 'Immutable'
import reducer from '../../app/reducers/navigation'
import * as types from '../../app/actions/navigation'

const STACK_ID = '1788';
const MOVIE_ID = '1988';

describe('Reducer: Navigation', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(Map({
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
            }));
    });

    it('should modify activeGroup for CHANGE_GROUP_BY', () => {
        expect(
            reducer(undefined, {
                type: types.CHANGE_GROUP_BY,
                id: 'languageCode'
            })
        ).toEqual(Map({
                groups: [{
                    id: 'movieId',
                    title: 'Movies'
                }, {
                    id: 'languageCode',
                    title: 'Languages'
                }],
                activeGroup: 'languageCode',
                activeGroupId: null,
                activeMovieId: null
            }));
    });

    it('should modify activeGroupId for EXPAND_STACK', () => {
        expect(
            reducer(undefined, {
                type: types.EXPAND_STACK,
                id: '1789'
            })
        ).toEqual(Map({
                groups: [{
                    id: 'movieId',
                    title: 'Movies'
                }, {
                    id: 'languageCode',
                    title: 'Languages'
                }],
                activeGroup: 'movieId',
                activeGroupId: '1789',
                activeMovieId: null
            }));
    });

    it('should modify activeGroupId for COLLAPSE_STACK', () => {
        expect(
            reducer(undefined, {
                type: types.COLLAPSE_STACK
            })
        ).toEqual(Map({
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
            }));
    });

    it('should modify activeMovieId for EXPAND_IMAGE', () => {
        expect(
            reducer(undefined, {
                type: types.EXPAND_IMAGE,
                movie: {
                    id: MOVIE_ID
                }
            })
        ).toEqual(Map({
                groups: [{
                    id: 'movieId',
                    title: 'Movies'
                }, {
                    id: 'languageCode',
                    title: 'Languages'
                }],
                activeGroup: 'movieId',
                activeGroupId: null,
                activeMovieId: MOVIE_ID
            }));
    });

    it('should modify activeMovieId for COLLAPSE_IMAGE', () => {
        expect(
            reducer(undefined, {
                type: types.COLLAPSE_IMAGE,
                movie: {
                    id: MOVIE_ID
                }
            })
        ).toEqual(Map({
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
            }));
    });
});