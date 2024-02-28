//types
import type { DataAliasType, IDataService } from '../../types';

abstract class AbstractDataService<D extends DataAliasType> implements IDataService<D> {
  #data: D;

  constructor(data: D) {
    this.#data = data;
  }

  getData(): D {
    return this.#data;
  }

  getDataItem(id: string) {
    return this.#data[id];
  }
}

export default AbstractDataService;
