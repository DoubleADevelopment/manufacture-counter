import {
  IIncDecAction as incDec,
  IClearItemAction as clearItem,
  ILogAction as log,
} from '../../../types';
import { ChemistryPackagesNames } from '../variables/';

interface IIncDecAction extends incDec {
  packageName: ChemistryPackagesNames;
}
interface IClearItemAction<T> extends clearItem<T> {
  packageName: ChemistryPackagesNames;
}
interface ILogAction<T> extends log<T> {
  packageName: ChemistryPackagesNames;
}

export type { IIncDecAction, IClearItemAction, ILogAction };
