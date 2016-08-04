import { connect } from 'react-redux';
import TabBody from '../components/TabBody.jsx';
import {navigationActions} from '../actions/navigation';
import {moviesActions} from '../actions/movies';

const VisibleTabBody = connect(
    function mapStateToProps(state) {
        return {
            currentStack: state.navigation.get('activeGroupId')
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            expandStack: (stackId) => dispatch(navigationActions.expandStack(stackId)),
            collapseStack: (stackId) => dispatch(navigationActions.collapseStack(stackId)),
            loadMovies: () => dispatch(moviesActions.loadMovies())
        };
    }
)(TabBody);

export default VisibleTabBody;