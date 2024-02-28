import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { ChemistryLogsNames } from '../../variables/';
//state
import chemistryState from '../state/state';
//types

import type { IChemistryData, IChemistryItem } from '../../types/data-types';
import { IClearItemAction, IIncDecAction, ILogAction } from '../../types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value, packageName } = action.payload;
      console.log(UNID, value);
      state[packageName][UNID].amount = state[packageName][UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value, packageName } = action.payload;
      console.log(UNID, value);
      state[packageName][UNID].amount = state[packageName][UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogAction<ChemistryLogsNames>>) => {
      const { UNID, logName, log, packageName } = action.payload;
      console.log(UNID, logName, log);
      state[packageName][UNID].logs[logName].log.push(log);
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
