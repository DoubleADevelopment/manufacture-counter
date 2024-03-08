import { gumsSlice } from '../slice/slice';
//services
import gumsDataService from '../../services/gums-data.service';
//repository
import gumsRepository from '../../repository/gums-repository';
//types
import type { AppThunk } from '../../../../types';
import type { IChangeItemSetting, IClearItemAction, IGumsItem, IIncDecAction } from '../../types';

const { increment, decrement, log, clearItem, clearData, changeItemSetting } = gumsSlice.actions;

export const incrementAction =
  (action: IIncDecAction): AppThunk =>
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
  (action: IIncDecAction): AppThunk =>
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
  (action: IClearItemAction<IGumsItem>): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = gumsDataService.getDataItem(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    gumsRepository.sendData(getState().gums);
  };

export const clearDataAction = (): AppThunk => (dispatch, getState) => {
  const clearedItem = gumsDataService.getData();
  dispatch(clearData(clearedItem));

  gumsRepository.sendData(getState().gums);
};

export const changeItemSettingAction =
  (action: IChangeItemSetting): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemSetting(action));
    gumsRepository.sendData(getState().gums);
  };
