//abstract
import AbstractDataService from './abstract-data.service';
import AbstractLocalstorageService from './abstract-localstorage.service';

abstract class AbstractRepository<D> {
  #dataService: AbstractDataService<D>;
  #localstorageService: AbstractLocalstorageService<D>;

  constructor(
    dataService: AbstractDataService<D>,
    localstorageService: AbstractLocalstorageService<D>,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): D | null | Error {
    return this.#localstorageService.getItems();
  }

  #getDefaultData(): D {
    return this.#dataService.getData();
  }

  #sendDataToStorage<D>(data: D): D | Error {
    return this.#localstorageService.setItems(data);
  }

  async sendData<D>(data: D): Promise<D | Error> {
    return new Promise((resolve, reject) => {
      const result = this.#sendDataToStorage(data);

      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }

  async getData(): Promise<D | Error | null> {
    return new Promise((resolve, reject) => {
      const result = this.#getDataFromStorage();

      if (result instanceof Error) {
        reject(result);
      } else if (result !== null) {
        resolve(result);
      } else {
        const defaultData = this.#getDefaultData();
        resolve(defaultData);
      }
    });
  }

  getDefaultData(): D {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

export default AbstractRepository;
