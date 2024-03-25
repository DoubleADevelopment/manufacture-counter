//types
import type {
  IData,
  IItemData,
  IItemDataToDisplay,
  IPackage,
  ItemsDataToDisplayListType,
} from './data-types';

interface ILocalstorageService {
  getItems(storageName: string): IData | Error | null;

  setItems(data: IData, storageName: string): IData | Error;

  clearStore(storageName: string): void;
}

interface IAbstractAdapterService {
  adaptDataToApp(data: IPackage): IData;
  adaptDataToView(data: IData): IItemData[];
  adaptItemDataToDisplay(item: IItemData): IItemDataToDisplay;
  adaptItemsDataToDisplayList(data: IData): ItemsDataToDisplayListType;
}

export type { ILocalstorageService, IAbstractAdapterService };
