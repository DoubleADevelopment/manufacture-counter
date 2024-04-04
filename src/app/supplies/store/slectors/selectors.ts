//repository
import suppliesRepository from '../../repository/supplies-repository';
//types
import type { IData, IItemData, RootState } from '../../../../types';

const packageName = suppliesRepository.getPackageData().dataPackageName;

export const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state[packageName];
  };

export const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state[packageName][UNID];

export const SelectorCheckIfElementExistsByUNID =
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
  };
