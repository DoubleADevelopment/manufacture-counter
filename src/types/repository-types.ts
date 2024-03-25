//types
import type { IData } from './data-types';

interface IRepository {
  sendData(data: IData): IData | Error;

  getData(): IData;

  getDefaultData(): IData;

  clearData(): void;
}

export type { IRepository };
