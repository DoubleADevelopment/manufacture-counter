//types
import type { IItemData, ILogs, ISettings } from '../../../types';
//vars
import { SuppliesLogsNames, SuppliesSettingsNames } from '../variables/data-variables';

interface ISuppliesLogs extends ILogs {
  [SuppliesLogsNames.COUNTER]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
}

interface ISuppliesSettings extends ISettings {
  [SuppliesSettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface ISuppliesItem extends IItemData<ISuppliesLogs, ISuppliesSettings> {}

type SuppliesItemsListType = ISuppliesItem[];

interface ISuppliesPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  items: ISuppliesItem[];
}

interface ISuppliesData {
  [UNID: string]: ISuppliesItem;
}

export type {
  ISuppliesItem,
  ISuppliesData,
  ISuppliesPackage,
  ISuppliesLogs,
  SuppliesItemsListType,
};
