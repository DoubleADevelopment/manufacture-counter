//vars
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';

interface IPigmentsDataPackageType {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IPigmentsDataItemType[];
}

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
  firm: string;
  name: string;
  itemNumber: string;
  description: string;
  image: string;
  color: string;
  logs: IPigmentsLogs;
  lastChange: string | null;
  settings: IPigmentsSettings;
  additionalResources: string[];
  packagingInfo: string;
  manufacturer: string;
}

type PigmentsDataType = IPigmentsDataPackageType[];

export type { IPigmentsDataItemType, PigmentsDataType, IPigmentsDataPackageType };
