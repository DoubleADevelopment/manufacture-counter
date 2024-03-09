//types
import type { IPigmentsData } from '../types/data-type';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';

const adaptedData: IPigmentsData = pigmentsAdapterService.adaptDataToApp(pigmentsData);

class PigmentsDataService {
  #data: IPigmentsData;

  constructor(data: IPigmentsData) {
    this.#data = data;
  }

  getData(): IPigmentsData {
    return this.#data;
  }

  getDataItem(id: string) {
    return this.#data[id];
  }
}
const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
