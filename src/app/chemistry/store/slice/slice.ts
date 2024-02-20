import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { ChemistryLogsNames } from '../../variables/data-variables';
//state
import chemistryState from '../state/state';
//types
import type { IIncDecActionParametrsType, ILogActionType } from '../../../../types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const { UNID, value } = action.payload;
      state.items[UNID].amount = state.items[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const { UNID, value } = action.payload;
      state.items[UNID].amount = state.items[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogActionType<ChemistryLogsNames>>) => {
      const { UNID, logName, log } = action.payload;
      console.log(UNID, logName, log);
      state.items[UNID].logs[logName].log = [...state.items[UNID].logs[logName].log, log];
    },
  },
});

export const { increment, decrement, log } = chemistrySlice.actions;

export default chemistrySlice.reducer;
