//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/';
//types
import type { IData, IDataItem, IDataPackage, ILogs, ISettings } from '../../../types/data-types';

interface IChemistryDataPackage extends IDataPackage<IChemistryDataItem> {}
interface IChemistryDataItem extends IDataItem<IChemistryLogs, IChemistrySettings> {
  packageName: string;
}

type ChemistryDataPackagesType = IChemistryDataPackage[];

interface IChemistryLogs extends ILogs {
  [ChemistryLogsNames.COUNTER]: {
    log: string[];
    name: string;
  };
}

interface IChemistrySettings extends ISettings {
  [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

//we have 2 packages of data for "okleina" and "ekstruzja"
interface IChemistryPackageData {
  [UNID: string]: IChemistryDataItem;
}

interface IChemistryData extends IData<IChemistryPackageData> {}

type ChemistryDataForViewType = IChemistryDataItem[];

export type {
  ChemistryDataPackagesType,
  IChemistryDataItem,
  IChemistryData,
  IChemistryDataPackage,
  ChemistryDataForViewType,
  IChemistryLogs,
};
