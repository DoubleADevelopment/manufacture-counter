import { IItemData } from './data-types';
import { AppThunk } from './store-types';

interface IIncDecActionPayload {
  UNID: string;
  value: number;
  counterName: string;
  logText?: string;
}

interface IClearItemActionPayload {
  item: IItemData;
}

interface ILogActionPayload {
  UNID: string;
  log: string;
  counterName: string;
}

interface IChangeItemAdditionalSettingActionPayload {
  UNID: string;
  counterName: string;
  newSettingValue: number;
}

type ClearItemDataActionType = (action: IClearItemActionPayload) => AppThunk;
type ClearDataActionType = () => AppThunk;
type IncDecActionType = (action: IIncDecActionPayload) => AppThunk;
type IChangeItemAdditionalSettingActionType = (
  action: IChangeItemAdditionalSettingActionPayload,
) => AppThunk;

export type {
  IIncDecActionPayload,
  ILogActionPayload,
  IClearItemActionPayload,
  IChangeItemAdditionalSettingActionPayload,
  ClearDataActionType,
  ClearItemDataActionType,
  IncDecActionType,
  IChangeItemAdditionalSettingActionType,
};
