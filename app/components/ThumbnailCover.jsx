import React from 'react'

const ThumbnailCover = (cover) => {
    return (
        <div className="cover" key={"thumbnailStackImages-cover-" + cover }>
            <div className="pos-rel h100">
                <p>{cover}</p>
            </div>
        </div>
    );
};

export default ThumbnailCover