interface IIncDecAction {
  UNID: string;
  value: number;
}
interface IIncDecWithPackageNameAction extends IIncDecAction {
  packageName: string;
}

interface IClearItemDataAction {
  UNID: string;
}
interface IClearItemDataWithPackageAction extends IClearItemDataAction {
  packageName: string;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}
interface ILogWithPackageAction<T> extends ILogAction<T> {
  packageName: string;
}

interface IClearItemAction<T> {
  item: T;
}

interface IClearItemWithPackageAction<T> extends IClearItemAction<T> {
  packageName: string;
}

export type {
  IIncDecAction,
  ILogAction,
  IClearItemDataAction,
  IClearItemDataWithPackageAction,
  ILogWithPackageAction,
  IClearItemWithPackageAction,
  IIncDecWithPackageNameAction,
  IClearItemAction,
};
