export const ADD_MOVIE = "DELETE_MOVIE";
export const BACK_TO_FIRST = "BACK_TO_FIRST";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_LIST = "ADD_LIST";
export const GO_TO_LAST = "GO_TO_LAST";
export const DELETE_FAV = "DELETE_FAV";



export const addMovie = (id) => {
    return ({ type: ADD_MOVIE, payload: id });
}

export const backToFirst = () => {
    return ({ type: BACK_TO_FIRST });
}

export const nextMovie = () => {
    return ({ type: NEXT_MOVIE});
}

export const previousMovie = () => {
    return ({ type: PREVIOUS_MOVIE});
}

export const deleteMovie = (movie) => {
    return ({ type: DELETE_MOVIE, payload: movie });
}
export const listeyeEkle = (movie) => {
    return ({ type: ADD_LIST, payload: movie });
}
export const goToLast = () => {
    return ({ type: GO_TO_LAST });
}
export const deleteFav = (id) => {
    return ({ type: DELETE_FAV , payload: id});
}