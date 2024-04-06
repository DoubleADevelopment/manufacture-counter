//layout
import { AppRoutingLayout } from '../../layouts';
//store
import Selectors from './store/slectors/selectors';
import Actions from './store/actions/actions';
//repository
import suppliesRepository from './repository/supplies-repository';

const SuppliesApp = (): JSX.Element => {
  return (
    <AppRoutingLayout repository={suppliesRepository} Selectors={Selectors} Actions={Actions} />
  );
};

export default SuppliesApp;
