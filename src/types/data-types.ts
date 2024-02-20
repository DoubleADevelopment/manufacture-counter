interface IComponentsListDataItem {
  title: string;
  link: string;
  image: string;
}

type ComponentsListDataType = IComponentsListDataItem[];

interface IItemCardData {
  UNID: string;
  name: string;
  description: string;
  itemNumber: string;
  packagingInfo: string;
  image: string;
  amount: number;
}

interface ILogsType {
  [key: string]: {
    log: string[];
    name: string;
  };
}

type ItemsListDataType = IItemCardData[];

export type {
  IComponentsListDataItem,
  ComponentsListDataType,
  IItemCardData,
  ItemsListDataType,
  ILogsType,
};
