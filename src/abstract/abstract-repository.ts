//abstract
import AbstractDataService from './abstract-data.service';
import AbstractLocalstorageService from './abstract-localstorage.service';

class AbstractRepository<D> {
  #dataService: AbstractDataService<D>;
  #localstorageService: AbstractLocalstorageService<D>;

  constructor(
    dataService: AbstractDataService<D>,
    localstorageService: AbstractLocalstorageService<D>,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): D | null {
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

  getData(): D {
    const resultFromStorage: D | null = this.#getDataFromStorage();

    if (resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.#getDefaultData();
    }
  }
}

export default AbstractRepository;
