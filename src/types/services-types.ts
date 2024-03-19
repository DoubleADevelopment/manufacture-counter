// interface IDataService<D extends DataAliasType> {
//   getData(): D;
//   getDataItem?(id: string): any;
// }

interface ILocalstorageService<D> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

interface IAdapterService<D, P> {
  adaptDataToApp(dataPackage: P): D;
}

export type { ILocalstorageService, IAdapterService };
