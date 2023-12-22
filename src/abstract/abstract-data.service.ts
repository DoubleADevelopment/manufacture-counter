// import type { DataPackageTypeAlias, DataTypeAlias } from '../types/data-types';

// abstract class AbstractDataService {
//   #data: DataTypeAlias;
//   #dataPackage: DataPackageTypeAlias;

//   constructor(data: DataTypeAlias, dataPackage: DataPackageTypeAlias) {
//     this.#data = data;
//     this.#dataPackage = dataPackage;
//   }

//   getData(): DataTypeAlias {
//     return this.#data;
//   }

//   getDataPackage(): DataPackageTypeAlias {
//     return this.#dataPackage;
//   }
// }

interface IAbstractDataService<D, P> {
  getData(): D;
  getDataPackage(): P;
}

export default IAbstractDataService;
