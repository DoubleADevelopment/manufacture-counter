//types
import type {
  IIncDecAction as incDec,
  IClearItemAction as clearItem,
  ILogAction as log,
} from '../../../types';
//variables
import { GumsLogsNames, GumsSettingsNames } from '../variables';

interface IIncDecAction extends incDec {
  logName: GumsLogsNames;
  logText?: string;
}
interface IClearItemAction<T> extends clearItem<T> {}
interface ILogAction<T> extends log<T> {}

interface IChangeItemSetting {
  UNID: string;
  settingName: GumsSettingsNames;
  newSettingValue: number;
}

export type { IIncDecAction, IClearItemAction, ILogAction, IChangeItemSetting };
