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

export type {
  IComponentsListDataItem,
  ComponentsListDataType,
  UnionComponentsDataItemType,
  UnionComponentsDataForView,
};
