import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { CHEMISTRY_COUNTERS } from '../../variables/';
//state
import chemistryState from '../state/state';
//types
import type {
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  ILogActionPayload,
} from '../../../../types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionPayload<CHEMISTRY_COUNTERS>>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionPayload<CHEMISTRY_COUNTERS>>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogActionPayload<CHEMISTRY_COUNTERS>>) => {
      const { UNID, logName, log } = action.payload;
      state[UNID].logs[logName].log.push(log);
      state[UNID].logs[logName].lastChange = new Date().getTime().toString();
    },
    clearItem: (state, action: PayloadAction<IClearItemActionPayload>) => {
      const { UNID } = action.payload.item;
      state[UNID] = action.payload.item;
    },
    clearData: (state, action: PayloadAction<IData>) => {
      return action.payload;
    },
  },
});

export const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

export default chemistrySlice.reducer;
