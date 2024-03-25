import type { IData, IDataService, IItemData } from '../../types';

abstract class AbstractDataService implements IDataService {
  #data: IData;

  constructor(data: IData) {
    this.#data = data;
  }

  getData(): IData {
    return this.#data;
  }

  getDataItem(id: string): IItemData {
    return this.#data[id];
  }
}

export default AbstractDataService;
