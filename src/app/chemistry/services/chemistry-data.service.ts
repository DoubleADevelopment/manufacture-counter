//abstract
import { AbstractDataService } from '../../../services';
//types
import type { IData } from '../../../types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';

const adaptedData: IData = chemistryAdapterService.adaptDataToApp(chemistryData);

class ChemistryDataService extends AbstractDataService {}

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
