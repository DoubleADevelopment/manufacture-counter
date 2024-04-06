import { Slice } from '@reduxjs/toolkit';
import type {
  AppThunk,
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IIncDecActionPayload,
  IRepository,
  IState,
} from '../types';

const ActionsBuilder = (repository: IRepository, Slice: Slice<IState>) => {
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
        repository.sendData(getState()[packageName].items);
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
        repository.sendData(getState()[packageName].items);
      },

    clearItemDataAction:
      (action: IClearItemActionPayload): AppThunk =>
      (dispatch, getState) => {
        const clearedItem = repository.getDefaultItemData(action.item.UNID);
        dispatch(clearItem({ item: clearedItem }));

        repository.sendData(getState()[packageName].items);
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
        repository.sendData(getState()[packageName].items);
      },
  };
};

export default ActionsBuilder;
