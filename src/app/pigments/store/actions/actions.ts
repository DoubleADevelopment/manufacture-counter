import { pigmentsSlice } from '../slice/slice';
//repository
import pigmentsRepository from '../../repository/pigments-repository';
//types
import type {
  AppThunk,
  IChangeItemSetting,
  IClearItemAction,
  IIncDecAction,
} from '../../../../types';
//variables
import { PigmentsLogsNames, PigmentsSettingsNames } from '../../variables';

const { increment, decrement, log, clearItem, clearData, changeItemSetting } =
  pigmentsSlice.actions;

export const incrementAction =
  (action: IIncDecAction<PigmentsLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: action.logText ? action.logText : `+${action.value.toString()}`,
      logName: action.logName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    pigmentsRepository.sendData(getState().pigments);
  };

export const decrementAction =
  (action: IIncDecAction<PigmentsLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: action.logText ? action.logText : `-${action.value.toString()}`,
      logName: action.logName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    pigmentsRepository.sendData(getState().pigments);
  };

export const clearItemDataAction =
  (action: IClearItemAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = pigmentsRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    pigmentsRepository.sendData(getState().pigments);
  };

export const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = pigmentsRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  pigmentsRepository.clearData();
};

export const changeItemSettingAction =
  (action: IChangeItemSetting<PigmentsSettingsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemSetting(action));
    pigmentsRepository.sendData(getState().pigments);
  };
