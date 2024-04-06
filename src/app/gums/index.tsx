//layout
import { AppRoutingLayout } from '../../layouts';
//store
import Selectors from './store/slectors/selectors';
import Actions from './store/actions/actions';
//repository
import gumsRepository from './repository/gums-repository';

const GumsApp = (): JSX.Element => {
  return <AppRoutingLayout repository={gumsRepository} Selectors={Selectors} Actions={Actions} />;
};

export default GumsApp;
