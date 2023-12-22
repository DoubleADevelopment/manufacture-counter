import { configureStore } from '@reduxjs/toolkit';
import chemistrySlice from '../app/chemistry/store/slice/slice';

export const store = configureStore({
  reducer: {
    chemistry: chemistrySlice,
  },
});
