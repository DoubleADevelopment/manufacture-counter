//types
import type { LocalstorageNamesType, ILocalstorageService } from '../../../types';
import type { IChemistryData } from '../types/data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/';

class ChemistryLocalstorageService implements ILocalstorageService<IChemistryData> {
  #storageName: LocalstorageNamesType;

  constructor(storageName: LocalstorageNamesType) {
    this.#storageName = storageName;
  }

  getItems(): IChemistryData | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(this.#storageName);

      if (jsonData) {
        const parsedJsonData: IChemistryData = JSON.parse(jsonData);
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

  setItems(data: IChemistryData): IChemistryData | Error {
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

const chemistryLocalstorageService = new ChemistryLocalstorageService(CHEMISTRY_STORAGE_NAME);

export default chemistryLocalstorageService;
