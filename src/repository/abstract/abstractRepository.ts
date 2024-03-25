import { IData, IDataService, ILocalstorageService, IRepository } from '../../types';

abstract class AbstractRepository implements IRepository {
  #dataService: IDataService;
  #localstorageService: ILocalstorageService;

  constructor(dataService: IDataService, localstorageService: ILocalstorageService) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): IData | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: IData): IData | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): IData {
    return this.#dataService.getData();
  }

  sendData(data: IData): IData | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  getData(): IData {
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

  getDefaultData(): IData {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

export default AbstractRepository;
