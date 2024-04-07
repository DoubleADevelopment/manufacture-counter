//layout
import { AppRoutingLayout } from '../../layouts';
//store
import Selectors from './store/slectors/selectors';
import Actions from './store/actions/actions';
//repository
import bigbagsRepository from './repository/bigbags-repository';

const BigbagsApp = (): JSX.Element => {
  return (
    <AppRoutingLayout repository={bigbagsRepository} Selectors={Selectors} Actions={Actions} />
  );
};

export default BigbagsApp;
