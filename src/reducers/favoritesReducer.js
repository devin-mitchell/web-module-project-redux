import { ADD_TO_FAVORITES, DISPLAY_FAVORITES, TOGGLE_DISPLAY} from '../actions/movieActions'

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DISPLAY_FAVORITES:
            return {
                ...state,
                displayFavorites: action.payload
            }  
        case TOGGLE_DISPLAY:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
       default:
           return state;
    }
}

export default favoritesReducer;