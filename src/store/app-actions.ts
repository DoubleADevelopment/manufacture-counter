//types
import type { AppThunk, IChangeOverviewPanelStatus } from '../types';
//slice
import AppSlice from './app-slice';

const changeOverviewPanelStatus =
  (action: IChangeOverviewPanelStatus): AppThunk =>
  (dispatch) => {
    dispatch(AppSlice.actions.changeOverviewPanelStatus(action));
  };

export { changeOverviewPanelStatus };
