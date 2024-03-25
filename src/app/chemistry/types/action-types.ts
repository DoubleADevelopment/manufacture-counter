import {
  IIncDecAction as incDec,
  IClearItemAction as clearItem,
  ILogAction as log,
} from '../../../types';

interface IIncDecAction extends incDec {}
interface IClearItemAction extends clearItem {}
interface ILogAction<T> extends log<T> {}

export type { IIncDecAction, IClearItemAction, ILogAction };
