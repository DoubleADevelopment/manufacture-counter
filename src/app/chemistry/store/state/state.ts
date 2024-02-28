//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { IChemistryData } from '../../types/data-types';

const chemistryState: IChemistryData = chemistryRepository.getData();

export default chemistryState;
