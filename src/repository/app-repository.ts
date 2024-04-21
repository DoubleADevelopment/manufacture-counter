//types
import type { IAppState } from '../types';

const defaultAppState: IAppState = {
  overviewPanelStatus: 'close',
};

class AppRepository {
  #defaultState: IAppState;
  #storageName: string;

  constructor(defaultState: IAppState) {
    this.#defaultState = defaultState;
    this.#storageName = 'app-state';
  }

  #getDataFromStorage(): IAppState | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(this.#storageName);

      if (jsonData) {
        const parsedJsonData: IAppState = JSON.parse(jsonData);
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

  #sendDataToStorage(data: IAppState) {
    return localStorage.setItem(this.#storageName, JSON.stringify(data));
  }

  #getDefaultData(): IAppState {
    return this.#defaultState;
  }

  getState(): IAppState {
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

  sendData(data: IAppState): void {
    this.#sendDataToStorage(data);
  }
}

const appRepository = new AppRepository(defaultAppState);

export default appRepository;
