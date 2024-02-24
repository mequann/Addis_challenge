import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongState {
  songs: Song[];
  isloading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  isloading: false,
  error: null,
};

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getsongsfetch: (state) => {
      state.isloading = true;
    },
    getSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.isloading = false;
      state.error = action.payload;
    },
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },

    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      console.log("Action Payload:", action.payload);
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const {
  getsongsfetch,
  fetchSongsFailure,
  getSongs,
  addSong,
  updateSong,
  deleteSong,
} = songSlice.actions;
export default songSlice.reducer;
