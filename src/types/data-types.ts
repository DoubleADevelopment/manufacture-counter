import {
  ChemistryDataForViewType,
  IChemistryDataItemType,
} from '../app/chemistry/types/data-types';
import { GumsDataForViewType, IGumsDataItemType } from '../app/gums/types/data-types';
import { PigmentsDataForViewType, IPigmentsDataItemType } from '../app/pigments/types/data-type';

interface IComponentsListDataItem {
  title: string;
  link: string;
  image: string;
}

type ComponentsListDataType = IComponentsListDataItem[];

type UnionComponentsDataForView =
  | ChemistryDataForViewType
  | GumsDataForViewType
  | PigmentsDataForViewType;

type UnionComponentsDataItemType =
  | IChemistryDataItemType
  | IGumsDataItemType
  | IPigmentsDataItemType;

interface IItemCardFull {
  UNID: string;
  name: string;
  description: string;
  itemNumber: string;
  packagingInfo: string;
  image: string;
  amount: number;
}

interface IItemCardShort {
  UNID: string;
  name: string;
  description: string;
  itemNumber: string;
  packagingInfo: string;
  image: string;
}

export type {
  IComponentsListDataItem,
  ComponentsListDataType,
  UnionComponentsDataItemType,
  UnionComponentsDataForView,
  IItemCardFull,
  IItemCardShort,
};
