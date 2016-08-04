import { Map, List, Record } from 'Immutable';
import strings from '../localization';
import {
    CHANGE_GROUP_BY,
    EXPAND_IMAGE,
    COLLAPSE_IMAGE,
    EXPAND_STACK,
    COLLAPSE_STACK
} from '../actions/navigation'

const initialState = Map({
    groups: [{
        id: 'movieId',
        title: strings.movies
    }, {
        id: 'languageCode',
        title: strings.language
    }],
    activeGroup: 'movieId',
    activeGroupId: null,
    activeMovieId: null
});

const navigation = (state = initialState, action = "") => {
    switch (action.type) {
        case CHANGE_GROUP_BY:
            return state.merge({activeGroup: action.id});

        case EXPAND_STACK:
            return state.merge({activeGroupId: action.id});

        case EXPAND_IMAGE:
            let movie = action.movie;
            return state.merge({activeMovieId: movie.id});

        case COLLAPSE_STACK:
            return state.merge({activeGroupId: null, activeMovieId: null});

        case COLLAPSE_IMAGE:
            return state.merge({activeMovieId: null});

        default:
            return state;
    }
};

export default navigation