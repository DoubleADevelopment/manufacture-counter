//vars
import { ILogs } from '../../../types';
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
//types
import { ChemistryPackagesNames } from '../variables/';

interface IChemistryLogs extends ILogs {
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

interface IChemistryItem {
  UNID: string;
  packageName: ChemistryPackagesNames;
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

type ChemistryItemsListType = IChemistryItem[];

interface IChemistryPackage {
  dataPackageName: ChemistryPackagesNames;
  dataPackageUNID: number;
  items: ChemistryItemsListType;
}

type ChemistryPackagesListType = IChemistryPackage[];

interface IChemistryItems {
  [UNID: string]: IChemistryItem;
}

interface IChemistryData {
  [ChemistryPackagesNames.EXTRUSION]: IChemistryItems;
  [ChemistryPackagesNames.VENEER]: IChemistryItems;
}

export type {
  ChemistryPackagesListType,
  IChemistryItem,
  IChemistryData,
  IChemistryPackage,
  IChemistryLogs,
  IChemistryItems,
  ChemistryItemsListType,
};
