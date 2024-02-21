//types
import type { LocalstorageNamesType, ILocalstorageService } from '../../../types';
import type { IChemistryDataType } from '../types/data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/';

class ChemistryLocalstorageService implements ILocalstorageService<IChemistryDataType> {
  #storageName: LocalstorageNamesType;

  constructor(storageName: LocalstorageNamesType) {
    this.#storageName = storageName;
  }

  getItems(): IChemistryDataType | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(this.#storageName);

      if (jsonData) {
        const parsedJsonData: IChemistryDataType = JSON.parse(jsonData);
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

  setItems(data: IChemistryDataType): IChemistryDataType | Error {
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
