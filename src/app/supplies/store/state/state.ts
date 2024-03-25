//repository
import suppliesRepository from '../../repository/supplies-repository';
//types
import type { IData } from '../../../../types';

const suppliesState: IData = suppliesRepository.getData();

export default suppliesState;
