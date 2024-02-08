interface ICountersListDataItem {
  title: string;
  link: string;
  image: string;
}

type CountersListDataType = ICountersListDataItem[];

export type { ICountersListDataItem, CountersListDataType };
