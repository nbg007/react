import React from 'react'

const ThumbnailCard = (movie, onClick, className) => {
    let classNames = "col-lg-4 col-md-4 col-xs-6 thumb " + className;
    return (
        <div className={classNames} onClick={onClick} key={movie.id}>
            <a className="thumbnail" href="#">
                <img className="img-responsive" alt="placeholder image" src={movie.thumbnailUrl} />

                <div className="thumbnail-badge">
                    {movie.languageCode}
                </div>
            </a>
        </div>
    );
};

export default ThumbnailCard