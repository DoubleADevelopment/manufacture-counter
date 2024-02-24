//variables
import { ChemistryPackagesNames } from '../../variables/data-variables';
//types
import type { RootState } from '../../../../types';
import type { IChemistryDataItem, IChemistryData } from '../../types/data-types';

export const SelectorGetChemistryState = (state: RootState): IChemistryData =>
  state.chemistry.packages;
export const SelectorGetCurrentChemistry =
  (UNID: string, packName: ChemistryPackagesNames) =>
  (state: RootState): IChemistryDataItem =>
    state.chemistry.packages[packName][UNID];
export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined, packName: ChemistryPackagesNames | undefined) =>
  (state: RootState): boolean => {
    if (UNID && packName && state.chemistry.packages[packName][UNID]) {
      return true;
    } else {
      return false;
    }
  };
