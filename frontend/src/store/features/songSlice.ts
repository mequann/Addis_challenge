// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// export interface song{

//     id:number;
//     title:string;
//     artist:string;
//     album:string;
//     genre:string;
    
// }
// interface songState{
//     songs:song[]
//     loading: boolean;
//     error: string | null;
// }
// //define initial state
// const initialState:songState={
//     songs:[],
//     loading :false,
//     error:null
// }
// //create songSlice
// export const songSlice=createSlice({
//     name:'songs',
//     initialState,
//     reducers:{
//         addSong:(state,action:PayloadAction<song>)=>{
//             state.songs.push(action.payload)
//         }

// }
// }
// )
// export default songSlice.reducer;
// export const {addSong}=songSlice.actions
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
 
}

export interface SongState {
  songs: Song[];
  isloading:boolean
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  isloading: false,
  error: null,
};

export const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getsongsfetch:(state)=>{
      state.isloading = true;
    },
    getSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs= action.payload;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.isloading = false;
      state.error = action.payload;
    },
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
  },
});

export const {  getsongsfetch,fetchSongsFailure, getSongs, addSong, updateSong, deleteSong } = songSlice.actions;
export default songSlice.reducer;