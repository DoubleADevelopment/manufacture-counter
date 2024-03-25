//abstract
import { AbstractRepository } from '../../../repository';
//services
import suppliesDataService from '../services/supplies-data.service';
//variables
import { SUPPLIES_STORAGE_NAME } from '../variables';

class SuppliesRepositroy extends AbstractRepository {}

const suppliesRepository = new SuppliesRepositroy(suppliesDataService, SUPPLIES_STORAGE_NAME);

export default suppliesRepository;
