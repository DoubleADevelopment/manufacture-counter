//services
import PigmentsDataService from '../services/pigments-data.service';
import PigmentsLocalstorageService from '../services/pigments-localstorage.service';
//types
import type { IRepository } from '../../../types';
import type { IPigmentsDataType } from '../types/data-type';

class PigmentsRepositroy implements IRepository<IPigmentsDataType> {
  #dataService: typeof PigmentsDataService;
  #localstorageService: typeof PigmentsLocalstorageService;

  constructor(
    dataService: typeof PigmentsDataService,
    localstorageService: typeof PigmentsLocalstorageService,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): IPigmentsDataType | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: IPigmentsDataType): IPigmentsDataType | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): IPigmentsDataType {
    return this.#dataService.getData();
  }

  sendData(data: IPigmentsDataType): IPigmentsDataType | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      return result;
    } else {
      return result;
    }
  }

  getData(): IPigmentsDataType {
    const result = this.#getDataFromStorage();

    if (result instanceof Error) {
      const defaultData = this.#getDefaultData();
      return defaultData;
    } else {
      const defaultData = this.#getDefaultData();
      return defaultData;
    }
  }

  getDefaultData(): IPigmentsDataType {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const pigmentsRepository = new PigmentsRepositroy(PigmentsDataService, PigmentsLocalstorageService);

export default pigmentsRepository;
