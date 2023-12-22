//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/data-variables';

interface IGumsDataPackageType {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IGumsDataItemType[];
}

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
  firm: string;
  name: string;
  itemNumber: string;
  description: string;
  image: string;
  color: string;
  logs: IGumsLogs;
  lastChange: string | null;
  settings: IGumsSettings;
  additionalResources: string[];
  packagingInfo: string;
  manufacturer: string;
}

interface IGumsDataType {
  [UNID: string]: IGumsDataItemType;
}

type GumsDataForViewType = IGumsDataItemType[];

export type { IGumsDataItemType, IGumsDataType, IGumsDataPackageType, GumsDataForViewType };
