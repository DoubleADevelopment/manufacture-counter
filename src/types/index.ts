import type { IDataService, ILocalstorageService, IAdapterService } from './services-types';
import type { IRepository } from './repository-types';
import type { LocalstorageNamesType } from './localstorage-types';
import type { DataTypeAlias, DataPackageTypeAlias, DataItemTypeAlias } from './data-types';
import type {
  IIncDecActionParametrsType,
  IncrementActionType,
  DecrementActionType,
} from './action-types';
import { AppDispatch, RootState, AppThunk, AppDispatchType } from './store-types';
import { SetActiveLinkType } from './other-types';
import { IIconPropsType } from './icon-props-type';

export type {
  IDataService,
  ILocalstorageService,
  IAdapterService,
  IRepository,
  LocalstorageNamesType,
  DataTypeAlias,
  DataPackageTypeAlias,
  DataItemTypeAlias,
  IIncDecActionParametrsType,
  IncrementActionType,
  DecrementActionType,
  AppDispatch,
  RootState,
  AppThunk,
  AppDispatchType,
  IIconPropsType,
  SetActiveLinkType,
};
