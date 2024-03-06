//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/data-variables';

interface IGumsLogs {
  [GumsLogsNames.COUNTER]: {
    log: string[];
    name: string;
  };
  [GumsLogsNames.CARDBOARD]: {
    log: string[];
    name: string;
  };
}

interface IGumsSettings {
  [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IGumsDataItemType {
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
  lastChange: string | null;
  settings: IGumsSettings;
  additionalResources: string[];
  packagingInfo: string;
}

type GumsItemsListType = IGumsDataItemType[];

interface IGumsDataPackageType {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IGumsDataItemType[];
}

interface IGumsData {
  [UNID: string]: IGumsDataItemType;
}

export type { IGumsDataItemType, IGumsData, IGumsDataPackageType, IGumsLogs, GumsItemsListType };
