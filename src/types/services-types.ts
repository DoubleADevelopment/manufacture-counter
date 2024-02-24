interface IDataService<D> {
  getData(): D;
}

interface ILocalstorageService<D> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

interface IAdapterService<D, P> {
  adaptDataToApp(dataPackage: P): D;
}

export type { IDataService, ILocalstorageService, IAdapterService };
