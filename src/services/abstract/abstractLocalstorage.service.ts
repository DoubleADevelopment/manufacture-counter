//types
import type { DataAliasType, ILocalstorageService, storageNamesAliasType } from '../../types';

abstract class AbstractLocalstorageService<D extends DataAliasType>
  implements ILocalstorageService<D>
{
  #storageName: storageNamesAliasType;

  constructor(storageName: storageNamesAliasType) {
    this.#storageName = storageName;
  }

  getItems(): D | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(this.#storageName);

      if (jsonData) {
        const parsedJsonData: D = JSON.parse(jsonData);
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

  setItems(data: D): D | Error {
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
