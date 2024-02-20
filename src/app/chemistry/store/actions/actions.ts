//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk, IIncDecActionParametrsType } from '../../../../types';
import { chemistrySlice } from '../slice/slice';
import { ChemistryLogsNames } from '../../variables/data-variables';

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(chemistrySlice.actions.increment(action));
    dispatch(
      chemistrySlice.actions.log({
        log: `+${action.value.toString()}`,
        logName: ChemistryLogsNames.COUNTER,
        UNID: action.UNID,
      }),
    );
    chemistryRepository.sendData(getState().chemistry.items);
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(chemistrySlice.actions.decrement(action));
    dispatch(
      chemistrySlice.actions.log({
        log: `-${action.value.toString()}`,
        logName: ChemistryLogsNames.COUNTER,
        UNID: action.UNID,
      }),
    );
    chemistryRepository.sendData(getState().chemistry.items);
  };
