//abstract
// import { DataTypeAlias } from '../types/data-types';
// import AbstractDataService from './abstract-data.service';
// import AbstractLocalstorageService from './abstract-localstorage.service';

// abstract class AbstractRepository {
//   #dataService: AbstractDataService;
//   #localstorageService: AbstractLocalstorageService;

//   constructor(dataService: AbstractDataService, localstorageService: AbstractLocalstorageService) {
//     this.#dataService = dataService;
//     this.#localstorageService = localstorageService;
//   }

//   #getDataFromStorage(): DataTypeAlias | null | Error {
//     return this.#localstorageService.getItems();
//   }

//   #getDefaultData(): DataTypeAlias {
//     return this.#dataService.getData();
//   }

//   #sendDataToStorage(data: DataTypeAlias): DataTypeAlias | Error {
//     return this.#localstorageService.setItems(data);
//   }

//   async sendData(data: DataTypeAlias): Promise<DataTypeAlias | Error> {
//     return new Promise((resolve, reject) => {
//       const result = this.#sendDataToStorage(data);

//       if (result instanceof Error) {
//         reject(result);
//       } else {
//         resolve(result);
//       }
//     });
//   }

//   async getData(): Promise<DataTypeAlias | Error | null> {
//     return new Promise((resolve, reject) => {
//       const result = this.#getDataFromStorage();

//       if (result instanceof Error) {
//         reject(result);
//       } else if (result !== null) {
//         resolve(result);
//       } else {
//         const defaultData = this.#getDefaultData();
//         resolve(defaultData);
//       }
//     });
//   }

//   getDefaultData(): DataTypeAlias {
//     return this.#getDefaultData();
//   }

//   clearData() {
//     this.#localstorageService.clearStore();
//   }
// }

interface IAbstractRepository<D> {
  getDataFromStorage(): D | null | Error;

  getDefaultData(): D;

  sendDataToStorage(data: D): D | Error;

  sendData(data: D): Promise<D | Error>;

  getData(): Promise<D | Error | null>;

  getDefaultData(): D;

  clearData(): void;
}

export default IAbstractRepository;
