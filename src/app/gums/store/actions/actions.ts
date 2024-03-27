import { gumsSlice } from '../slice/slice';
//repository
import gumsRepository from '../../repository/gums-repository';
//types
import type {
  AppThunk,
  IChangeItemSetting,
  IClearItemAction,
  IIncDecAction,
} from '../../../../types';
//variables
import { GumsLogsNames, GumsSettingsNames } from '../../variables';

const { increment, decrement, log, clearItem, clearData, changeItemSetting } = gumsSlice.actions;

export const incrementAction =
  (action: IIncDecAction<GumsLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: action.logText ? action.logText : `+${action.value.toString()}`,
      logName: action.logName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    gumsRepository.sendData(getState().gums);
  };

export const decrementAction =
  (action: IIncDecAction<GumsLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: action.logText ? action.logText : `-${action.value.toString()}`,
      logName: action.logName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    gumsRepository.sendData(getState().gums);
  };

export const clearItemDataAction =
  (action: IClearItemAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = gumsRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    gumsRepository.sendData(getState().gums);
  };

export const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = gumsRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  gumsRepository.clearData();
};

export const changeItemSettingAction =
  (action: IChangeItemSetting<GumsSettingsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemSetting(action));
    gumsRepository.sendData(getState().gums);
  };
