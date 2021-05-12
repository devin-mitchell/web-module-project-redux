import { ADD_TO_FAVORITES, REMOVE_FAVORITE, TOGGLE_DISPLAY} from '../actions/movieActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_DISPLAY:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(fav => (
                    action.payload !== fav.id
                ))
            } 

       default:
           return state;
    }
}

export default favoritesReducer;