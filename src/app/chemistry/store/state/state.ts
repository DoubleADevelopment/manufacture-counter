//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { IData } from '../../../../types';

const chemistryState: IData = chemistryRepository.getData();

export default chemistryState;
