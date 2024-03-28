import { chemistrySlice } from '../slice/slice';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk, IClearItemActionPayload, IIncDecActionPayload } from '../../../../types';
//variables
import { CHEMISTRY_COUNTERS } from '../../variables/';

const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

const incrementAction =
  (action: IIncDecActionPayload<CHEMISTRY_COUNTERS>): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: `+${action.value.toString()}`,
      logName: CHEMISTRY_COUNTERS.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry);
  };

const decrementAction =
  (action: IIncDecActionPayload<CHEMISTRY_COUNTERS>): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: `-${action.value.toString()}`,
      logName: CHEMISTRY_COUNTERS.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry);
  };

const clearItemDataAction =
  (action: IClearItemActionPayload): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = chemistryRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    chemistryRepository.sendData(getState().chemistry);
  };

const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = chemistryRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  chemistryRepository.clearData();
};

export { incrementAction, decrementAction, clearItemDataAction, clearDataAction };
