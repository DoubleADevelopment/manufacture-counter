interface IIncDecAction {
  UNID: string;
  value: number;
}

interface IClearItemAction<T> {
  item: T;
}

interface ILogAction<T> {
  UNID: string;
  log: string;
  logName: T;
}

export type { IIncDecAction, ILogAction, IClearItemAction };
