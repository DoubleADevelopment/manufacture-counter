//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { IChemistryStateType } from '../../types/state-types';

const chemistryState: IChemistryStateType = {
  packages: chemistryRepository.getData(),
};

export default chemistryState;
