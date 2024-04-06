//layout
import { AppRoutingLayout } from '../../layouts';
//store
import Selectors from './store/slectors/selectors';
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
      Selectors={Selectors}
      clearItemDataAction={clearItemDataAction}
      incrementAction={incrementAction}
      decrementAction={decrementAction}
      changeItemAdditionalSettingAction={changeItemAdditionalSettingAction}
    />
  );
};

export default GumsApp;
