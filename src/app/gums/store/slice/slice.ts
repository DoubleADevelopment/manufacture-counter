import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//repository
import gumsRepository from '../../repository/gums-repository';
//types
import type {
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  ILogActionPayload,
} from '../../../../types';

export const gumsSlice = createSlice({
  name: gumsRepository.getPackageData().dataPackageName,
  initialState: gumsRepository.getData(),

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
      console.log(UNID, counterName, log);
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
  gumsSlice.actions;

export default gumsSlice.reducer;
