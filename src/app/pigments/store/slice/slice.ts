import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//repository
import pigmentsRepository from '../../repository/pigments-repository';
//types
import type {
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  ILogActionPayload,
} from '../../../../types';

export const pigmentsSlice = createSlice({
  name: 'pigments',
  initialState: pigmentsRepository.getData(),

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionPayload>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionPayload>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogActionPayload>) => {
      const { UNID, counterName, log } = action.payload;
      state[UNID].counters[counterName].logs.push(log);
      state[UNID].counters[counterName].lastChange = new Date().getTime().toString();
    },
    clearItem: (state, action: PayloadAction<IClearItemActionPayload>) => {
      const { UNID } = action.payload.item;
      state[UNID] = action.payload.item;
    },
    clearData: (state, action: PayloadAction<IData>) => {
      return action.payload;
    },
    changeItemAdditionalSetting: (
      state,
      action: PayloadAction<IChangeItemAdditionalSettingActionPayload>,
    ) => {
      const { UNID, counterName, newSettingValue } = action.payload;
      state[UNID].counters[counterName].counterAdditionalValue = newSettingValue;
    },
  },
});

export const { increment, decrement, log, clearItem, clearData, changeItemAdditionalSetting } =
  pigmentsSlice.actions;

export default pigmentsSlice.reducer;
