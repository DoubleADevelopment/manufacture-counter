//repository
import gumsRepository from '../../repository/gums-repository';
//types
import type { IGumsData } from '../../types/';

const gumsState: IGumsData = gumsRepository.getData();

export default gumsState;
