//types
import type { AppThunk } from './store-types';

export interface IIncDecActionParametrsType {
  UNID: string;
  value: number;
}

export type IncrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
export type DecrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
