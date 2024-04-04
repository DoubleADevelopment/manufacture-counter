//layout
import { AppRoutingLayout } from '../../layouts';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from './store/slectors/selectors';
import {
  clearItemDataAction,
  changeItemAdditionalSettingAction,
  decrementAction,
  incrementAction,
} from './store/actions/actions';
//repository
import suppliesRepository from './repository/supplies-repository';

const SuppliesApp = (): JSX.Element => {
  return (
    <AppRoutingLayout
      repository={suppliesRepository}
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

export default SuppliesApp;
