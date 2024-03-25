//componentsList type we use in main page for show all components in overview page
interface IComponentData {
  title: string;
  link: string;
  image: string;
}

type ComponentsDataListType = IComponentData[];

//card type we use inside a card components
interface IItemDataToDisplay {
  UNID: string;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  amount: number;
  unitsOfMeasurement: string;
  lastChange?: Date;
  logs: ILogs;
  color: string;
}

type ItemsDataToDisplayListType = IItemDataToDisplay[];

interface ILogItem {
  log: string[];
  name: string;
  lastChange: string | null;
}

//data types for apps/counters
interface ILogs {
  [key: string]: ILogItem;
}

interface ISettings {
  [key: string]: {
    settingValue: number;
    name: string;
  };
}

interface IItemData {
  UNID: string;
  amount: number;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  color: string;
  logs: ILogs;
  settings: ISettings;
  counters?: string[];
  additionalResources: string[];
  packagingInfo: string;
  unitsOfMeasurement: string;
}

interface IData {
  [key: string]: IItemData;
}

interface IPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  dataStorageName: string;
  items: IItemData[];
}

export type {
  IComponentData,
  ComponentsDataListType,
  IItemDataToDisplay,
  ItemsDataToDisplayListType,
  ILogs,
  ISettings,
  IItemData,
  ILogItem,
  IData,
  IPackage,
};
