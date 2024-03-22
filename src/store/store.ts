import { configureStore } from '@reduxjs/toolkit';
import chemistrySlice from '../app/chemistry/store/slice/slice';
import gumsSlice from '../app/gums/store/slice/slice';
import pigmentsSlice from '../app/pigments/store/slice/slice';
import suppliesSlice from '../app/supplies/store/slice/slice';

export const store = configureStore({
  reducer: {
    chemistry: chemistrySlice,
    gums: gumsSlice,
    pigments: pigmentsSlice,
    supplies: suppliesSlice,
  },
});
