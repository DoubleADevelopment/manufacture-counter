//types
import type { IData, IItemData, RootState } from '../../../../types';
import { SuppliesSettingsNames } from '../../variables';

export const SelectorGetSupplies =
  () =>
  (state: RootState): IData => {
    return state.supplies;
  };

export const SelectorGetCurrentSupplie =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.supplies[UNID];

export const SelectorGetCurrentSupplieSetting =
  (UNID: string, settingName: SuppliesSettingsNames) =>
  (state: RootState): number => {
    return state.supplies[UNID].settings[settingName].settingValue;
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
