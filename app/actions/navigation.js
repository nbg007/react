export const CHANGE_GROUP_BY = 'CHANGE_GROUP_BY';
export const EXPAND_IMAGE = 'EXPAND_IMAGE';
export const COLLAPSE_IMAGE = 'COLLAPSE_IMAGE';
export const EXPAND_STACK = 'EXPAND_STACK';
export const COLLAPSE_STACK = 'COLLAPSE_STACK';

export const navigationActions = {
    setGroupBy(groupId) {
    return {
        type: CHANGE_GROUP_BY,
        id: groupId
    }
},

expandStack(stackId) {
    return {
        type: EXPAND_STACK,
        id: stackId
    }
},

collapseStack(stackId) {
    return {
        type: COLLAPSE_STACK,
        id: stackId
    }
},

expandImage(movie) {
    return {
        type: EXPAND_IMAGE,
        movie: movie
    }
},

collapseImage(movie) {
    return {
        type: COLLAPSE_IMAGE,
        movie: movie
    }
}
};
