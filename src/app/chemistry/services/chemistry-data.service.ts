//types
import type { IChemistryData } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//variables
import { ChemistryPackagesNames } from '../variables/';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

class ChemistryDataService {
  #data: IChemistryData;

  constructor(data: IChemistryData) {
    this.#data = data;
  }

  getData(): IChemistryData {
    return this.#data;
  }

  getDataItem(id: string, packageName: ChemistryPackagesNames) {
    return this.#data[packageName][id];
  }
}
const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
