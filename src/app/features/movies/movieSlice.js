import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    original: null,
    newDisney: null, 
    trending:null
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            state.recommend = action.payload.recommend;
        }
    }
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = state => state.movie.recommend
export const selectTrending = state => state.movie.trending
export const selectOriginal = state => state.movie.original
export const selectNewDisney = state => state.movie.newDisney

export const movieReducer= movieSlice.reducer ;