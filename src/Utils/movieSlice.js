import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        traileVideo: null
    },
    reducers: {
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.traileVideo = action.payload
        }
    }
});


export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;