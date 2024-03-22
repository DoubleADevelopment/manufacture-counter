//types
import type { RootState } from '../../../../types';
import type { ISuppliesItem, ISuppliesData } from '../../types/';
import { SuppliesSettingsNames } from '../../variables';

export const SelectorGetSuppliesState = (state: RootState): ISuppliesData => state.gums;

export const SelectorGetCurrentSupplie =
  (UNID: string) =>
  (state: RootState): ISuppliesItem =>
    state.supplies[UNID];

export const SelectorGetCurrentSupplieSetting =
  (UNID: string, settingName: SuppliesSettingsNames) =>
  (state: RootState): number =>
    state.supplies[UNID].settings[settingName].settingValue;

export const SelectorGetSupplies =
  () =>
  (state: RootState): ISuppliesData => {
    return state.supplies;
  };

export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID) {
      result = false;
    } else {
      if (!state.supplies[UNID]) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };
