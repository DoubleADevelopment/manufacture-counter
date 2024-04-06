import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
//types
import type {
  IRepository,
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  ILogActionPayload,
  IState,
} from '../types';

interface ISliceBuilderParams {
  repository: IRepository;
}

const SliceBuilder = ({ repository }: ISliceBuilderParams): Slice<IState> => {
  const AppSlice = createSlice({
    name: repository.getPackageData().dataPackageName,
    initialState: repository.getState(),

    reducers: {
      increment: (state, action: PayloadAction<IIncDecActionPayload>) => {
        const { UNID, value } = action.payload;
        state.items[UNID].amount = state.items[UNID].amount + value;
      },
      decrement: (state, action: PayloadAction<IIncDecActionPayload>) => {
        const { UNID, value } = action.payload;
        state.items[UNID].amount = state.items[UNID].amount - value;
      },
      log: (state, action: PayloadAction<ILogActionPayload>) => {
        const { UNID, counterName, log } = action.payload;
        state.items[UNID].counters[counterName].logs.push(log);
        state.items[UNID].counters[counterName].lastChange = new Date().getTime().toString();
      },
      clearItem: (state, action: PayloadAction<IClearItemActionPayload>) => {
        const { UNID } = action.payload.item;
        state.items[UNID] = action.payload.item;
      },
      clearData: (state, action: PayloadAction<IData>) => {
        state.items = action.payload;
      },
      changeItemAdditionalSetting: (
        state,
        action: PayloadAction<IChangeItemAdditionalSettingActionPayload>,
      ) => {
        const { UNID, counterName, newSettingValue } = action.payload;
        state.items[UNID].counters[counterName].counterAdditionalValue = newSettingValue;
      },
    },
  });

  return AppSlice;
};

export default SliceBuilder;
