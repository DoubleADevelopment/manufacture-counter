//services
import { AbstractRepository } from '../../../repository';
//data
import suppliesData from '../data/supplies-data';
//variables
import { SUPPLIES_STORAGE_NAME } from '../variables';

class SuppliesRepositroy extends AbstractRepository {}

const suppliesRepository = new SuppliesRepositroy(suppliesData, SUPPLIES_STORAGE_NAME);

export default suppliesRepository;
