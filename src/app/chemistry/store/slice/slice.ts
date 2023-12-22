import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//state
import chemistryState from '../state/state';
//types
import type { IIncDecActionParametrsType } from '../../../../types';

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
  },
});

export const { increment, decrement } = chemistrySlice.actions;

export default chemistrySlice.reducer;
