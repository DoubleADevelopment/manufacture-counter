import type { ChemistryDataType } from '../app/chemistry/types/chemistry-data-types';
import type { GumsDataType } from '../app/gums/types/gums-data-types';
import type { PigmentsDataType } from '../app/pigments/types/pigments-data-type';

import { CHEMISTRY_STORAGE_NAME } from '../app/chemistry/variables/data-variables';
import { GUMS_STORAGE_NAME } from '../app/gums/variables/data-variables';
import { PIGMENTS_STORAGE_NAME } from '../app/pigments/variables/data-variables';

type DataType = ChemistryDataType | GumsDataType | PigmentsDataType;

type LocalstorageNamesType =
  | typeof CHEMISTRY_STORAGE_NAME
  | typeof GUMS_STORAGE_NAME
  | typeof PIGMENTS_STORAGE_NAME;

export type { DataType, LocalstorageNamesType };
