//types
import type { RootState } from '../../../../types';
import type { IChemistryDataItemType, IChemistryDataType } from '../../types/data-types';

export const SelectorGetChemistryState = (state: RootState): IChemistryDataType =>
  state.chemistry.items;
export const SelectorGetCurrentChemistry =
  (UNID: string) =>
  (state: RootState): IChemistryDataItemType =>
    state.chemistry.items[UNID];
export const SelectorCheckIsItemIsset =
  (UNID: string) =>
  (state: RootState): boolean => {
    const item = state.chemistry.items[UNID];
    if (item) {
      return true;
    } else {
      return false;
    }
  };
