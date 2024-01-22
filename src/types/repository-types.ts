interface IRepository<D> {
  sendData(data: D): Promise<D | Error>;

  getData(): Promise<D | Error | null>;

  getDefaultData(): D;

  clearData(): void;
}

export type { IRepository };
