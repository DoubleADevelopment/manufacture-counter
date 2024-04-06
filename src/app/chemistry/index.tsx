//layout
import { AppRoutingLayout } from '../../layouts';
//state
import Selectors from './store/slectors/selectors';
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
      Selectors={Selectors}
      clearItemDataAction={clearItemDataAction}
      incrementAction={incrementAction}
      decrementAction={decrementAction}
      changeItemAdditionalSettingAction={changeItemAdditionalSettingAction}
    />
  );
};

export default ChemistryApp;
