//abstract
import AbstractDataService from './abstract-data.service';
import AbstractLocalstorageService from './abstract-localstorage.service';
//types
import type { DataType } from '../types/data-types';

class AbstractRepository {
  #dataService: AbstractDataService;
  #localstorageService: AbstractLocalstorageService;

  constructor(dataService: AbstractDataService, localstorageService: AbstractLocalstorageService) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): DataType | null {
    return this.#localstorageService.getItems();
  }

  #getDefaultData(): DataType {
    return this.#dataService.getData();
  }

  #sendDataToStorage(data: DataType): DataType | Error {
    return this.#localstorageService.setItems(data);
  }

  async sendData(data: DataType): Promise<DataType | Error> {
    return new Promise((resolve, reject) => {
      const result = this.#sendDataToStorage(data);

      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }

  getData(): DataType {
    const resultFromStorage: DataType | null = this.#getDataFromStorage();

    if (resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.#getDefaultData();
    }
  }
}

export default AbstractRepository;
