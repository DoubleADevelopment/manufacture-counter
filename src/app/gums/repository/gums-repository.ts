//services
import gumsDataService from '../services/gums-data.service';
import gumsLocalstorageService from '../services/gums-localstorage.service';
//types
import type { IRepository } from '../../../types';
import type { IGumsDataType } from '../types/data-types';

class GumsRepositroy implements IRepository<IGumsDataType> {
  #dataService: typeof gumsDataService;
  #localstorageService: typeof gumsLocalstorageService;

  constructor(
    dataService: typeof gumsDataService,
    localstorageService: typeof gumsLocalstorageService,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): IGumsDataType | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: IGumsDataType): IGumsDataType | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): IGumsDataType {
    return this.#dataService.getData();
  }

  sendData(data: IGumsDataType): IGumsDataType | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      return result;
    } else {
      return result;
    }
  }

  getData(): IGumsDataType {
    const result = this.#getDataFromStorage();

    if (result instanceof Error) {
      const defaultData = this.#getDefaultData();
      return defaultData;
    } else {
      const defaultData = this.#getDefaultData();
      return defaultData;
    }
  }

  getDefaultData(): IGumsDataType {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const chemistryRepository = new GumsRepositroy(gumsDataService, gumsLocalstorageService);

export default chemistryRepository;
