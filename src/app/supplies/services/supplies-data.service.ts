//abstract
import { AbstractDataService, adapterService } from '../../../services';
//types
import type { IData } from '../../../types';
//data
import suppliesData from '../data/supplies-data';

const adaptedData: IData = adapterService.adaptDataToApp(suppliesData);

class SuppliesDataService extends AbstractDataService {}

const suppliesDataService = new SuppliesDataService(adaptedData);

export default suppliesDataService;
