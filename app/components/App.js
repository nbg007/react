import React from 'react'
import SelectableTabs from '../containers/SelectableTabs'
import VisibleTabBody from '../containers/VisibleTabBody'

const App = () => {
    return (
        <div>
            <SelectableTabs />
            <VisibleTabBody />
        </div>
    );
};

export default App