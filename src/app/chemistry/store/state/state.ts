//repository
import chemistryRepository from '../../repository/chemistry-repository';
//adapter
// import Adapter from '../../../../adapter/adapter';
//types
import { IChemistryStateType } from '../../types/state-types';

const chemistryState: IChemistryStateType = {
  items: chemistryRepository.getDefaultData().items,
};

export default chemistryState;
