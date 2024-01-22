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

  async sendData(data: IPigmentsDataType): Promise<IPigmentsDataType | Error> {
    return new Promise((resolve, reject) => {
      const result = this.#sendDataToStorage(data);

      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }

  async getData(): Promise<IPigmentsDataType | Error | null> {
    return new Promise((resolve, reject) => {
      const result = this.#getDataFromStorage();

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

  getDefaultData(): IPigmentsDataType {
    return this.#getDefaultData();
  }

  clearData() {
    this.#localstorageService.clearStore();
  }
}

const pigmentsRepository = new PigmentsRepositroy(PigmentsDataService, PigmentsLocalstorageService);

export default pigmentsRepository;
