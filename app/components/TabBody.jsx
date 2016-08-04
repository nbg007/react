import React, {PropTypes} from 'react'
import VisibleThumbnailStackGrid from '../containers/VisibleThumbnailStackGrid'
import VisibleThumbnailGrid from '../containers/VisibleThumbnailGrid'

const TabBody = ({currentStack}) => {
    return (
        <div>
            {
                currentStack ?  <VisibleThumbnailGrid /> : <VisibleThumbnailStackGrid />
            }
        </div>
    );
};


export default TabBody