//vars
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';
//types
import type { IData, IDataItem, IDataPackage, ILogs, ISettings } from '../../../types/data-types';

interface IPigmentsDataPackageType extends IDataPackage<IPigmentsDataItemType> {}
interface IPigmentsDataItemType extends IDataItem<IPigmentsLogs, IPigmentsSettings> {}

interface IPigmentsLogs extends ILogs {
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
}

interface IPigmentsData extends IData<IPigmentsDataItemType> {}

type PigmentsDataForViewType = IPigmentsDataItemType[];

export type {
  IPigmentsDataItemType,
  IPigmentsData,
  IPigmentsDataPackageType,
  PigmentsDataForViewType,
  IPigmentsLogs,
};
