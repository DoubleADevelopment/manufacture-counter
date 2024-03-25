//variables
import { ChemistrySettingsNames } from '../../variables/';
//types
import type { RootState } from '../../../../types';
import type { IChemistryItem, IChemistryData } from '../../types/';

export const SelectorGetChemistryState = (state: RootState): IChemistryData => state.chemistry;

export const SelectorGetChemistry =
  () =>
  (state: RootState): IChemistryData => {
    return state.chemistry;
  };

export const SelectorGetCurrentChemistry =
  (UNID: string) =>
  (state: RootState): IChemistryItem =>
    state.chemistry[UNID];

export const SelectorGetCurrentChemistrySetting =
  (UNID: string, settingName: ChemistrySettingsNames) =>
  (state: RootState): number =>
    state.chemistry[UNID].settings[settingName].settingValue;

export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID) {
      result = false;
    } else {
      if (!state.chemistry[UNID]) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };
