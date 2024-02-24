// saga.ts
import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';
import { getSongs, fetchSongsFailure, addSong ,deleteSong,updateSong} from './songSlice';
import { PayloadAction } from '@reduxjs/toolkit';

// Saga for fetching songs
export function* fetchSongs(): Generator<any, void, any> {
  try {
    const response = yield call(() => axios.get('http://localhost:3000/api/songs'));
    const data = yield response.data;
    // console.log(data);
    // console.log('Fetch successful');
    yield put(getSongs(data));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));

  }
}

// Saga for adding a song
function* addSongSaga(action:PayloadAction ): Generator<any, void, any> {
  try {
    
    const response = yield call(() =>
      axios.post('http://localhost:3000/api/songs',action.payload)
    );
    console.log('from addsong')
    // Assuming the response.data is the song object you want to add
    const data = response.data;
    
    console.log(data);
    yield put(addSong(data)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message)); // Dispatch failure action
  }
}
function* deleteSongSaga(action: PayloadAction<{id:string}>): Generator<any, void, any> {
  try {
    const {id}=action.payload
  yield call(()=>axios.delete(`http://localhost:3000/api/songs/${action.payload}`));
    yield put(deleteSong(id)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message)); // Dispatch failure action
  }
}
//function  for update
// Function for updating a song
function* updateSongSaga(action: PayloadAction<string>): Generator<any, void, any> {
  try {
    const response = yield call(() =>
      axios.put(`http://localhost:3000/api/songs/${action.payload}`, action.payload)
    );

    // Assuming the response.data is the updated song object
    const data = response.data;
    console.log('Song updated successfully');
    yield put(updateSong(data)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message)); // Dispatch failure action
  }
}
// Saga for handling song-related actions
export function* songSaga() {
  yield takeEvery('songs/getSongs', fetchSongs);
  // yield takeEvery('songs/addsong', addSongs); // Uncomment and customize if needed
  console.log('Saga initialized');
}

// Saga watcher for adding a song
export function* watchAddSong() {
  yield takeEvery('songs/addSong', addSongSaga); 
}
//delet watchsaga
export function* watchdeletesong() {
  yield takeEvery('songs/deleteSong', deleteSongSaga);
}
//watcher for update
export function* watchUpdateSong() {
  yield takeEvery('songs/updateSong', updateSongSaga);
}

// Root saga combining all sagas
export function* rootSaga(): Generator<any, void, any> {
  yield all([
    fetchSongs(),
    // addSongSaga(),
    songSaga(),
    watchAddSong(),
   watchdeletesong(),
   watchUpdateSong()
  ]);
}

// Export the root saga
export default rootSaga;





