//types
import type { IChemistryData } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';
//abstract
import { AbstractDataService } from '../../../services';

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

class ChemistryDataService extends AbstractDataService<IChemistryData> {
  constructor(data: IChemistryData) {
    super(data);
  }
}
const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
