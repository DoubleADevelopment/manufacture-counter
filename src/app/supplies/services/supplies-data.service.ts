//abstract
import { AbstractDataService } from '../../../services';
//types
import type { ISuppliesData, ISuppliesItem } from '../types';
//data
import suppliesData from '../data/supplies-data';
//adapters
import suppliesAdapterService from './supplies-adapter.service';

const adaptedData: ISuppliesData = suppliesAdapterService.adaptDataToApp(suppliesData);

class SuppliesDataService extends AbstractDataService<ISuppliesItem, ISuppliesData> {}

const suppliesDataService = new SuppliesDataService(adaptedData);

export default suppliesDataService;
