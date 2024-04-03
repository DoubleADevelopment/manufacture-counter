//types
import type { IData, IItemData, RootState } from '../../../../types';

export const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state.supplies;
  };

export const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.supplies[UNID];

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
