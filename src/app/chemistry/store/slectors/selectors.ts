//types
import type { RootState } from '../../../../types';
import type { IChemistryDataItem, IChemistryData } from '../../types/data-types';

export const SelectorGetChemistryState = (state: RootState): IChemistryData =>
  state.chemistry.packages;
export const SelectorGetCurrentChemistry =
  (UNID: string, packName: string) =>
  (state: RootState): IChemistryDataItem =>
    state.chemistry.packages[packName][UNID];
export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined, packName: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID || !packName) {
      result = false;
    } else {
      if (!state.chemistry.packages[packName]) {
        result = false;
      } else if (!state.chemistry.packages[packName][UNID]) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };
