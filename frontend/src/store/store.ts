import { configureStore } from '@reduxjs/toolkit';
import songReducer from "./features/songSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from 'redux-saga'; // Correct import statement
// import songSaga from "./features/saga";
import { rootSaga} from './features/saga';

const saga = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    songs: songReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([saga]),
  devTools: true
  
});
// console.log(rootSaga)
saga.run(rootSaga);
// saga.run(addSongs);
// console.log(saga.run(songSaga))



export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
