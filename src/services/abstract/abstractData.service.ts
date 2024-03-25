import type { IData, IDataService } from '../../types';

abstract class AbstractDataService<I, D extends IData<I>> implements IDataService<I, D> {
  #data: D;

  constructor(data: D) {
    this.#data = data;
  }

  getData(): D {
    return this.#data;
  }

  getDataItem(id: string): I {
    return this.#data[id];
  }
}

export default AbstractDataService;
