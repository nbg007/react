import React from 'react'
import ThumbnailCover from './ThumbnailCover.jsx';
import strings from '../localization';

const ThumbnailStack = (key, stack, cover, onClick) => {
    let imageCount = Math.min(3, stack.length); //just coz good things come in threes :)

    let getImages = (stack, count) => {
        let uniqueKey = "thumbnailStackImages-";
        let subArray = stack.slice(0, count + 1);
        return subArray.map((movie) =>
                <img className="img-responsive" key={uniqueKey + movie.id} alt={movie.movieName}
                     src={movie.thumbnailUrl}/>
        );
    };

    let getImagesWithCover = (stack, cover, imageCount) => {
        let allImages = getImages(stack, imageCount);
        if (cover && cover.length > 0) {
            allImages.splice(0, 1, ThumbnailCover(cover));
        }
        return allImages;
    };

    return (
        <div className="col-lg-3 col-md-4 col-xs-6 thumb stack" onClick={onClick} key={key}>
            { getImagesWithCover(stack, cover, imageCount) }
            <div className="thumbnail-badge">
                {strings.formatString(strings.numTitles, stack.length)}
            </div>
        </div>
    );
};

export default ThumbnailStack