import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGPT: false,
        MovieNames : null,
        movieResults : null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.toggleGPT = !state.toggleGPT;
        },
        addGPTMovieResults : (state,action) => {
            const {movieNames,movieResults} = action.payload;
            state.MovieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
});

export const { toggleGPTSearchView,addGPTMovieResults } = gptSlice.actions;
export default gptSlice.reducer;