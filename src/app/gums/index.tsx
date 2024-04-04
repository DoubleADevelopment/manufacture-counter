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
  decrementAction,
  incrementAction,
  changeItemAdditionalSettingAction,
} from './store/actions/actions';
//repository
import gumsRepository from './repository/gums-repository';

const GumsApp = (): JSX.Element => {
  return (
    <AppRoutingLayout
      repository={gumsRepository}
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

export default GumsApp;
