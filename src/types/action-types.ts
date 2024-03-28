import { IItemData } from './data-types';
import { AppThunk } from './store-types';

interface IIncDecActionPayload<L> {
  UNID: string;
  value: number;
  logName: L;
  logText?: string;
}

interface IClearItemActionPayload {
  item: IItemData;
}

interface ILogActionPayload<T> {
  UNID: string;
  log: string;
  logName: T;
}

interface IChangeItemSettingActionPayload<S> {
  UNID: string;
  settingName: S;
  newSettingValue: number;
}

type ClearItemDataActionType = (action: IClearItemActionPayload) => AppThunk;
type ClearDataActionType = () => AppThunk;

export type {
  IIncDecActionPayload,
  ILogActionPayload,
  IClearItemActionPayload,
  IChangeItemSettingActionPayload,
  ClearDataActionType,
  ClearItemDataActionType,
};
