//types
import type { IData, ILocalstorageService, storageNamesAliasType } from '../../types';

abstract class AbstractLocalstorageService implements ILocalstorageService {
  #storageName: storageNamesAliasType;

  constructor(storageName: storageNamesAliasType) {
    this.#storageName = storageName;
  }

  getItems(): IData | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(this.#storageName);

      if (jsonData) {
        const parsedJsonData: IData = JSON.parse(jsonData);
        return parsedJsonData;
      } else {
        return null;
      }
    } catch (err) {
      if (err instanceof Error) {
        return new Error(err.message);
      } else {
        return new Error('Failed to get data from localStorage');
      }
    }
  }

  setItems(data: IData): IData | Error {
    try {
      localStorage.setItem(this.#storageName, JSON.stringify(data));
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return new Error(err.message);
      } else {
        return new Error('Failed to write data to localStorage');
      }
    }
  }

  clearStore() {
    localStorage.removeItem(this.#storageName);
  }
}

export default AbstractLocalstorageService;
