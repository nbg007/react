import React, {PropTypes} from 'react'
import {
    SORT_STACKS_ASC,
    SORT_STACKS_DESC
} from '../actions/sort'

const Sort = ({sortStacksAsc, sortStacksDesc, sortOrder}) => {
    return (
        <div className="sort-container">
            <span className={sortOrder === SORT_STACKS_ASC ? 'asc active' : 'asc'}
                  onClick={() => sortStacksAsc()}>A-Z</span>
            <span className="sep">|</span>
            <span className={sortOrder === SORT_STACKS_DESC ? 'desc active' : 'desc'} onClick={() => sortStacksDesc()}>Z-A</span>
        </div>
    );
};


export default Sort