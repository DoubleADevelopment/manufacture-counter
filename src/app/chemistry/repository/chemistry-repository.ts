//services
import chemistryDataService from '../services/chemistry-data.service';
import chemistryLocalstorageService from '../services/chemistry-localstorage.service';
//types
import type { IRepository } from '../../../types';
import type { IChemistryDataType } from '../types/data-types';

class ChemistryRepositroy implements IRepository<IChemistryDataType> {
  #dataService: typeof chemistryDataService;
  #localstorageService: typeof chemistryLocalstorageService;

  constructor(
    dataService: typeof chemistryDataService,
    localstorageService: typeof chemistryLocalstorageService,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  getDataFromStorage(): IChemistryDataType | null | Error {
    return this.#localstorageService.getItems();
  }

  getDefaultData(): IChemistryDataType {
    return this.#dataService.getData();
  }

  sendDataToStorage(data: IChemistryDataType): IChemistryDataType | Error {
    return this.#localstorageService.setItems(data);
  }

  async sendData(data: IChemistryDataType): Promise<IChemistryDataType | Error> {
    return new Promise((resolve, reject) => {
      const result = this.sendDataToStorage(data);

      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }

  async getData(): Promise<IChemistryDataType | Error | null> {
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

const chemistryRepository = new ChemistryRepositroy(
  chemistryDataService,
  chemistryLocalstorageService,
);

export default chemistryRepository;
