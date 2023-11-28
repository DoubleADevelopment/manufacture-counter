//types
import type { DataType } from '../types/data-types';

abstract class AbstractDataService {
  #data: DataType;

  constructor(data: DataType) {
    this.#data = data;
  }

  getData(): DataType {
    return this.#data;
  }
}

export default AbstractDataService;
