import { chemistrySlice } from '../slice/slice';
//variables
import { ChemistryLogsNames } from '../../variables/data-variables';
//services
import chemistryDataService from '../../services/chemistry-data.service';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk, IIncDecAction } from '../../../../types';
import type { IClearItemDataAction } from '../../../../types/action-types';

const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

export const incrementAction =
  (action: IIncDecAction): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: `+${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry.items);
  };

export const decrementAction =
  (action: IIncDecAction): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: `-${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry.items);
  };

export const clearItemDataAction =
  (action: IClearItemDataAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = chemistryDataService.getDataItem(action.UNID);
    dispatch(clearItem(clearedItem));

    chemistryRepository.sendData(getState().chemistry.items);
  };

export const clearDataAction = (): AppThunk => (dispatch, getState) => {
  const clearedItem = chemistryDataService.getData();
  dispatch(clearData(clearedItem));

  chemistryRepository.sendData(getState().chemistry.items);
};
