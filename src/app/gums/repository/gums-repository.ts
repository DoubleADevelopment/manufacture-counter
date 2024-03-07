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
      throw new Error(result.message);
    } else if (result === null) {
      const defaultData = this.#getDefaultData();
      return defaultData;
    } else {
      return result;
    }
  }

  getDefaultData(): IGumsData {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const gumsRepository = new GumsRepositroy(gumsDataService, gumsLocalstorageService);

export default gumsRepository;
