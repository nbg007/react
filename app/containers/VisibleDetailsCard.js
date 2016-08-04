import { connect } from 'react-redux';
import DetailsCard from '../components/DetailsCard.jsx';
import {navigationActions} from '../actions/navigation';
import { getVisibleMovie } from '../selectors'

const VisibleDetailsCard = connect(
    function mapStateToProps(state) {
        return {
            movie: getVisibleMovie(state)
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            collapseImage: (movie) => dispatch(navigationActions.collapseImage(movie))
        };
    }
)(DetailsCard);

export default VisibleDetailsCard;