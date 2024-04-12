//types
import type { RootState, IData, IItemData, ISelectors } from '../../types';

const SelectorBuilder = (packageName: string): ISelectors => {
  return {
    SelectorGetData:
      () =>
      (state: RootState): IData => {
        return state.packages[packageName].items;
      },

    SelectorGetItemData:
      (UNID: string) =>
      (state: RootState): IItemData =>
        state.packages[packageName].items[UNID],

    SelectorCheckIfElementExistsByUNID:
      (UNID: string | undefined) =>
      (state: RootState): boolean => {
        let result = false;
        if (!UNID) {
          result = false;
        } else {
          if (!state.packages[packageName].items[UNID]) {
            result = false;
          } else {
            result = true;
          }
        }

        return result;
      },
  };
};

export default SelectorBuilder;
