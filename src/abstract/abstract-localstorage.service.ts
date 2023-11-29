//types
import type { LocalstorageNamesType } from '../types/localstorage-types';

abstract class AbstractLocalstorageService<D> {
  #storageName: LocalstorageNamesType;

  constructor(storageName: LocalstorageNamesType) {
    this.#storageName = storageName;
  }

  getItems(): D | null {
    const jsonData: string | null = localStorage.getItem(this.#storageName);

    if (jsonData) {
      const parsedJsonData: D = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  }

  setItems<D>(data: D): D | Error {
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
