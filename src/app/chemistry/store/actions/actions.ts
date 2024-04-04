import { chemistrySlice } from '../slice/slice';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//actions builder
import ActionsBuilder from '../../../../store/actions-builder';

const {
  incrementAction,
  decrementAction,
  clearItemDataAction,
  clearDataAction,
  changeItemAdditionalSettingAction,
} = ActionsBuilder(chemistryRepository, chemistrySlice);

export {
  incrementAction,
  decrementAction,
  clearItemDataAction,
  clearDataAction,
  changeItemAdditionalSettingAction,
};
