//repo
import appRepository from '../repository/app-repository';
//types
import type { AppThunk, IChangeOverviewPanelStatus } from '../types';
//slice
import AppSlice from './app-slice';

const changeOverviewPanelStatusAction =
  (action: IChangeOverviewPanelStatus): AppThunk =>
  (dispatch, getState) => {
    dispatch(AppSlice.actions.changeOverviewPanelStatus(action));

    appRepository.sendData(getState().app);
  };

export { changeOverviewPanelStatusAction };
