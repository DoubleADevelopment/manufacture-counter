//abstract
//types
import type { IData } from '../../../types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import { AbstractDataService, adapterService } from '../../../services';

const adaptedData: IData = adapterService.adaptDataToApp(chemistryData);

class ChemistryDataService extends AbstractDataService {}

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
