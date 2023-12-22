interface IRepository<D> {
  // getDataFromStorage(): D | null | Error;

  // sendDataToStorage(data: D): D | Error;

  getDefaultData(): D;

  sendData(data: D): Promise<D | Error>;

  getData(): Promise<D | Error | null>;

  clearData(): void;
}

export type { IRepository };
