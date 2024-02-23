//types
import type { AppThunk } from './store-types';

interface IIncDecAction {
  UNID: string;
  value: number;
}

interface IClearItemDataAction {
  UNID: string;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}

type IncDecActionType = (action: IIncDecAction) => AppThunk;

export type { IIncDecAction, ILogAction, IClearItemDataAction, IncDecActionType };
