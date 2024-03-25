interface ILocalstorageService<D> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

interface IDataService<I, D> {
  getData(): D;

  getDataItem(id: string): I;
}

export type { ILocalstorageService, IDataService };
