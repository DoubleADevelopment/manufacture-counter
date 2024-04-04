//services
import { adapterService, localstorageService } from '../../services';
//types
import type { IData, IItemData, IPackage, IRepository } from '../../types';

abstract class AbstractRepository implements IRepository {
  #defaultData: IData;
  #storageName: string;
  #packageData: IPackage;

  constructor(data: IPackage) {
    this.#defaultData = adapterService.adaptDataToApp(data);
    this.#storageName = data.dataStorageName;
    this.#packageData = data;
  }

  #getDataFromStorage(): IData | null | Error {
    return localstorageService.getItems(this.#storageName);
  }

  #sendDataToStorage(data: IData): IData | Error {
    return localstorageService.setItems(data, this.#storageName);
  }

  #clearDataFromStorage(): void {
    localstorageService.clearStore(this.#storageName);
  }

  #getDefaultData(): IData {
    return this.#defaultData;
  }

  #getDefaultItemData(id: string): IItemData {
    return this.#defaultData[id];
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

  getPackageData(): IPackage {
    return this.#packageData;
  }

  getDefaultData(): IData {
    return this.#getDefaultData();
  }

  getDefaultItemData(id: string): IItemData {
    return this.#getDefaultItemData(id);
  }

  clearData(): void {
    this.#clearDataFromStorage();
  }
}

export default AbstractRepository;
