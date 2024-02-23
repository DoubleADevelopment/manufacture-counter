//types
import type { IDataService } from '../../../types';
import type {
  IChemistryDataItem,
  IChemistryDataPackage,
  IChemistryData,
} from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';

class ChemistryDataService implements IDataService<IChemistryData, IChemistryDataPackage> {
  #data: IChemistryData;
  #dataPackage: IChemistryDataPackage;

  constructor(data: IChemistryData, dataPackage: IChemistryDataPackage) {
    this.#data = data;
    this.#dataPackage = dataPackage;
  }

  getData(): IChemistryData {
    return this.#data;
  }

  getDataPackage(): IChemistryDataPackage {
    return this.#dataPackage;
  }

  getDataItem(id: string): IChemistryDataItem {
    return this.#data[id];
  }
}

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

const chemistryDataService = new ChemistryDataService(adaptedData, chemistryData);

export default chemistryDataService;
