require('isomorphic-fetch')
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions/movies'
import * as types from '../../app/actions/movies'
import expect from 'expect' // You can use any testing library

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Action: Movies', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('Should load movies', () => {
        var movies = [{movieId: 10}];
        fetchMock.mock('/api/movies', movies);
        const expectedActions = [
            { type: types.MOVIES_LOADING },
            { type: types.MOVIES_LOADED, movies: movies }
        ];
        const store = mockStore({ movies: [] });
        return store.dispatch(actions.moviesActions.loadMovies())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
});