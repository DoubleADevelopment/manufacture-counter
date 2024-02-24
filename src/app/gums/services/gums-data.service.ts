//types
import type { IGumsDataType } from '../types/data-types';
import type { IDataService } from '../../../types';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';

class GumsDataService implements IDataService<IGumsDataType> {
  #data: IGumsDataType;

  constructor(data: IGumsDataType) {
    this.#data = data;
  }

  getData(): IGumsDataType {
    return this.#data;
  }
}

const adaptedData: IGumsDataType = gumsAdapterService.adaptDataToApp(gumsData);

const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
