//types
import type { ISuppliesData } from '../types';
//data
import suppliesData from '../data/supplies-data';
//adapters
import suppliesAdapterService from './supplies-adapter.service';

const adaptedData: ISuppliesData = suppliesAdapterService.adaptDataToApp(suppliesData);

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
