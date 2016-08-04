import { connect } from 'react-redux';
import {sortActions} from '../actions/sort';
import Sort from '../components/Sort.jsx';
import { getSortedStacksAsc } from '../selectors';

const VisibleSort = connect(
    function mapStateToProps(state) {
        return {
            sortOrder: state.sort.get('sortOrder')
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            sortStacksAsc: (stackId) => dispatch(sortActions.sortStacksAsc(stackId)),
            sortStacksDesc: (movie) => dispatch(sortActions.sortStacksDesc(movie))
        };
    }
)(Sort);

export default VisibleSort;