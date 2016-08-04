import { createSelector } from 'reselect'
import {
    SORT_STACKS_ASC,
    SORT_STACKS_DESC
} from '../actions/sort'


const getAllMovies = (state) => state.movies.get('movies');
const getGroups = (state) => state.navigation.get('groups');
const getActiveGroupId = (state) => state.navigation.get('activeGroup');
const getActiveGroupStackId = (state) => state.navigation.get('activeGroupId');
const getActiveMovieId = (state) => state.navigation.get('activeMovieId');
const getSortOrder = (state) => state.sort.get('sortOrder');

export const getActiveGroup = createSelector(
    [getGroups, getActiveGroupId],
    (groups, activeGroup) => {
        return groups.find((obj) => obj.id == activeGroup);
    }
);

export const getVisibleMovieStacks = createSelector(
    [getAllMovies, getActiveGroupId, getSortOrder],
    (movies, activeGroup, sortOrder) => {
        var stacksObj = movies.reduce((obj, movie) => {
            let prop = movie[activeGroup];
            (obj[prop] = obj[prop] || []).push(movie);
            return obj;
        }, {});
        var stacks = Object.keys(stacksObj).map((key) => stacksObj[key]);
        return stacks.sort((a, b) => {
            var fieldToSort = activeGroup;
            if (activeGroup == 'movieId') {
                fieldToSort = 'movieName';
            }
            var firstValue = a[0].get(fieldToSort);
            var secondValue = b[0].get(fieldToSort);
            return sortOrder == SORT_STACKS_ASC ? firstValue.localeCompare(secondValue) : secondValue.localeCompare(firstValue);
        });
    }
);

export const getVisibleMovies = createSelector(
    [getAllMovies, getActiveGroupId, getActiveGroupStackId, getSortOrder],
    (movies, activeGroup, activeStack, sortOrder) => {
        var movies = movies.filter((movie) => movie[activeGroup] == activeStack);
        return movies.sort((a, b) => {
            var fieldToSort = (activeGroup === 'movieId') ? 'languageCode' : 'movieName';

            var firstValue = a.get(fieldToSort);
            var secondValue = b.get(fieldToSort);
            return sortOrder == SORT_STACKS_ASC ? firstValue.localeCompare(secondValue) : secondValue.localeCompare(firstValue);
        });
    }
);

export const getVisibleMovie = createSelector(
    [getAllMovies, getActiveMovieId],
    (movies, activeMovieId) => {
        return movies.find((movie) => {
            return movie.id == activeMovieId
        });
    }
);
