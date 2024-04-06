//card type we use inside a card components
interface IItemDataToDisplay {
  UNID: string;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  amount: number;
  unitsOfMeasurement: string;
  lastChange?: Date;
  counters: ICounters;
  color: string;
}

type ItemsDataToDisplayListType = IItemDataToDisplay[];

interface IItemData {
  UNID: string;
  amount: number;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  color: string;
  counters: ICounters;
  additionalResources: string[];
  packagingInfo: string;
  unitsOfMeasurement: string;
}

interface IData {
  [key: string]: IItemData;
}

interface IState {
  dataPackageName: string;
  dataPackageUNID: number;
  dataStorageName: string;
  packageTitle: string;
  packageCounterTitle: string;
  packageImage: string;
  items: IData;
}

interface IPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  dataStorageName: string;
  packageTitle: string;
  packageCounterTitle: string;
  packageImage: string;
  items: IItemData[];
}

type CountersType = 'BASIC_COUNTER' | 'ADDITIONAL_VALUE_COUNTER';

type OperationBetweenBaseAndAdditionType =
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division'
  | 'none';

interface ICounter {
  counterSystemName: string;
  counterTitle: string;
  counterLogTitle: string;
  logs: string[];
  lastChange: string | null;
  counterBaseValue: number;
  counterBaseValueTitle: string;
  counterAdditionalValue: number;
  counterAdditionalValueTitle: string;
  counterType: CountersType;
  operationBetweenBaseAndAddition: OperationBetweenBaseAndAdditionType;
}

interface ICounters {
  [key: string]: ICounter;
}

export type {
  IItemDataToDisplay,
  ItemsDataToDisplayListType,
  IItemData,
  IData,
  IPackage,
  ICounter,
  ICounters,
  OperationBetweenBaseAndAdditionType,
  CountersType,
  IState,
};
