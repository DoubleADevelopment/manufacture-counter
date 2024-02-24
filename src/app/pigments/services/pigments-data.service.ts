//types
import type { IDataService } from '../../../types';
import type { IPigmentsDataType } from '../types/data-type';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';

class PigmentsDataService implements IDataService<IPigmentsDataType> {
  #data: IPigmentsDataType;

  constructor(data: IPigmentsDataType) {
    this.#data = data;
  }

  getData(): IPigmentsDataType {
    return this.#data;
  }
}

const adaptedData: IPigmentsDataType = pigmentsAdapterService.adaptDataToApp(pigmentsData);

const pigmentsDataService = new PigmentsDataService(adaptedData);

export default pigmentsDataService;
