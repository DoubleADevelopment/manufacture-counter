import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//services
import chemistryDataService from '../../services/chemistry-data.service';
//variables
import { ChemistryLogsNames } from '../../variables/data-variables';
//state
import chemistryState from '../state/state';
//types
import type { IIncDecAction, ILogAction } from '../../../../types';
import type { IChemistryDataItemType } from '../../types/data-types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value } = action.payload;
      state.items[UNID].amount = state.items[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value } = action.payload;
      state.items[UNID].amount = state.items[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogAction<ChemistryLogsNames>>) => {
      const { UNID, logName, log } = action.payload;
      state.items[UNID].logs[logName].log.push(log);
    },
    clearItem: (state, action: PayloadAction<IChemistryDataItemType>) => {
      const { UNID } = action.payload;
      state.items[UNID] = action.payload;
    },
    clear: (state) => {
      state.items = chemistryDataService.getData();
    },
  },
});

export const { increment, decrement, log, clearItem } = chemistrySlice.actions;

export default chemistrySlice.reducer;
