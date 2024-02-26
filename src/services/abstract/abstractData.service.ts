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

  getDataItemFromPackage<P extends keyof D>(id: keyof D[P], packageName: P) {
    return this.#data[packageName][id as keyof D[P]];
  }

  getDataItem(id: string) {
    return this.#data[id];
  }
}

export default AbstractDataService;
