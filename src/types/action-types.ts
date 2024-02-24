//types
import type { IChemistryDataItem } from '../app/chemistry/types/data-types';
import type { AppThunk } from './store-types';

interface IIncDecAction {
  UNID: string;
  value: number;
}

interface IIncDecPackageAction {
  UNID: string;
  value: number;
  packageName: string;
}

interface IClearItemDataAction {
  UNID: string;
}

interface IClearItemDataPackageAction {
  UNID: string;
  packageName: string;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}

interface ILogPackageAction<T> {
  UNID: string;
  log: string;
  logName: T;
  packageName: string;
}

interface IClearItemPackageAction {
  item: IChemistryDataItem;
  packageName: string;
}

type IncDecActionType = (action: IIncDecAction) => AppThunk;
type IncDecPackageActionType = (action: IIncDecPackageAction) => AppThunk;

export type {
  IIncDecAction,
  ILogAction,
  IClearItemDataAction,
  IncDecActionType,
  IIncDecPackageAction,
  IClearItemDataPackageAction,
  ILogPackageAction,
  IncDecPackageActionType,
  IClearItemPackageAction,
};
