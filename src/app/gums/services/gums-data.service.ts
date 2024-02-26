//types
import type { IGumsData } from '../types/data-types';
import type { IDataService } from '../../../types';
//data
import gumsData from '../data/gums-data';
//adapters
import gumsAdapterService from './gums-adapter.service';

class GumsDataService implements IDataService<IGumsData> {
  #data: IGumsData;

  constructor(data: IGumsData) {
    this.#data = data;
  }

  getData(): IGumsData {
    return this.#data;
  }
}

const adaptedData: IGumsData = gumsAdapterService.adaptDataToApp(gumsData);

const gumsDataService = new GumsDataService(adaptedData);

export default gumsDataService;
