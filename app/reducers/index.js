import { combineReducers } from 'redux'
import movies from './movies'
import navigation from './navigation'
import sort from './sort'

const netflixApp = combineReducers({
    movies,
    navigation,
    sort
});

export default netflixApp