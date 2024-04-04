//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { IData, IItemData, RootState } from '../../../../types';

const packageName = chemistryRepository.getPackageData().dataPackageName;

const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state[packageName];
  };

const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state[packageName][UNID];

const SelectorCheckIfElementExistsByUNID =
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

export { SelectorGetData, SelectorGetItemData, SelectorCheckIfElementExistsByUNID };
