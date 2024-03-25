import { IDataService, ILocalstorageService, IRepository } from '../../types';

abstract class AbstractRepository<I, D> implements IRepository<D> {
  #dataService: IDataService<I, D>;
  #localstorageService: ILocalstorageService<D>;

  constructor(dataService: IDataService<I, D>, localstorageService: ILocalstorageService<D>) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): D | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: D): D | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): D {
    return this.#dataService.getData();
  }

  sendData(data: D): D | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  getData(): D {
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

  getDefaultData(): D {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

export default AbstractRepository;
