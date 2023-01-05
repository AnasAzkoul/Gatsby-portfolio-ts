/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import UIReducer from './features/UISlice'; 

const store = configureStore({
  reducer: {
    UI: UIReducer
  }
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
