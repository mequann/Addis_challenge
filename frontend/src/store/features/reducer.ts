// import { createReducer } from '@reduxjs/toolkit';
// import { SongsState, SongsActionTypes } from './types';

// const initialState: SongsState = {
//   list: [],
//   loading: false,
//   error: null,
// };

// export const songsReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(SongsActionTypes.FETCH_SONGS_REQUEST, (state) => {
//       state.loading = true;
//     })
//     .addCase(SongsActionTypes.FETCH_SONGS_SUCCESS, (state, action) => {
//       state.loading = false;
//       state.list = action.payload;
//     })
//     .addCase(SongsActionTypes.FETCH_SONGS_FAILURE, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//     .addCase(SongsActionTypes.ADD_SONG_SUCCESS, (state, action) => {
//       state.list.push(action.payload);
//     })
//     .addCase(SongsActionTypes.UPDATE_SONG_SUCCESS, (state, action) => {
//       const updatedSong = action.payload;
//       const index = state.list.findIndex((song) => song.id === updatedSong.id);
//       if (index !== -1) {
//         state.list[index] = updatedSong;
//       }
//     })
//     .addCase(SongsActionTypes.DELETE_SONG_SUCCESS, (state, action) => {
//       const songId = action.payload;
//       state.list = state.list.filter((song) => song.id !== songId);
//     });
// });