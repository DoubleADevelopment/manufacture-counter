//data types
import { CHEMISTRY_STORAGE_NAME } from '../app/chemistry/variables';
import { GUMS_STORAGE_NAME } from '../app/gums/variables/data-variables';
import { PIGMENTS_STORAGE_NAME } from '../app/pigments/variables/data-variables';
import { SUPPLIES_STORAGE_NAME } from '../app/supplies/variables';

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

interface IItemData<L extends ILogs, S extends ISettings> {
  UNID: string;
  amount: number;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  color: string;
  logs: L;
  settings: S;
  counters?: string[];
  additionalResources: string[];
  packagingInfo: string;
  unitsOfMeasurement: string;
}

type storageNamesAliasType =
  | typeof CHEMISTRY_STORAGE_NAME
  | typeof GUMS_STORAGE_NAME
  | typeof PIGMENTS_STORAGE_NAME
  | typeof SUPPLIES_STORAGE_NAME;

export type {
  IComponentData,
  ComponentsDataListType,
  IItemDataToDisplay,
  ItemsDataToDisplayListType,
  ILogs,
  ISettings,
  IItemData,
  storageNamesAliasType,
  ILogItem,
};
