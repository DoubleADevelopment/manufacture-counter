//types
import type { IDataService } from '../../../types';
import type { IChemistryDataItem, IChemistryData } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';
//variables
import { ChemistryPackagesNames } from '../variables/data-variables';

class ChemistryDataService implements IDataService<IChemistryData> {
  #data: IChemistryData;

  constructor(data: IChemistryData) {
    this.#data = data;
  }

  getData(): IChemistryData {
    return this.#data;
  }

  getDataItem(id: string, packageName: ChemistryPackagesNames): IChemistryDataItem {
    return this.#data[packageName][id];
  }
}

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
