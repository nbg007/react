import { connect } from 'react-redux';
import ThumbnailStackGrid from '../components/ThumbnailStackGrid.jsx';
import { navigationActions } from '../actions/navigation';
import { getVisibleMovieStacks } from '../selectors';
import { getActiveGroup } from '../selectors';

const VisibleThumbnailStackGrid = connect(
    function mapStateToProps(state) {
        return {
            stacks: getVisibleMovieStacks(state),
            activeGroup: getActiveGroup(state)
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            expandStack: (stackId) => dispatch(navigationActions.expandStack(stackId))
        };
    }
)(ThumbnailStackGrid);

export default VisibleThumbnailStackGrid;