//types
import type { RootState } from '../../../../types';
import type { IChemistryDataItemType, IChemistryDataType } from '../../types/data-types';

export const SelectorGetChemistryState = (state: RootState): IChemistryDataType =>
  state.chemistry.items;
export const SelectorGetCurrentChemistry =
  (UNID: string) =>
  (state: RootState): IChemistryDataItemType =>
    state.chemistry.items[UNID];
