import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { GumsLogsNames } from '../../variables/';
//state
import gumsState from '../state/state';
//types
import type {
  IClearItemAction,
  IIncDecAction,
  ILogAction,
  IGumsData,
  IGumsItem,
  IChangeItemSetting,
} from '../../types';

export const gumsSlice = createSlice({
  name: 'gums',
  initialState: gumsState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecAction>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogAction<GumsLogsNames>>) => {
      const { UNID, logName, log } = action.payload;
      state[UNID].logs[logName].log.push(log);
      state[UNID].logs[logName].lastChange = new Date().getTime().toString();
    },
    clearItem: (state, action: PayloadAction<IClearItemAction<IGumsItem>>) => {
      const { UNID } = action.payload.item;
      state[UNID] = action.payload.item;
    },
    clearData: (state, action: PayloadAction<IGumsData>) => {
      state = action.payload;
    },
    changeItemSetting: (state, action: PayloadAction<IChangeItemSetting>) => {
      const { UNID, settingName, newSettingValue } = action.payload;
      state[UNID].settings[settingName].settingValue = newSettingValue;
    },
  },
});

export const { increment, decrement, log, clearItem, clearData, changeItemSetting } =
  gumsSlice.actions;

export default gumsSlice.reducer;
