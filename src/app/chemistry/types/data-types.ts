//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
//types
import type { IItemData, ILogs, ISettings } from '../../../types';

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

interface IChemistryItem extends IItemData<IChemistryLogs, IChemistrySettings> {}

type ChemistryItemsListType = IChemistryItem[];

interface IChemistryPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  items: ChemistryItemsListType;
}

interface IChemistryData {
  [UNID: string]: IChemistryItem;
}

export type {
  IChemistryItem,
  IChemistryPackage,
  IChemistryLogs,
  IChemistryData,
  ChemistryItemsListType,
};
