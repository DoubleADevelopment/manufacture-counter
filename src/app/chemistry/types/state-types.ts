//variables
import { ChemistryPackagesNames } from '../variables/data-variables';
//types
import type { IChemistryData } from './data-types';

interface IChemistryStateType {
  [ChemistryPackagesNames.EXTRUSION]: IChemistryData;
  [ChemistryPackagesNames.VENEER]: IChemistryData;
}

export type { IChemistryStateType };
