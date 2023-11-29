//types
import type { DataType, LocalstorageNamesType } from '../types/data-types';

abstract class AbstractLocalstorageService {
  #storageName: LocalstorageNamesType;

  constructor(storageName: LocalstorageNamesType) {
    this.#storageName = storageName;
  }

  getItems(): DataType | null {
    const jsonData: string | null = localStorage.getItem(this.#storageName);

    if (jsonData) {
      const parsedJsonData: DataType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  }

  setItems(data: DataType): DataType | Error {
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
