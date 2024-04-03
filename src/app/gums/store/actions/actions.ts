import { gumsSlice } from '../slice/slice';
//repository
import gumsRepository from '../../repository/gums-repository';
//types
import type {
  AppThunk,
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IIncDecActionPayload,
} from '../../../../types';

const { increment, decrement, log, clearItem, clearData, changeItemAdditionalSetting } =
  gumsSlice.actions;

const incrementAction =
  (action: IIncDecActionPayload): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: action.logText ? action.logText : `+${action.value.toString()}`,
      counterName: action.counterName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    gumsRepository.sendData(getState().gums);
  };

const decrementAction =
  (action: IIncDecActionPayload): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: action.logText ? action.logText : `-${action.value.toString()}`,
      counterName: action.counterName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    gumsRepository.sendData(getState().gums);
  };

const clearItemDataAction =
  (action: IClearItemActionPayload): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = gumsRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    gumsRepository.sendData(getState().gums);
  };

const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = gumsRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  gumsRepository.clearData();
};

const changeItemAdditionalSettingAction =
  (action: IChangeItemAdditionalSettingActionPayload): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemAdditionalSetting(action));
    gumsRepository.sendData(getState().gums);
  };

export {
  incrementAction,
  decrementAction,
  clearItemDataAction,
  clearDataAction,
  changeItemAdditionalSettingAction,
};
