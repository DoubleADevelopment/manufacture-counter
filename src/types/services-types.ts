interface IDataService<D, P> {
  getData(): D;
  getDataPackage(): P;
}

interface ILocalstorageService<D> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

interface IAdapterService<D, P> {
  adaptDataToStore(dataPackage: P): D;
}

export type { IDataService, ILocalstorageService, IAdapterService };
