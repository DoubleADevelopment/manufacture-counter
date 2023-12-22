//types
import type { LocalstorageNamesType, ILocalstorageService } from '../../../types';
import type { IPigmentsDataType } from '../types/data-type';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables/data-variables';

class PigmentsLocalstorageService implements ILocalstorageService<IPigmentsDataType> {
  #storageName: LocalstorageNamesType;

  constructor(storageName: LocalstorageNamesType) {
    this.#storageName = storageName;
  }

  getItems(): IPigmentsDataType | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(this.#storageName);

      if (jsonData) {
        const parsedJsonData: IPigmentsDataType = JSON.parse(jsonData);
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

  setItems(data: IPigmentsDataType): IPigmentsDataType | Error {
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

const pigmentsLocalstorageService = new PigmentsLocalstorageService(PIGMENTS_STORAGE_NAME);

export default pigmentsLocalstorageService;
