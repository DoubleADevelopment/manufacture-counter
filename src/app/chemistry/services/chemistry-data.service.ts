//abstract
import { AbstractDataService } from '../../../services';
//types
import type { IChemistryData, IChemistryItem } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

class ChemistryDataService extends AbstractDataService<IChemistryItem, IChemistryData> {}

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
