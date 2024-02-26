import { DataAliasType } from './data-types';

interface IDataService<D extends DataAliasType> {
  getData(): D;
  getDataItem?(id: string): any;
  getDataItemFromPackage?<P extends keyof D>(id: keyof D[P], packageName: P): any;
}

interface ILocalstorageService<D extends DataAliasType> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

interface IAdapterService<D, P> {
  adaptDataToApp(dataPackage: P): D;
}

export type { IDataService, ILocalstorageService, IAdapterService };
