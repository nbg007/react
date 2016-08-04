import React from 'react'

import ThumbnailCard from './ThumbnailCard.jsx';
import BreadCrumb from './BreadCrumb.jsx';
import VisibleDetailsCard from '../containers/VisibleDetailsCard';

import strings from '../localization';

const CARDS_PER_ROW = 3;
const ThumbnailGrid = ({collapseStack, expandImage, movies, group, activeMovieId}) => {
    let getThumbnailRow = (items, key) => (<div className="thumbnail-row" key={"thumbnailrow-" + key}>{items}</div>);

    let getThumbnails = (allMovies, activeMovieId) => {
        var thumbnails = [],
            items = [],
            colCount = 0,
            activeMovieIndex = -1;
        allMovies.forEach((movie) => {
            if (colCount > 0 && colCount % CARDS_PER_ROW == 0) {
                thumbnails.push(getThumbnailRow(items, colCount));
                items = [];
            }

            let cssClass = "";
            if (movie.id == activeMovieId) {
                activeMovieIndex = colCount;
                cssClass = "viewing";
            }
            items.push(ThumbnailCard(movie, () => expandImage(movie), cssClass));
            colCount = colCount + 1;
        });
        if (items.length > 0) {
            thumbnails.push(getThumbnailRow(items, colCount));
        }
        if (activeMovieIndex >= 0) {
            var detailsCardIndex = Math.ceil((activeMovieIndex + 1) / CARDS_PER_ROW);

            thumbnails.splice(detailsCardIndex, 0, (
                <VisibleDetailsCard key={ "details-view-" + activeMovieId } />
            ));
        }
        return thumbnails;
    };

    let getTitle = (movies) => {
        let title = strings.formatString(strings.showingXTitles, movies.size);
        let firstMovie = movies.first();
        if (group.id === 'movieId') {
            title += `<span class='c-green'> ${firstMovie.movieName} (${firstMovie.movieId}) </span>`;
        } else {
            title += `- <span class='c-green'> ${firstMovie.languageCode} </span>`;
        }
        return title;
    };

    return (
        <div className="thumbnail-grid">
            <BreadCrumb onClick={() => collapseStack()} dataTitle={group.id === 'movieId' ? strings.backToMovieTitles : strings.backToLanguageCodes}/>
            <h3 className="center-text thin-font" dangerouslySetInnerHTML={{__html: getTitle(movies)}}></h3>
            <div className="row mt30">
                { getThumbnails(movies, activeMovieId) }
            </div>
        </div>
    );
};

export default ThumbnailGrid