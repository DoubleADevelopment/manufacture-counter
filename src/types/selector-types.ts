import type { IData, IItemData, RootState } from './';

interface ISelectorGetData {
  (): (state: RootState) => IData;
}

interface ISelectorGetItemData {
  (UNID: string): (state: RootState) => IItemData;
}

// interface SelectorGetItemSetting {
//   (UNID: string, settingName: ChemistrySettingsNames): (state: RootState) => number;
// }

interface ISelectorCheckIfElementExistsByUNID {
  (UNID: string | undefined): (state: RootState) => boolean;
}

export type { ISelectorGetData, ISelectorGetItemData, ISelectorCheckIfElementExistsByUNID };
