//types
import type { IData, IItemData, RootState } from '../../../../types';

export const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state.gums;
  };

export const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.gums[UNID];

export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID) {
      result = false;
    } else {
      if (!state.gums[UNID]) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  };
