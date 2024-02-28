//types
import type { RootState } from '../../../../types';
import type { IChemistryItem, IChemistryData, IChemistryItems } from '../../types/data-types';
import { ChemistryPackagesNames } from '../../variables/data-variables';

export const SelectorGetChemistryState = (state: RootState): IChemistryData => state.chemistry;

export const SelectorGetCurrentChemistry =
  (UNID: string, packName: ChemistryPackagesNames) =>
  (state: RootState): IChemistryItem =>
    state.chemistry[packName][UNID];

export const SelectorGetExtrusionChemistry =
  () =>
  (state: RootState): IChemistryItems => {
    return state.chemistry.extrusion;
  };

export const SelectorGetVeenerChemistry =
  () =>
  (state: RootState): IChemistryItems =>
    state.chemistry.veener;

export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined, packName: ChemistryPackagesNames | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID || !packName) {
      result = false;
    } else {
      if (!state.chemistry[packName]) {
        result = false;
      } else if (!state.chemistry[packName][UNID]) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };
