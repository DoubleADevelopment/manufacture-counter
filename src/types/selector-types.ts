import type { IData, IItemData, RootState } from './';

interface ISelectorGetData {
  (): (state: RootState) => IData;
}

interface ISelectorGetItemData {
  (UNID: string): (state: RootState) => IItemData;
}

interface ISelectorCheckIfElementExistsByUNID {
  (UNID: string | undefined): (state: RootState) => boolean;
}

interface ISelectors {
  SelectorGetData: ISelectorGetData;
  SelectorGetItemData: ISelectorGetItemData;
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
}

export type {
  ISelectorGetData,
  ISelectorGetItemData,
  ISelectorCheckIfElementExistsByUNID,
  ISelectors,
};
