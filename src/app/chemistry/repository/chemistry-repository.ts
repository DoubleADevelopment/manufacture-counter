//services
import chemistryDataService from '../services/chemistry-data.service';
import chemistryLocalstorageService from '../services/chemistry-localstorage.service';
//types
import type { IRepository } from '../../../types';
import type { IChemistryData } from '../types/';

class ChemistryRepositroy implements IRepository<IChemistryData> {
  #dataService: typeof chemistryDataService;
  #localstorageService: typeof chemistryLocalstorageService;

  constructor(
    dataService: typeof chemistryDataService,
    localstorageService: typeof chemistryLocalstorageService,
  ) {
    this.#dataService = dataService;
    this.#localstorageService = localstorageService;
  }

  #getDataFromStorage(): IChemistryData | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: IChemistryData): IChemistryData | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): IChemistryData {
    return this.#dataService.getData();
  }

  sendData(data: IChemistryData): IChemistryData | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  getData(): IChemistryData {
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

  getDefaultData(): IChemistryData {
    return this.#getDefaultData();
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
