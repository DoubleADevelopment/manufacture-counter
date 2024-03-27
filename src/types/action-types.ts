import { IItemData } from './data-types';

interface IIncDecAction<L> {
  UNID: string;
  value: number;
  logName: L;
  logText?: string;
}

interface IClearItemAction {
  item: IItemData;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}

interface IChangeItemSetting<S> {
  UNID: string;
  settingName: S;
  newSettingValue: number;
}

export type { IIncDecAction, ILogAction, IClearItemAction, IChangeItemSetting };
