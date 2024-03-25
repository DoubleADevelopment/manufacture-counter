//types
import type { IChemistryData, IChemistryItem } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';
import { AbstractDataService } from '../../../services';

const adaptedData: IChemistryData = chemistryAdapterService.adaptDataToApp(chemistryData);

// class ChemistryDataService {
//   #data: IChemistryData;

//   constructor(data: IChemistryData) {
//     this.#data = data;
//   }

//   getData(): IChemistryData {
//     return this.#data;
//   }

//   getDataItem(id: string) {
//     return this.#data[id];
//   }
// }

class ChemistryDataService extends AbstractDataService<IChemistryItem, IChemistryData> {}

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
