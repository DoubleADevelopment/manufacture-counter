import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//state
import chemistryState from '../state/state';
//types
import type { IIncDecActionParametrsType } from '../../../../types/action-types';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const { UNID, value } = action.payload;
      state.items.items[UNID].amount = state.items.items[UNID].amount + value;
    },
  },
});
