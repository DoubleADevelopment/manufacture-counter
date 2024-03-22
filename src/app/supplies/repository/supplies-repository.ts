//services
import suppliesDataService from '../services/supplies-data.service';
import suppliesLocalstorageService from '../services/supplies-localstorage.service';
//types
import type { IRepository } from '../../../types';
import type { ISuppliesData } from '../types/data-types';

class SuppliesRepositroy implements IRepository<ISuppliesData> {
  #dataService: typeof suppliesDataService;
  #localstorageService: typeof suppliesLocalstorageService;

  constructor(
    dataService: typeof suppliesDataService,
    localstorageService: typeof suppliesLocalstorageService,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): ISuppliesData | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: ISuppliesData): ISuppliesData | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): ISuppliesData {
    return this.#dataService.getData();
  }

  sendData(data: ISuppliesData): ISuppliesData | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      return result;
    } else {
      return result;
    }
  }

  getData(): ISuppliesData {
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

  getDefaultData(): ISuppliesData {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const suppliesRepository = new SuppliesRepositroy(suppliesDataService, suppliesLocalstorageService);

export default suppliesRepository;
