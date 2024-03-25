//abstract
import { AbstractRepository } from '../../../repository';
//services
import suppliesDataService from '../services/supplies-data.service';
import suppliesLocalstorageService from '../services/supplies-localstorage.service';

class SuppliesRepositroy extends AbstractRepository {}

const suppliesRepository = new SuppliesRepositroy(suppliesDataService, suppliesLocalstorageService);

export default suppliesRepository;
