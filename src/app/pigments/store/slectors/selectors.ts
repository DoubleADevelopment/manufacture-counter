//types
import type { IData, IItemData, RootState } from '../../../../types';
import { PigmentsSettingsNames } from '../../variables';

export const SelectorGetGumsState = (state: RootState): IData => state.pigments;

export const SelectorGetCurrentPigment =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.pigments[UNID];

export const SelectorGetCurrentPigmentSetting =
  (UNID: string, settingName: PigmentsSettingsNames) =>
  (state: RootState): number =>
    state.pigments[UNID].settings[settingName].settingValue;

export const SelectorGetPigments =
  () =>
  (state: RootState): IData => {
    return state.pigments;
  };

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
