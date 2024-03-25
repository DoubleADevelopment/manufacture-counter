//types
import type {
  IIncDecAction as incDec,
  IClearItemAction as clearItem,
  ILogAction as log,
} from '../../../types';
//variables
import { SuppliesLogsNames, SuppliesSettingsNames } from '../variables';

interface IIncDecAction extends incDec {
  logName: SuppliesLogsNames;
  logText?: string;
}
interface IClearItemAction extends clearItem {}
interface ILogAction<T> extends log<T> {}

interface IChangeItemSetting {
  UNID: string;
  settingName: SuppliesSettingsNames;
  newSettingValue: number;
}

export type { IIncDecAction, IClearItemAction, ILogAction, IChangeItemSetting };
