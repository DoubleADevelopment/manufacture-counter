//services
import gumsDataService from '../services/gums-data.service';
import gumsLocalstorageService from '../services/gums-localstorage.service';
//types
import type { IRepository } from '../../../types/repository-types';
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

  getDataFromStorage(): IGumsDataType | null | Error {
    return this.#localstorageService.getItems();
  }

  getDefaultData(): IGumsDataType {
    return this.#dataService.getData();
  }

  sendDataToStorage(data: IGumsDataType): IGumsDataType | Error {
    return this.#localstorageService.setItems(data);
  }

  async sendData(data: IGumsDataType): Promise<IGumsDataType | Error> {
    return new Promise((resolve, reject) => {
      const result = this.sendDataToStorage(data);

      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }

  async getData(): Promise<IGumsDataType | Error | null> {
    return new Promise((resolve, reject) => {
      const result = this.getDataFromStorage();

      if (result instanceof Error) {
        reject(result);
      } else if (result !== null) {
        resolve(result);
      } else {
        const defaultData = this.getDefaultData();
        resolve(defaultData);
      }
    });
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const chemistryRepository = new GumsRepositroy(gumsDataService, gumsLocalstorageService);

export default chemistryRepository;
