import { connect } from 'react-redux';
import ThumbnailGrid from '../components/ThumbnailGrid.jsx';
import {navigationActions} from '../actions/navigation';
import { getActiveGroup, getVisibleMovies } from '../selectors'

const VisibleThumbnailGrid = connect(
    function mapStateToProps(state) {
        return {
            movies: getVisibleMovies(state),
            group: getActiveGroup(state),
            activeMovieId: state.navigation.get('activeMovieId')
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            collapseStack: (stackId) => dispatch(navigationActions.collapseStack(stackId)),
            expandImage: (movie) => dispatch(navigationActions.expandImage(movie))
        };
    }
)(ThumbnailGrid);

export default VisibleThumbnailGrid;