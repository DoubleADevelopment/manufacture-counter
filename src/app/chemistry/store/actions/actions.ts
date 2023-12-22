//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk, IIncDecActionParametrsType } from '../../../../types';
import { chemistrySlice } from '../slice/slice';

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(chemistrySlice.actions.increment(action));

    chemistryRepository
      .sendData(getState().chemistry.items)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(chemistrySlice.actions.decrement(action));

    chemistryRepository
      .sendData(getState().chemistry.items)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
