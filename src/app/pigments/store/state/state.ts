//repository
import pigmentsRepository from '../../repository/pigments-repository';
//types
import type { IData } from '../../../../types';

const gumsState: IData = pigmentsRepository.getData();

export default gumsState;
