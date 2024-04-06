//layout
import { AppRoutingLayout } from '../../layouts';
//state
import Selectors from './store/slectors/selectors';
import Actions from './store/actions/actions';
//repository
import chemistryRepository from './repository/chemistry-repository';

const ChemistryApp = (): JSX.Element => {
  return (
    <AppRoutingLayout repository={chemistryRepository} Selectors={Selectors} Actions={Actions} />
  );
};

export default ChemistryApp;
