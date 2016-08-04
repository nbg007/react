import expect from 'expect'
import * as actions from '../../app/actions/navigation'
import * as types from '../../app/actions/navigation'

describe('Actions: Navigation', () => {
    it('should set GROUP BY', () => {
        const id = 'movieId';
        const expectedAction = {
            type: types.CHANGE_GROUP_BY,
            id
        };
        expect(actions.navigationActions.setGroupBy(id)).toEqual(expectedAction);
    });

    it('should expand stack', () => {
        const id = 'movieId-1988';
        const expectedAction = {
            type: types.EXPAND_STACK,
            id
        };
        expect(actions.navigationActions.expandStack(id)).toEqual(expectedAction);
    });

    it('should collapse stack', () => {
        const id = 'movieId-1988';
        const expectedAction = {
            type: types.COLLAPSE_STACK,
            id
        };
        expect(actions.navigationActions.collapseStack(id)).toEqual(expectedAction);
    });

    it('should expand image', () => {
        const movie = 'movieId-1988';
        const expectedAction = {
            type: types.EXPAND_IMAGE,
            movie
        };
        expect(actions.navigationActions.expandImage(movie)).toEqual(expectedAction);
    });

    it('should collapse image', () => {
        const movie = 'movieId-1988';
        const expectedAction = {
            type: types.COLLAPSE_IMAGE,
            movie
        };
        expect(actions.navigationActions.collapseImage(movie)).toEqual(expectedAction);
    });
});