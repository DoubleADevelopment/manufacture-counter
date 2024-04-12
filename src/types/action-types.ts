import { overviewPanelStatusType } from './app-types';
import { IItemData } from './data-types';
import { AppThunk } from './store-types';

interface IIncDecActionPayload {
  UNID: string;
  value: number;
  counterName: string;
  logText: string;
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

interface IActions {
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  clearItemDataAction: ClearItemDataActionType;
  clearDataAction: ClearDataActionType;
  changeItemAdditionalSettingAction: IChangeItemAdditionalSettingActionType;
}

interface IChangeOverviewPanelStatus {
  newStatus: overviewPanelStatusType;
}

export type {
  IIncDecActionPayload,
  ILogActionPayload,
  IClearItemActionPayload,
  IChangeItemAdditionalSettingActionPayload,
  ClearDataActionType,
  ClearItemDataActionType,
  IncDecActionType,
  IChangeItemAdditionalSettingActionType,
  IActions,
  IChangeOverviewPanelStatus,
};
