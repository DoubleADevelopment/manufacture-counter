import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import type { IChangeOverviewOpenStatus } from '../types';

const AppSlice = createSlice({
  name: 'app',
  initialState: {
    overviewOpenStatus: false,
  },

  reducers: {
    changeOverviewOpenStatus: (state, action: PayloadAction<IChangeOverviewOpenStatus>) => {
      const { newStatus } = action.payload;
      state.overviewOpenStatus = newStatus;
    },
  },
});

export default AppSlice;
