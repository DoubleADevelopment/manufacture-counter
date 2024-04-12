import { AppThunk, IChangeOverviewPanelStatus } from '../types';

import AppSlice from './app-slice';

const changeOverviewPanelStatus =
  (action: IChangeOverviewPanelStatus): AppThunk =>
  (dispatch) => {
    dispatch(AppSlice.actions.changeOverviewPanelStatus(action));
  };

export { changeOverviewPanelStatus };
