// saga.ts
import { put, takeLatest, all, call ,takeEvery} from 'redux-saga/effects';
import AddSongForm from '../../components/AddSongForm';

// import { api } from '../../services/api';
import { getSongs,fetchSongsFailure ,addSong} from './songSlice';
import axios from 'axios'
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchSongs(): Generator<any, void, any> {
  try {

    const response = yield call( ()=>axios.get('http://localhost:3000/api/songs'));
    const data = yield response.data;
    console.log(data)
      console.log('fetch good')
    // const data = yield response.json();
    
    yield put(getSongs(data));
  } catch (error:any) { 
    yield put(fetchSongsFailure(error.message));
  }
}
function *songSaga(){
  takeEvery('songs/getSongs',fetchSongs)
  // takeEvery('songs/addsong',addSongs)
  console.log('ima good also here')

}

function* addSongSaga():Generator<any, void, any>  {
  try {
    const response = yield call(() => fetch('http://localhost:3000/api/songs', { method: 'POST',headers: {
      'Content-Type': 'application/json'
    }}));
    const data = yield response.json();

    yield put(addSong(data)); // Dispatch success action
  } catch (error:any) {
    yield put(fetchSongsFailure(error.message)); // Dispatch failure action
  }
}

export function* watchAddSong() {
  yield takeEvery('songs/addSong', addSongSaga); // Update with your actual action name
}


// function* updateSong(action:{payload:any}):Generator<any,void,any> {
//   try {
//     const response = yield call(api.put, `/songs/${action.payload.id}`, action.payload);
//     yield put(actions.updateSongRequest(response.data));
//   } catch (error:any) {
//     yield put(actions.fetchSongsFailure(error.message));
//   }
// }

// function* deleteSong(action:{payload:any}) {
//   try {
//     yield call(api.delete, `/songs/${action.payload}`);
//     yield put(actions.deleteSongSuccess(action.payload));
//   } catch (error:any) {
//     yield put(actions.fetchSongsFailure(error.message));
//   }
// }

// export function* songsSaga() :Generator<any,void,any>{
//   yield all([
//     takeLatest(actions.fetchSongsRequest.type, fetchSongs),
//     takeLatest(actions.addSongSuccess, addSong),
//     takeLatest(actions.updateSongRequest, updateSong),
//     takeLatest(actions.deleteSongSuccess, deleteSong),
//   ]);
// }
export  function* rootSaga():Generator<any, void, any> {
  yield all([
    fetchSongs(),
    addSongSaga(),
    songSaga(),
    watchAddSong,
    // watchDeleteSong(),
    // Add other sagas if needed
  ]);
}

export default songSaga
