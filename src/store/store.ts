import { configureStore } from '@reduxjs/toolkit';
import chemistrySlice from '../app/chemistry/store/slice/slice';
import gumsSlice from '../app/gums/store/slice/slice';

export const store = configureStore({
  reducer: {
    chemistry: chemistrySlice,
    gums: gumsSlice,
  },
});
