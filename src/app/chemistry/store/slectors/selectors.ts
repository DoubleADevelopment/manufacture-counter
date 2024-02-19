//types
import type { RootState } from '../../../../types';
import type { IChemistryDataItemType, IChemistryDataType } from '../../types/data-types';

export const SelectorGetChemistryState = (state: RootState): IChemistryDataType =>
  state.chemistry.items;
export const SelectorGetCurrentChemistry =
  (UNID: string) =>
  (state: RootState): IChemistryDataItemType =>
    state.chemistry.items[UNID];
export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    if (UNID && state.chemistry.items[UNID]) {
      return true;
    } else {
      return false;
    }
  };
