import { configureStore } from '@reduxjs/toolkit';
import pigmentsSlice from '../app/pigments/store/slice/slice';

export const store = configureStore({
  reducer: {
    pigments: pigmentsSlice,
  },
});
