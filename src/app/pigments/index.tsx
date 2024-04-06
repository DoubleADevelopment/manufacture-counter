//layout
import { AppRoutingLayout } from '../../layouts';
//store
import Selectors from './store/slectors/selectors';
import Actions from './store/actions/actions';
//repository
import pigmentsRepository from './repository/pigments-repository';

const PigmentsApp = (): JSX.Element => {
  return (
    <AppRoutingLayout repository={pigmentsRepository} Selectors={Selectors} Actions={Actions} />
  );
};

export default PigmentsApp;
