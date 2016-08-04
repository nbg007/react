import React, {Component} from 'react'

import ThumbnailStack from './ThumbnailStack.jsx';

const ThumbnailStackGrid = ({expandStack, stacks, activeGroup}) => {
    let getStackThumbnails = (stacks) => {
        // we wont have groupId here.
        return stacks.map(function (stack) {
            let groupId = stack[0][activeGroup.id];
            let key = "thumbnailstack-" + groupId;
            let coverName = activeGroup.id === "languageCode" ? groupId : "";
            return ThumbnailStack(key, stack, coverName, () => {expandStack(groupId)});
        });
    };

    return (
        <div className="row mt10 thumbnail-stack-grid">
            { getStackThumbnails(stacks) }
        </div>
    );

};

export default ThumbnailStackGrid