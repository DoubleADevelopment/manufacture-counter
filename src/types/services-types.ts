import {
  IData,
  IItemData,
  IItemDataToDisplay,
  IPackage,
  ItemsDataToDisplayListType,
  storageNamesAliasType,
} from './data-types';

interface ILocalstorageService {
  getItems(storageName: storageNamesAliasType): IData | Error | null;

  setItems(data: IData, storageName: storageNamesAliasType): IData | Error;

  clearStore(storageName: storageNamesAliasType): void;
}

interface IAbstractAdapterService {
  adaptDataToApp(data: IPackage): IData;
  adaptDataToView(data: IData): IItemData[];
  adaptItemDataToDisplay(item: IItemData): IItemDataToDisplay;
  adaptItemsDataToDisplayList(data: IData): ItemsDataToDisplayListType;
}

export type { ILocalstorageService, IAbstractAdapterService };
