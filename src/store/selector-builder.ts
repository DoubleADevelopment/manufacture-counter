import { RootState, IData, IItemData } from '../types';

const SelectorBuilder = (packageName: string) => {
  return {
    SelectorGetData:
      () =>
      (state: RootState): IData => {
        return state[packageName];
      },

    SelectorGetItemData:
      (UNID: string) =>
      (state: RootState): IItemData =>
        state[packageName][UNID],

    SelectorCheckIfElementExistsByUNID:
      (UNID: string | undefined) =>
      (state: RootState): boolean => {
        let result = false;
        if (!UNID) {
          result = false;
        } else {
          if (!state[packageName][UNID]) {
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
