import { Slice } from '@reduxjs/toolkit';
import type {
  AppThunk,
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  IRepository,
} from '../types';

const ActionsBuilder = (repository: IRepository, Slice: Slice<IData>) => {
  const packageName = repository.getPackageData().dataPackageName;

  const { increment, decrement, log, clearItem, clearData, changeItemAdditionalSetting } =
    Slice.actions;

  return {
    incrementAction:
      (action: IIncDecActionPayload): AppThunk =>
      (dispatch, getState) => {
        dispatch(increment(action));

        const newLog = {
          log: `+${action.value.toString()}`,
          counterName: action.counterName,
          UNID: action.UNID,
        };

        dispatch(log(newLog));
        repository.sendData(getState()[packageName]);
      },

    decrementAction:
      (action: IIncDecActionPayload): AppThunk =>
      (dispatch, getState) => {
        dispatch(decrement(action));

        const newLog = {
          log: `-${action.value.toString()}`,
          counterName: action.counterName,
          UNID: action.UNID,
        };

        dispatch(log(newLog));
        repository.sendData(getState()[packageName]);
      },

    clearItemDataAction:
      (action: IClearItemActionPayload): AppThunk =>
      (dispatch, getState) => {
        const clearedItem = repository.getDefaultItemData(action.item.UNID);
        dispatch(clearItem({ item: clearedItem }));

        repository.sendData(getState()[packageName]);
      },

    clearDataAction: (): AppThunk => (dispatch) => {
      const clearedItem = repository.getDefaultData();
      dispatch(clearData(clearedItem));

      repository.clearData();
    },

    changeItemAdditionalSettingAction:
      (action: IChangeItemAdditionalSettingActionPayload): AppThunk =>
      (dispatch, getState) => {
        dispatch(changeItemAdditionalSetting(action));
        repository.sendData(getState()[packageName]);
      },
  };
};

export default ActionsBuilder;
