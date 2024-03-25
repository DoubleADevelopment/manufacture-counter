//types
import type { IGumsData, IGumsItem } from '../types/';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';
import { AbstractDataService } from '../../../services';

const adaptedData: IGumsData = gumsAdapterService.adaptDataToApp(gumsData);

class GumsDataService extends AbstractDataService<IGumsItem, IGumsData> {}

// class GumsDataService {
//   #data: IGumsData;

//   constructor(data: IGumsData) {
//     this.#data = data;
//   }

//   getData(): IGumsData {
//     return this.#data;
//   }

//   getDataItem(id: string) {
//     return this.#data[id];
//   }
// }
const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
