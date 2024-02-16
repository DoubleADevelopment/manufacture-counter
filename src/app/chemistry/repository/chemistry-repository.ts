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

  #getDataFromStorage(): IChemistryDataType | null | Error {
    return this.#localstorageService.getItems();
  }

  #sendDataToStorage(data: IChemistryDataType): IChemistryDataType | Error {
    return this.#localstorageService.setItems(data);
  }

  #getDefaultData(): IChemistryDataType {
    return this.#dataService.getData();
  }

  sendData(data: IChemistryDataType): IChemistryDataType | Error {
    const result = this.#sendDataToStorage(data);

    if (result instanceof Error) {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  getData(): IChemistryDataType {
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

  getDefaultData(): IChemistryDataType {
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
