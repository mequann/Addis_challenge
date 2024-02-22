// // slice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Song, SongsState } from './types';

// const initialState: SongsState = {
//   list: [],
//   loading: false,
//   error: null,
// };

// const songsSlice = createSlice({
//   name: 'songs',
//   initialState,
//   reducers: {
//     fetchSongsRequest: (state) => {
//       state.loading = true;
//     },
//     fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
//       state.loading = false;
//       state.list = action.payload;
//     },
//     fetchSongsFailure: (state, action: PayloadAction<string>) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     addSongSuccess: (state, action: PayloadAction<Song>) => {
//       state.list.push(action.payload);
//     },
//     updateSongRequest: (state, action: PayloadAction<Song>) => {
//       const updatedSong = action.payload;
//       const index = state.list.findIndex((song) => song.id === updatedSong.id);
//       if (index !== -1) {
//         state.list[index] = updatedSong;
//       }
//     },
//     deleteSongSuccess: (state, action: PayloadAction<number>) => {
//       const songId = action.payload;
//       state.list = state.list.filter((song) => song.id !== songId);
//     },
//   },
// });

// export const { reducer, actions } = songsSlice;