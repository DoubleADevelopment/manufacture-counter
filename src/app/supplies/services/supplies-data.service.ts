//abstract
import { AbstractDataService } from '../../../services';
//types
import type { IData } from '../../../types';
//data
import suppliesData from '../data/supplies-data';
//adapters
import suppliesAdapterService from './supplies-adapter.service';

const adaptedData: IData = suppliesAdapterService.adaptDataToApp(suppliesData);

class SuppliesDataService extends AbstractDataService {}

const suppliesDataService = new SuppliesDataService(adaptedData);

export default suppliesDataService;
