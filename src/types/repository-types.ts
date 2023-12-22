interface IRepository<D> {
  getDataFromStorage(): D | null | Error;

  getDefaultData(): D;

  sendDataToStorage(data: D): D | Error;

  sendData(data: D): Promise<D | Error>;

  getData(): Promise<D | Error | null>;

  getDefaultData(): D;

  clearData(): void;
}

export type { IRepository };
