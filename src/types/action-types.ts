//types
import { IChemistryDataItem } from '../app/chemistry/types/data-types';
import { ChemistryPackagesNames } from '../app/chemistry/variables/data-variables';
import type { AppThunk } from './store-types';

interface IIncDecAction {
  UNID: string;
  value: number;
}

interface IIncDecPackageAction {
  UNID: string;
  value: number;
  packageName: ChemistryPackagesNames;
}

interface IClearItemDataAction {
  UNID: string;
}

interface IClearItemDataPackageAction {
  UNID: string;
  packageName: ChemistryPackagesNames;
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
  packageName: ChemistryPackagesNames;
}

interface IClearItemPackageAction {
  item: IChemistryDataItem;
  packageName: ChemistryPackagesNames;
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
