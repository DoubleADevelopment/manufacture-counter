import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { ChemistryLogsNames } from '../../variables/';
//state
import chemistryState from '../state/state';
//types
import type {
  ILogPackageAction,
  IIncDecPackageAction,
  IClearItemPackageAction,
} from '../../../../types';
import type { IChemistryData } from '../../types/data-types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecPackageAction>) => {
      const { UNID, value, packageName } = action.payload;
      console.log(UNID, value);
      // state.items[UNID].amount = state.items[UNID].amount + value;
      state.packages[packageName][UNID].amount = state.packages[packageName][UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecPackageAction>) => {
      const { UNID, value, packageName } = action.payload;
      console.log(UNID, value);
      // state.items[UNID].amount = state.items[UNID].amount - value;
      state.packages[packageName][UNID].amount = state.packages[packageName][UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogPackageAction<ChemistryLogsNames>>) => {
      const { UNID, logName, log, packageName } = action.payload;
      console.log(UNID, logName, log);
      // state.items[UNID].logs[logName].log.push(log);
      state.packages[packageName][UNID].logs[logName].log.push(log);
    },
    clearItem: (state, action: PayloadAction<IClearItemPackageAction>) => {
      const { UNID } = action.payload.item;
      state.packages[action.payload.packageName][UNID] = action.payload.item;
    },
    clearData: (state, action: PayloadAction<IChemistryData>) => {
      // state.items = action.payload;
      console.log(action.payload);
    },
  },
});

export const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

export default chemistrySlice.reducer;
