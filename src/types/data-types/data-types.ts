interface IDataPackageType {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IDataItemType[];
}

interface ILogsType {
  [name: string]: {
    log: string[];
    name: string;
  };
}

interface IDataItemType {
  UNID: string;
  amount: number;
  firm: string;
  name: string;
  itemNumber: string;
  description: string;
  image: string;
  color: string;
  logs: ILogsType;
  lastChange: string | null;
  settings: {
    [settingName: string]: number;
  };
  additionalResources: string[];
  packagingInfo: string;
  manufacturer: string;
}

type DataType = IDataPackageType[];

export type { IDataPackageType, IDataItemType, DataType };
