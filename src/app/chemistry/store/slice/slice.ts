import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { ChemistryLogsNames } from '../../variables/';
//state
import chemistryState from '../state/state';
//types
import type {
  IClearItemAction,
  IIncDecAction,
  ILogAction,
  IChemistryData,
  IChemistryItem,
} from '../../types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value, packageName } = action.payload;
      state[packageName][UNID].amount = state[packageName][UNID].amount + value;
      // state[packageName][UNID].lastChange = new Date();
    },
    decrement: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value, packageName } = action.payload;
      state[packageName][UNID].amount = state[packageName][UNID].amount - value;
      // state[packageName][UNID].lastChange = new Date();
    },
    log: (state, action: PayloadAction<ILogAction<ChemistryLogsNames>>) => {
      const { UNID, logName, log, packageName } = action.payload;
      state[packageName][UNID].logs[logName].log.push(log);
      state[packageName][UNID].logs[logName].lastChange = new Date();
    },
    clearItem: (state, action: PayloadAction<IClearItemAction<IChemistryItem>>) => {
      const { UNID } = action.payload.item;
      state[action.payload.packageName][UNID] = action.payload.item;
    },
    clearData: (state, action: PayloadAction<IChemistryData>) => {
      state = action.payload;
    },
  },
});

export const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

export default chemistrySlice.reducer;
