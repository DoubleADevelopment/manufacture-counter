//types
import type { IDataService } from '../../../types';
import type { IPigmentsData } from '../types/data-type';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';

class PigmentsDataService implements IDataService<IPigmentsData> {
  #data: IPigmentsData;

  constructor(data: IPigmentsData) {
    this.#data = data;
  }

  getData(): IPigmentsData {
    return this.#data;
  }
}

const adaptedData: IPigmentsData = pigmentsAdapterService.adaptDataToApp(pigmentsData);

const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
