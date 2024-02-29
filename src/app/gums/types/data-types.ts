//vars
import { GumsLogsNames, GumsSettingsNames } from '../variables/data-variables';
//types
import type { IData, IDataItem, IDataPackage, ILogs, ISettings } from '../../../types/';

interface IGumsDataPackageType extends IDataPackage<IGumsDataItemType> {}
interface IGumsDataItemType extends IDataItem<IGumsLogs, IGumsSettings> {}

interface IGumsLogs extends ILogs {
  [GumsLogsNames.COUNTER]: {
    log: string[];
    name: string;
  };
  [GumsLogsNames.CARDBOARD]: {
    log: string[];
    name: string;
  };
}

interface IGumsSettings extends ISettings {
  [GumsSettingsNames.BASE_CARDBOARD_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IGumsData extends IData<IGumsDataItemType> {}

type GumsDataForViewType = IGumsDataItemType[];

export type { IGumsDataItemType, IGumsData, IGumsDataPackageType, GumsDataForViewType, IGumsLogs };
