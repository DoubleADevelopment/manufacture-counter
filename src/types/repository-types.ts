//types
import type { IData, IItemData, IPackage } from './data-types';

interface IRepository {
  sendData(data: IData): IData | Error;

  getData(): IData;

  getPackageData(): IPackage;

  getDefaultData(): IData;

  getDefaultItemData(id: string): IItemData;

  clearData(): void;
}

export type { IRepository };
