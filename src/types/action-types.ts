interface IIncDecAction {
  UNID: string;
  value: number;
}

interface IClearItemDataAction {
  UNID: string;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}

export type { IIncDecAction, ILogAction, IClearItemDataAction };
