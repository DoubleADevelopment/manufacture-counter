//types
import type { IData, IItemData, RootState } from '../../../../types';

const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state.chemistry;
  };

const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.chemistry[UNID];

const SelectorCheckIfElementExistsByUNID =
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

export { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID };
