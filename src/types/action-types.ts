interface IIncDecActionParametrsType {
  UNID: string;
  value: number;
}

interface IClearItemDataAction {
  UNID: string;
}

interface ILogActionType<T> {
  UNID: string;
  log: string;
  logName: T;
}

export type { IIncDecActionParametrsType, ILogActionType, IClearItemDataAction };
