//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import { IChemistryStateType } from '../../types/state-types';

const chemistryState: IChemistryStateType = {
  items: chemistryRepository.getDefaultData(),
};

export default chemistryState;
