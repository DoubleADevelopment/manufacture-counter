//types
import type { IDataService } from '../../types';

abstract class AbstractDataService<D extends Record<string, any>, I> implements IDataService<D> {
  #data: D;

  constructor(data: D) {
    this.#data = data;
  }

  getData(): D {
    return this.#data;
  }

  getDataItem(id: string, packageName: string): I {
    return this.#data[packageName][id];
  }
}

export default AbstractDataService;
