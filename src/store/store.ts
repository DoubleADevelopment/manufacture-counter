import { configureStore } from '@reduxjs/toolkit';
//slices
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
