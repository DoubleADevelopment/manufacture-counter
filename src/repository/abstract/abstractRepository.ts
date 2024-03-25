import { localstorageService } from '../../services';
import { IData, IDataService, IRepository, storageNamesAliasType } from '../../types';

abstract class AbstractRepository implements IRepository {
  #dataService: IDataService;
  #storageName: storageNamesAliasType;

  constructor(dataService: IDataService, storageName: storageNamesAliasType) {
    this.#dataService = dataService;
    this.#storageName = storageName;
  }

  #getDataFromStorage(): IData | null | Error {
    return localstorageService.getItems(this.#storageName);
  }

  #sendDataToStorage(data: IData): IData | Error {
    return localstorageService.setItems(data, this.#storageName);
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
    localstorageService.clearStore(this.#storageName);
  }
}

export default AbstractRepository;
