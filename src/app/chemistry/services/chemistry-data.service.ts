//types
// import type { IDataService } from '../../../types';
import type { IChemistryDataItem, IChemistryData } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';
//abstract
import { AbstractDataService } from '../../../services';

// class ChemistryDataService implements IDataService<IChemistryData> {
//   #data: IChemistryData;

//   constructor(data: IChemistryData) {
//     this.#data = data;
//   }

//   getData(): IChemistryData {
//     return this.#data;
//   }

//   getDataItem(id: string, packageName: string): IChemistryDataItem {
//     return this.#data[packageName][id];
//   }
// }

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

// const chemistryDataService = new ChemistryDataService(adaptedData);

class ChemistryDataService extends AbstractDataService<IChemistryData, IChemistryDataItem> {
  constructor(data: IChemistryData) {
    super(data);
  }
}

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
