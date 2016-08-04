import { connect } from 'react-redux';
import Tabs from '../components/Tabs.jsx';
import {navigationActions} from '../actions/navigation';

const SelectableTabs = connect(
    function mapStateToProps(state) {
        return {
            tabs: state.navigation.get('groups'),
            activeTab: state.navigation.get('activeGroup'),
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            setVisibleTab: (fieldId) => {
                dispatch(navigationActions.setGroupBy(fieldId));
                dispatch(navigationActions.collapseStack(fieldId));
            }
        };
    }
)(Tabs);

export default SelectableTabs;