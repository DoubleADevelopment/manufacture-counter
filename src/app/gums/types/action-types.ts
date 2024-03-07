//types
import type {
  IIncDecAction as incDec,
  IClearItemAction as clearItem,
  ILogAction as log,
} from '../../../types';
//variables
import { GumsLogsNames } from '../variables';

interface IIncDecAction extends incDec {
  logName: GumsLogsNames;
}
interface IClearItemAction<T> extends clearItem<T> {}
interface ILogAction<T> extends log<T> {}

export type { IIncDecAction, IClearItemAction, ILogAction };
