//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk, IIncDecActionParametrsType } from '../../../../types';
import { chemistrySlice } from '../slice/slice';
import { ChemistryLogsNames } from '../../variables/data-variables';

const { increment, decrement, log } = chemistrySlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: `+${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry.items);
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: `-${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry.items);
  };
