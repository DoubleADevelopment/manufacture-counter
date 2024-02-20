//types
// import type { AppThunk } from './store-types';

interface IIncDecActionParametrsType {
  UNID: string;
  value: number;
}

interface ILogActionType<T> {
  UNID: string;
  log: string;
  logName: T;
}

// type IncrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
// type DecrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
// type LogActionType = (action: ILogActionType) => AppThunk;

export type { IIncDecActionParametrsType, ILogActionType };
