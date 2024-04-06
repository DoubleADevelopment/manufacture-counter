//types
import type { IData, IItemData, IPackage, IState } from './data-types';

interface IRepository {
  sendData(data: IData): IData | Error;

  getData(): IData;

  getState(): IState;

  getPackageData(): IPackage;

  getDefaultData(): IData;

  getDefaultItemData(id: string): IItemData;

  clearData(): void;
}

export type { IRepository };
