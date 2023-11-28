import type { ChemistryDataType } from '../app/chemistry/types/chemistry-data-types';
import type { GumsDataType } from '../app/gums/types/gums-data-types';
import type { PigmentsDataType } from '../app/pigments/types/pigments-data-type';

type DataType = ChemistryDataType | GumsDataType | PigmentsDataType;

export type { DataType };
