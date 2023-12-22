//types
import type { IGumsDataType, IGumsDataPackageType } from '../types/data-types';
import type { IDataService } from '../../../types';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';

class GumsDataService implements IDataService<IGumsDataType, IGumsDataPackageType> {
  #data: IGumsDataType;
  #dataPackage: IGumsDataPackageType;

  constructor(data: IGumsDataType, dataPackage: IGumsDataPackageType) {
    this.#data = data;
    this.#dataPackage = dataPackage;
  }

  getData(): IGumsDataType {
    return this.#data;
  }

  getDataPackage(): IGumsDataPackageType {
    return this.#dataPackage;
  }
}

const adaptedData: IGumsDataType = gumsAdapterService.adaptDataToStore(gumsData);

const gumsDataService = new GumsDataService(adaptedData, gumsData);

export default gumsDataService;
