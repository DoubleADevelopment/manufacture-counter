//types
import type { IItemData, ILogs, ISettings } from '../../../types';
//vars
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';

interface IPigmentsLogs extends ILogs {
  [PigmentsLogsNames.COUNTER]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
  [PigmentsLogsNames.CONTAINER]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
  [PigmentsLogsNames.BAG]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
}

interface IPigmentsSettings extends ISettings {
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
  [PigmentsSettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IPigmentsItem extends IItemData<IPigmentsLogs, IPigmentsSettings> {}

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
