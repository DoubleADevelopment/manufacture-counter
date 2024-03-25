import { chemistrySlice } from '../slice/slice';
//variables
import { ChemistryLogsNames } from '../../variables/';
//services
import chemistryDataService from '../../services/chemistry-data.service';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk } from '../../../../types';
import type { IClearItemAction, IIncDecAction } from '../../types';

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
    chemistryRepository.sendData(getState().chemistry);
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
    chemistryRepository.sendData(getState().chemistry);
  };

export const clearItemDataAction =
  (action: IClearItemAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = chemistryDataService.getDataItem(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    chemistryRepository.sendData(getState().chemistry);
  };

export const clearDataAction = (): AppThunk => (dispatch, getState) => {
  const clearedItem = chemistryDataService.getData();
  dispatch(clearData(clearedItem));

  chemistryRepository.sendData(getState().chemistry);
};
