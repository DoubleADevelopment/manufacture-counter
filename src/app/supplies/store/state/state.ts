//repository
import suppliesRepository from '../../repository/supplies-repository';
//types
import type { ISuppliesData } from '../../types/';

const suppliesState: ISuppliesData = suppliesRepository.getData();

export default suppliesState;
