//types
import type { IData, IItemData } from './data-types';

interface IRepository {
  sendData(data: IData): IData | Error;

  getData(): IData;

  getDefaultData(): IData;

  getDefaultItemData(id: string): IItemData;

  clearData(): void;
}

export type { IRepository };
