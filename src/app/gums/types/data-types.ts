//types
import type { ILogs } from '../../../types';
//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/data-variables';

interface IGumsLogs extends ILogs {
  [GumsLogsNames.COUNTER]: {
    log: string[];
    name: string;
    lastChange: Date | null;
  };
  [GumsLogsNames.CARDBOARD]: {
    log: string[];
    name: string;
    lastChange: Date | null;
  };
}

interface IGumsSettings {
  [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IGumsItem {
  UNID: string;
  amount: number;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  color: string;
  logs: IGumsLogs;
  settings: IGumsSettings;
  additionalResources: string[];
  packagingInfo: string;
  unitsOfMeasurement: string;
}

type GumsItemsListType = IGumsItem[];

interface IGumsPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IGumsItem[];
}

interface IGumsData {
  [UNID: string]: IGumsItem;
}

export type { IGumsItem, IGumsData, IGumsPackage, IGumsLogs, GumsItemsListType };
