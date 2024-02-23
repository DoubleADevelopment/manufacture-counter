//vars
import { ILogsType } from '../../../types/data-types';
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';

interface IChemistryDataPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IChemistryDataItem[];
}

interface IChemistryLogs extends ILogsType {
  [ChemistryLogsNames.COUNTER]: {
    log: string[];
    name: string;
  };
}

interface IChemistrySettings {
  [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IChemistryDataItem {
  UNID: string;
  amount: number;
  firm: string;
  name: string;
  itemNumber: string;
  description: string;
  image: string;
  color: string;
  logs: IChemistryLogs;
  lastChange: string | null;
  settings: IChemistrySettings;
  additionalResources: string[];
  packagingInfo: string;
  manufacturer: string;
}

interface IChemistryData {
  [UNID: string]: IChemistryDataItem;
}

type ChemistryDataForViewType = IChemistryDataItem[];

export type {
  IChemistryDataItem,
  IChemistryData,
  IChemistryDataPackage,
  ChemistryDataForViewType,
  IChemistryLogs,
};
