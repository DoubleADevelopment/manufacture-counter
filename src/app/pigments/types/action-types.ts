//types
import type {
  IIncDecAction as incDec,
  IClearItemAction as clearItem,
  ILogAction as log,
} from '../../../types';
//variables
import { PigmentsLogsNames, PigmentsSettingsNames } from '../variables/data-variables';

interface IIncDecAction extends incDec {
  logName: PigmentsLogsNames;
  logText?: string;
}
interface IClearItemAction<T> extends clearItem<T> {}
interface ILogAction<T> extends log<T> {}

interface IChangeItemSetting {
  UNID: string;
  settingName: PigmentsSettingsNames;
  newSettingValue: number;
}

export type { IIncDecAction, IClearItemAction, ILogAction, IChangeItemSetting };
