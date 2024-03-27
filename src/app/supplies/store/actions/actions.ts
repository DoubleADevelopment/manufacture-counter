import { suppliesSlice } from '../slice/slice';
//repository
import suppliesRepository from '../../repository/supplies-repository';
//types
import type {
  AppThunk,
  IChangeItemSetting,
  IClearItemAction,
  IIncDecAction,
} from '../../../../types';
//variables
import { SuppliesLogsNames, SuppliesSettingsNames } from '../../variables';

const { increment, decrement, log, clearItem, clearData, changeItemSetting } =
  suppliesSlice.actions;

export const incrementAction =
  (action: IIncDecAction<SuppliesLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: action.logText ? action.logText : `+${action.value.toString()}`,
      logName: action.logName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    suppliesRepository.sendData(getState().supplies);
  };

export const decrementAction =
  (action: IIncDecAction<SuppliesLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: action.logText ? action.logText : `-${action.value.toString()}`,
      logName: action.logName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    suppliesRepository.sendData(getState().supplies);
  };

export const clearItemDataAction =
  (action: IClearItemAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = suppliesRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    suppliesRepository.sendData(getState().supplies);
  };

export const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = suppliesRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  suppliesRepository.clearData();
};

export const changeItemSettingAction =
  (action: IChangeItemSetting<SuppliesSettingsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemSetting(action));
    suppliesRepository.sendData(getState().supplies);
  };
