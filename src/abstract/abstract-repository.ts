//abstract
import AbstractDataService from './abstract-data.service';
import AbstractLocalstorageService from './abstract-localstorage.service';
//types
import type { DataType } from '../types/data-types';
import type { IErrorInfo } from '../types/error-types';

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

  #sendDataToStorage(data: DataType): boolean | IErrorInfo {
    try {
      this.#localstorageService.setItems(data);
      return true;
    } catch (err) {
      if (err instanceof Error) {
        return {
          errorInfo: 'something went wrong in send data to storage.',
          errorText: err.message,
        };
      } else {
        return false;
      }
    }
  }

  sendData(data: DataType): boolean | IErrorInfo {
    const result: boolean | IErrorInfo = this.#sendDataToStorage(data);

    if (result === true) {
      return true;
    } else {
      return result;
    }
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
