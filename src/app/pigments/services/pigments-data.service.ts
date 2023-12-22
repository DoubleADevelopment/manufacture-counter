//types
import type { IDataService } from '../../../types/services-types';
import type { IPigmentsDataPackageType, IPigmentsDataType } from '../types/data-type';
//data
import pigmentsData from '../data/pigments-data';
//adapters
import pigmentsAdapterService from './pigments-adapter.service';

class PigmentsDataService implements IDataService<IPigmentsDataType, IPigmentsDataPackageType> {
  #data: IPigmentsDataType;
  #dataPackage: IPigmentsDataPackageType;

  constructor(data: IPigmentsDataType, dataPackage: IPigmentsDataPackageType) {
    this.#data = data;
    this.#dataPackage = dataPackage;
  }

  getData(): IPigmentsDataType {
    return this.#data;
  }

  getDataPackage(): IPigmentsDataPackageType {
    return this.#dataPackage;
  }
}

const adaptedData: IPigmentsDataType = pigmentsAdapterService.adaptDataToStore(pigmentsData);

const pigmentsDataService = new PigmentsDataService(adaptedData, pigmentsData);

export default pigmentsDataService;
