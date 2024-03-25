import {
  IData,
  IItemData,
  IItemDataToDisplay,
  IPackage,
  ItemsDataToDisplayListType,
} from './data-types';

interface ILocalstorageService {
  getItems(): IData | Error | null;

  setItems(data: IData): IData | Error;

  clearStore(): void;
}

interface IDataService {
  getData(): IData;

  getDataItem(id: string): IItemData;
}

interface IAbstractAdapterService {
  adaptDataToApp(data: IPackage): IData;
  adaptDataToView(data: IData): IItemData[];
  adaptItemDataToDisplay(item: IItemData): IItemDataToDisplay;
  adaptItemsDataToDisplayList(data: IData): ItemsDataToDisplayListType;
}

export type { ILocalstorageService, IDataService, IAbstractAdapterService };
