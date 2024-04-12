//slice builder
import SliceBuilder from '../../../../store/store-builders/slice-builder';
//repository
import suppliesRepository from '../../repository/supplies-repository';

export const suppliesSlice = SliceBuilder({ repository: suppliesRepository });

export const { increment, decrement, log, clearItem, clearData, changeItemAdditionalSetting } =
  suppliesSlice.actions;

export default suppliesSlice.reducer;
