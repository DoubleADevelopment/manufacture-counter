//vars
import { IItemData, ILogs, ISettings } from '../../../types';
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
//types
import { ChemistryPackagesNames } from '../variables/';

interface IChemistryLogs extends ILogs {
  [ChemistryLogsNames.COUNTER]: {
    log: string[];
    name: string;
    lastChange: string | null;
  };
}

interface IChemistrySettings extends ISettings {
  [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IChemistryItem extends IItemData<IChemistryLogs, IChemistrySettings> {
  packageName: ChemistryPackagesNames;
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
