//layout
import { AppRoutingLayout } from '../../layouts';
//state
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetData,
  SelectorGetItemData,
} from './store/slectors/selectors';
import {
  clearItemDataAction,
  decrementAction,
  incrementAction,
  changeItemAdditionalSettingAction,
} from './store/actions/actions';
//repository
import chemistryRepository from './repository/chemistry-repository';

const ChemistryApp = (): JSX.Element => {
  return (
    <AppRoutingLayout
      repository={chemistryRepository}
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

export default ChemistryApp;
