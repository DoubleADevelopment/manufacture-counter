import { IItemData } from './data-types';

interface IIncDecAction {
  UNID: string;
  value: number;
}

interface IClearItemAction {
  item: IItemData;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}

export type { IIncDecAction, ILogAction, IClearItemAction };
