//types
import type { ISuppliesData } from '../types';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './supplies-adapter.service';

const adaptedData: ISuppliesData = gumsAdapterService.adaptDataToApp(gumsData);

class SuppliesDataService {
  #data: ISuppliesData;

  constructor(data: ISuppliesData) {
    this.#data = data;
  }

  getData(): ISuppliesData {
    return this.#data;
  }

  getDataItem(id: string) {
    return this.#data[id];
  }
}
const suppliesDataService = new SuppliesDataService(adaptedData);

export default suppliesDataService;
