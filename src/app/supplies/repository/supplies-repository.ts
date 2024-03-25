//services
import { AbstractRepository } from '../../../repository';
import { adapterService } from '../../../services';
//data
import suppliesData from '../data/supplies-data';
//types
import { IData } from '../../../types';
//variables
import { SUPPLIES_STORAGE_NAME } from '../variables';

const adaptedData: IData = adapterService.adaptDataToApp(suppliesData);

class SuppliesRepositroy extends AbstractRepository {}

const suppliesRepository = new SuppliesRepositroy(adaptedData, SUPPLIES_STORAGE_NAME);

export default suppliesRepository;
