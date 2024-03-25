import { pigmentsSlice } from '../slice/slice';
//services
import pigmentsDataService from '../../services/pigments-data.service';
//repository
import pigmentsRepository from '../../repository/pigments-repository';
//types
import type { AppThunk, IItemData } from '../../../../types';
import type { IChangeItemSetting, IClearItemAction, IIncDecAction } from '../../types';

const { increment, decrement, log, clearItem, clearData, changeItemSetting } =
  pigmentsSlice.actions;

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
    pigmentsRepository.sendData(getState().pigments);
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
    pigmentsRepository.sendData(getState().pigments);
  };

export const clearItemDataAction =
  (action: IClearItemAction<IItemData>): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = pigmentsDataService.getDataItem(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    pigmentsRepository.sendData(getState().pigments);
  };

export const clearDataAction = (): AppThunk => (dispatch, getState) => {
  const clearedItem = pigmentsDataService.getData();
  dispatch(clearData(clearedItem));

  pigmentsRepository.sendData(getState().pigments);
};

export const changeItemSettingAction =
  (action: IChangeItemSetting): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemSetting(action));
    pigmentsRepository.sendData(getState().pigments);
  };
