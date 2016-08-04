import { Map, List, Record } from 'Immutable';
import {
    SORT_STACKS_ASC,
    SORT_STACKS_DESC
} from '../actions/sort'

const initialState = Map({
    sortOrder: SORT_STACKS_ASC
});

const sort = (state = initialState, action = "") => {
    switch (action.type) {
        case SORT_STACKS_ASC:
            return state.merge({sortOrder: action.type});

        case SORT_STACKS_DESC:
            return state.merge({sortOrder: action.type});

        default:
            return state;
    }
};

export default sort