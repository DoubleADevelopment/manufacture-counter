//vars
import { ILogsType } from '../../../types/data-types';
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
import { ChemistryPackagesNames } from '../variables/data-variables';

interface IChemistryDataPackage {
  dataPackageName: ChemistryPackagesNames;
  dataPackageUNID: number;
  items: IChemistryDataItem[];
}

type ChemistryDataPackagesType = IChemistryDataPackage[];

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

interface IChemistryPackageData {
  [UNID: string]: IChemistryDataItem;
}

// interface IChemistryData {
//   [UNID: string]: IChemistryDataItem;
// }

interface IChemistryData {
  [ChemistryPackagesNames.EKSTRUZJA]: IChemistryPackageData;
  [ChemistryPackagesNames.OKLEINA]: IChemistryPackageData;
}

type ChemistryDataForViewType = IChemistryDataItem[];

export type {
  ChemistryDataPackagesType,
  IChemistryDataItem,
  IChemistryData,
  IChemistryDataPackage,
  ChemistryDataForViewType,
  IChemistryLogs,
};
