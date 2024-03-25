import {
  IData,
  IItemData,
  IItemDataToDisplay,
  ILogs,
  IPackage,
  ISettings,
  ItemsDataToDisplayListType,
} from './data-types';

interface ILocalstorageService<D> {
  getItems(): D | Error | null;

  setItems(data: D): D | Error;

  clearStore(): void;
}

interface IDataService<I, D> {
  getData(): D;

  getDataItem(id: string): I;
}

interface IAbstractAdapterService<
  P extends IPackage<I>,
  D extends IData<I>,
  I extends IItemData<L, S>,
  L extends ILogs,
  S extends ISettings,
> {
  adaptDataToApp(data: P): D;
  adaptDataToView(data: D): I[];
  adaptItemDataToDisplay(item: I): IItemDataToDisplay;
  adaptItemsDataToDisplayList(data: D): ItemsDataToDisplayListType;
}

export type { ILocalstorageService, IDataService, IAbstractAdapterService };
