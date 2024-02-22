// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// export const fetchSongs = createAsyncThunk(
//   'songs/fetchSongs',
//   async () => {
//     // Replace with your API call logic
//     const response = await fetch('/api/songs');
//     const data = await response.json();
//     return data;
//   }
// );

// export const addSong = createAsyncThunk(
//   'songs/addSong',
//   async (song) => {
//     // Replace with your API call logic
//     const response = await fetch('/api/songs', {
//       method: 'POST',
//       body: JSON.stringify(song),
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// export const updateSong = createAsyncThunk(
//   'songs/updateSong',
//   async (song) => {
//     // Replace with your API call logic
//     const response = await fetch(`/api/songs/${song.id}`, {
//       method: 'PUT',
//       body: JSON.stringify(song),
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// export const deleteSong = createAsyncThunk(
//   'songs/deleteSong',
//   async (songId) => {
//     // Replace with your API call logic
//     const response = await fetch(`/api/songs/${songId}`, {
//       method: 'DELETE',
//     });
//     // No data is returned on successful deletion
//     return songId;
//   }
// );

// const songsSlice = createSlice({
//   name: 'songs',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch songs
//       .addCase(fetchSongs.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSongs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchSongs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Add song
//       .addCase(addSong.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addSong.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addSong.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Update song
//       .addCase(updateSong.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateSong.fulfilled, (state, action) => {
//         state.loading = false;
//         const index = state.items.findIndex((song) => song.id === action.payload.id);
//         state.items[index] = action.payload;
//       })
//       .addCase(updateSong.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Delete song
//       .addCase(deleteSong.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteSong.fulfilled, (state, action) => {
//         state.loading = false;
//         const deletedSongId = action.payload; // Get the deleted song ID
//         state.items = state.items.filter((song) => song.id !== deletedSongId); // Filter out the deleted song
//       })
//     }})