import React, {PropTypes} from 'react'
import VisibleSort from '../containers/VisibleSort'

const Tabs = ({ setVisibleTab, tabs, activeTab }) => {
    return (
        <div className="pos-rel">
            <ul className="nav nav-tabs">
                {tabs.map(tab =>
                        <li className={tab.id == activeTab ? "active" : ""} key={tab.id}>
                            <a href="#" onClick={() => setVisibleTab(tab.id)}>{tab.title}
                            </a>
                        </li>
                )}
            </ul>

            <VisibleSort />
        </div>
    );
};

Tabs.propTypes = {
    setVisibleTab: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired,
    activeTab: PropTypes.string.isRequired
};


export default Tabs