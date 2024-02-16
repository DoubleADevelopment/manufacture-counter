interface IRepository<D> {
  sendData(data: D): D | Error;

  getData(): D;

  getDefaultData(): D;

  clearData(): void;
}

export type { IRepository };
