//services
import gumsDataService from '../services/gums-data.service';
import gumsLocalstorageService from '../services/gums-localstorage.service';
//types
import type { IRepository } from '../../../types';
import type { IGumsData } from '../types/data-types';

class GumsRepositroy implements IRepository<IGumsData> {
  #dataService: typeof gumsDataService;
  #localstorageService: typeof gumsLocalstorageService;

  constructor(
    dataService: typeof gumsDataService,
    localstorageService: typeof gumsLocalstorageService,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): IGumsData | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: IGumsData): IGumsData | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): IGumsData {
    return this.#dataService.getData();
  }

  sendData(data: IGumsData): IGumsData | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      return result;
    } else {
      return result;
    }
  }

  getData(): IGumsData {
    const result = this.#getDataFromStorage();

    if (result instanceof Error) {
      const defaultData = this.#getDefaultData();
      return defaultData;
    } else {
      const defaultData = this.#getDefaultData();
      return defaultData;
    }
  }

  getDefaultData(): IGumsData {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const chemistryRepository = new GumsRepositroy(gumsDataService, gumsLocalstorageService);

export default chemistryRepository;
