//abstract
import { AbstractRepository } from '../../../repository';
//services
import suppliesDataService from '../services/supplies-data.service';
import suppliesLocalstorageService from '../services/supplies-localstorage.service';
//types
import type { ISuppliesData, ISuppliesItem } from '../types/data-types';

class SuppliesRepositroy extends AbstractRepository<ISuppliesItem, ISuppliesData> {}

const suppliesRepository = new SuppliesRepositroy(suppliesDataService, suppliesLocalstorageService);

export default suppliesRepository;
