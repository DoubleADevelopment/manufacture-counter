//types
import type { ILogs } from '../../../types';
//vars
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';

interface IPigmentsLogs extends ILogs {
  [PigmentsLogsNames.COUNTER]: {
    log: string[];
    name: string;
    lastChange: Date | null;
  };
  [PigmentsLogsNames.CONTAINER]: {
    log: string[];
    name: string;
    lastChange: Date | null;
  };
  [PigmentsLogsNames.BAG]: {
    log: string[];
    name: string;
    lastChange: Date | null;
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

interface IPigmentsItem {
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
  settings: IPigmentsSettings;
  additionalResources: string[];
  packagingInfo: string;
  unitsOfMeasurement: string;
}

type PigmentsItemsListType = IPigmentsItem[];

interface IPigmentsPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IPigmentsItem[];
}

interface IPigmentsData {
  [UNID: string]: IPigmentsItem;
}

export type {
  IPigmentsItem,
  IPigmentsData,
  IPigmentsPackage,
  IPigmentsLogs,
  PigmentsItemsListType,
};
