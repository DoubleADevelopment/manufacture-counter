//repository
import pigmentsRepository from '../../repository/pigments-repository';
//types
import type { IPigmentsData } from '../../types/';

const gumsState: IPigmentsData = pigmentsRepository.getData();

export default gumsState;
