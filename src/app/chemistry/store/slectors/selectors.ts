//types
import type { RootState } from '../../../../types';
import type { IChemistryDataItem, IChemistryData } from '../../types/data-types';

export const SelectorGetChemistryState = (state: RootState): IChemistryData =>
  state.chemistry.items;
export const SelectorGetCurrentChemistry =
  (UNID: string) =>
  (state: RootState): IChemistryDataItem =>
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
