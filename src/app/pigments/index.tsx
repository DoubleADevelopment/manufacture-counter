//layout
import { AppRoutingLayout } from '../../layouts';
//store
import Selectors from './store/slectors/selectors';
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
      Selectors={Selectors}
      clearItemDataAction={clearItemDataAction}
      incrementAction={incrementAction}
      decrementAction={decrementAction}
      changeItemAdditionalSettingAction={changeItemAdditionalSettingAction}
    />
  );
};

export default PigmentsApp;
