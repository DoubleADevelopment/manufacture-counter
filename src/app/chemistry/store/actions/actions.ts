import { chemistrySlice } from '../slice/slice';
//variables
import { ChemistryLogsNames } from '../../variables/';
//services
import chemistryDataService from '../../services/chemistry-data.service';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk } from '../../../../types';
import type {
  IClearItemDataPackageAction,
  IIncDecPackageAction,
} from '../../../../types/action-types';

const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

export const incrementAction =
  (action: IIncDecPackageAction): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: `+${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
      packageName: action.packageName,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry.packages);
  };

export const decrementAction =
  (action: IIncDecPackageAction): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: `-${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
      packageName: action.packageName,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry.packages);
  };

export const clearItemDataAction =
  (action: IClearItemDataPackageAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = chemistryDataService.getDataItem(action.UNID, action.packageName);
    dispatch(clearItem({ item: clearedItem, packageName: action.packageName }));

    chemistryRepository.sendData(getState().chemistry.packages);
  };

export const clearDataAction = (): AppThunk => (dispatch, getState) => {
  const clearedItem = chemistryDataService.getData();
  dispatch(clearData(clearedItem));

  chemistryRepository.sendData(getState().chemistry.packages);
};
