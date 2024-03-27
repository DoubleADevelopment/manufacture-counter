import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { PigmentsLogsNames, PigmentsSettingsNames } from '../../variables/';
//state
import pigmentsState from '../state/state';
//types
import type {
  IChangeItemSettingActionPayload,
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  ILogActionPayload,
} from '../../../../types';

export const pigmentsSlice = createSlice({
  name: 'pigments',
  initialState: pigmentsState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionPayload<PigmentsLogsNames>>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionPayload<PigmentsLogsNames>>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogActionPayload<PigmentsLogsNames>>) => {
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
    changeItemSetting: (
      state,
      action: PayloadAction<IChangeItemSettingActionPayload<PigmentsSettingsNames>>,
    ) => {
      const { UNID, settingName, newSettingValue } = action.payload;
      state[UNID].settings[settingName].settingValue = newSettingValue;
    },
  },
});

export const { increment, decrement, log, clearItem, clearData, changeItemSetting } =
  pigmentsSlice.actions;

export default pigmentsSlice.reducer;
