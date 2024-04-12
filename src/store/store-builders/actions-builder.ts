import { Slice } from '@reduxjs/toolkit';
//types
import type {
  AppThunk,
  IActions,
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IIncDecActionPayload,
  IRepository,
  IState,
} from '../../types';

const ActionsBuilder = (repository: IRepository, Slice: Slice<IState>): IActions => {
  const packageName = repository.getPackageData().dataPackageName;

  const { increment, decrement, log, clearItem, clearData, changeItemAdditionalSetting } =
    Slice.actions;

  return {
    incrementAction:
      (action: IIncDecActionPayload): AppThunk =>
      (dispatch, getState) => {
        dispatch(increment(action));

        const newLog = {
          log: action.logText,
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
          log: action.logText,
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
