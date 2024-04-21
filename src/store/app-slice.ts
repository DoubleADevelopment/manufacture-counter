import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//repository
import appRepository from '../repository/app-repository';
//types
import type { IChangeOverviewPanelStatus } from '../types';

const AppSlice = createSlice({
  name: 'app',
  initialState: appRepository.getState(),

  reducers: {
    changeOverviewPanelStatus: (state, action: PayloadAction<IChangeOverviewPanelStatus>) => {
      const { newStatus } = action.payload;
      state.overviewPanelStatus = newStatus;
    },
  },
});

export default AppSlice;
