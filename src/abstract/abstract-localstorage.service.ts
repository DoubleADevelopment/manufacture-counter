//types
// import { DataTypeAlias } from '../types/data-types';
// import type { LocalstorageNamesType } from '../types/localstorage-types';

// abstract class AbstractLocalstorageService {
//   #storageName: LocalstorageNamesType;

//   constructor(storageName: LocalstorageNamesType) {
//     this.#storageName = storageName;
//   }

//   getItems(): DataTypeAlias | Error | null {
//     try {
//       const jsonData: string | null = localStorage.getItem(this.#storageName);

//       if (jsonData) {
//         const parsedJsonData: DataTypeAlias = JSON.parse(jsonData);
//         return parsedJsonData;
//       } else {
//         return null;
//       }
//     } catch (err) {
//       if (err instanceof Error) {
//         return new Error(err.message);
//       } else {
//         return new Error('Failed to get data from localStorage');
//       }
//     }
//   }

//   setItems(data: DataTypeAlias): DataTypeAlias | Error {
//     try {
//       localStorage.setItem(this.#storageName, JSON.stringify(data));
//       return data;
//     } catch (err) {
//       if (err instanceof Error) {
//         return new Error(err.message);
//       } else {
//         return new Error('Failed to write data to localStorage');
//       }
//     }
//   }

//   clearStore() {
//     localStorage.removeItem(this.#storageName);
//   }
// }

interface ILocalstorageService<D> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

export default ILocalstorageService;
