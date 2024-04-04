import { gumsSlice } from '../slice/slice';
//repository
import gumsRepository from '../../repository/gums-repository';
//actions builder
import ActionsBuilder from '../../../../store/actions-builder';
const {
  incrementAction,
  decrementAction,
  clearItemDataAction,
  clearDataAction,
  changeItemAdditionalSettingAction,
} = ActionsBuilder(gumsRepository, gumsSlice);

export {
  incrementAction,
  decrementAction,
  clearItemDataAction,
  clearDataAction,
  changeItemAdditionalSettingAction,
};
