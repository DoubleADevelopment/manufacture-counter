import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import type { IChangeOverviewPanelStatus, overviewPanelStatusType } from '../types';

interface IAppInitialState {
  overviewPanelStatus: overviewPanelStatusType;
}

const AppInitialState: IAppInitialState = {
  overviewPanelStatus: 'close',
};

const AppSlice = createSlice({
  name: 'app',
  initialState: AppInitialState,

  reducers: {
    changeOverviewPanelStatus: (state, action: PayloadAction<IChangeOverviewPanelStatus>) => {
      const { newStatus } = action.payload;
      state.overviewPanelStatus = newStatus;
    },
  },
});

export default AppSlice;
