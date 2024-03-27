//variables
import { PigmentsSettingsNames } from '../../variables';
//types
import type { IData, IItemData, RootState } from '../../../../types';

export const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state.pigments;
  };

export const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.pigments[UNID];

export const SelectorGetItemSetting =
  (UNID: string, settingName: PigmentsSettingsNames) =>
  (state: RootState): number =>
    state.pigments[UNID].settings[settingName].settingValue;

export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID) {
      result = false;
    } else {
      if (!state.pigments[UNID]) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };
