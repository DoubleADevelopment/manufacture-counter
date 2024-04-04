//layout
import { AppRoutingLayout } from '../../layouts';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from './store/slectors/selectors';
import {
  changeItemAdditionalSettingAction,
  clearItemDataAction,
  decrementAction,
  incrementAction,
} from './store/actions/actions';
//repository
import pigmentsRepository from './repository/pigments-repository';

const PigmentsApp = (): JSX.Element => {
  return (
    <AppRoutingLayout
      repository={pigmentsRepository}
      SelectorGetData={SelectorGetData}
      SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
      SelectorGetItemData={SelectorGetItemData}
      clearItemDataAction={clearItemDataAction}
      incrementAction={incrementAction}
      decrementAction={decrementAction}
      changeItemAdditionalSettingAction={changeItemAdditionalSettingAction}
    />
  );
};

export default PigmentsApp;
