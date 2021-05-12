export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const TOGGLE_DISPLAY = "TOGGLE_DISPLAY";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return({type: ADD_MOVIE, payload: movie})
}

export const addToFavorites = (movie) => {
    return({type: ADD_TO_FAVORITES, payload: movie})
}

export const toggleDisplay = () => {
    return({type: TOGGLE_DISPLAY})
}

export const removeFavorite = (id) => {
    return({type: REMOVE_FAVORITE, payload: id})
}