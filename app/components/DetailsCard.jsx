import React, {Component} from 'react'
import strings from '../localization'

const DetailsCard = ({collapseImage, movie}) => {
    return (
        <div className="details-card">
            <div className="details-body">
                <div className="left-content">
                    <img className="center-block" src={movie.fullSizeImageUrl} alt={movie.movieName}/>
                </div>
                <div className="separator"></div>
                <div className="right-content">
                    <div className="xx-lg-font mt10">{movie.movieName}</div>
                    <div className="x-lg-font mt10">{strings.movieId}: {movie.movieId}</div>
                    <div className="x-lg-font mt10">{strings.languageCode}: {movie.languageCode}</div>
                    <div className="med-font mt10">{strings.imageType}: {movie.imageType}</div>
                </div>

                <div className="close-details" onClick={() => collapseImage(movie)}>
                    <i className="glyphicon glyphicon-remove"></i>
                </div>
            </div>
        </div>
    );

};

export default DetailsCard