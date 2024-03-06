//vars
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';

interface IPigmentsLogs {
  [PigmentsLogsNames.COUNTER]: {
    log: string[];
    name: string;
  };
  [PigmentsLogsNames.CONTAINER]: {
    log: string[];
    name: string;
  };
  [PigmentsLogsNames.BAG]: {
    log: string[];
    name: string;
  };
}

interface IPigmentsSettings {
  [PigmentsSettingsNames.BASE_BAG_VALUE]: {
    settingValue: number;
    name: string;
  };
  [PigmentsSettingsNames.BASE_CONTAINER_VALUE]: {
    settingValue: number;
    name: string;
  };
  [PigmentsSettingsNames.CONTAINER_WEIGHT]: {
    settingValue: number;
    name: string;
  };
}

interface IPigmentsDataItemType {
  UNID: string;
  amount: number;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  color: string;
  logs: IPigmentsLogs;
  lastChange: string | null;
  settings: IPigmentsSettings;
  additionalResources: string[];
  packagingInfo: string;
}

type PigmentsItemsListType = IPigmentsDataItemType[];

interface IPigmentsDataPackageType {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IPigmentsDataItemType[];
}

interface IPigmentsData {
  [UNID: string]: IPigmentsDataItemType;
}

type PigmentsDataForViewType = IPigmentsDataItemType[];

export type {
  IPigmentsDataItemType,
  IPigmentsData,
  IPigmentsDataPackageType,
  PigmentsDataForViewType,
  IPigmentsLogs,
  PigmentsItemsListType,
};
