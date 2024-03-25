//repository
import gumsRepository from '../../repository/gums-repository';
//types
import type { IData } from '../../../../types';

const gumsState: IData = gumsRepository.getData();

export default gumsState;
