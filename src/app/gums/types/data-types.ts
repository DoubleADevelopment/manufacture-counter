//types
import type { IItemData, ILogs, ISettings } from '../../../types';
//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/data-variables';

interface IGumsLogs extends ILogs {
  [GumsLogsNames.COUNTER]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
  [GumsLogsNames.CARDBOARD]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
}

interface IGumsSettings extends ISettings {
  [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
    settingValue: number;
    name: string;
  };
  [GumsSettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IGumsItem extends IItemData<IGumsLogs, IGumsSettings> {}

type GumsItemsListType = IGumsItem[];

interface IGumsPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  items: GumsItemsListType;
}

interface IGumsData {
  [UNID: string]: IGumsItem;
}

export type { IGumsItem, IGumsData, IGumsPackage, IGumsLogs, GumsItemsListType };
