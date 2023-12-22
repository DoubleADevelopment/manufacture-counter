//types
import type { AppThunk } from './store-types';

interface IIncDecActionParametrsType {
  UNID: string;
  value: number;
}

type IncrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
type DecrementActionType = (action: IIncDecActionParametrsType) => AppThunk;

export type { IIncDecActionParametrsType, IncrementActionType, DecrementActionType };
