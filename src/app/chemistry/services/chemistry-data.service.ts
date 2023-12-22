//types
import type IAbstractDataService from '../../../abstract/abstract-data.service';
import type { IChemistryDataPackageType, IChemistryDataType } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';
//adapters
import chemistryAdapterService from './chemistry-adapter.service';

class ChemistryDataService
  implements IAbstractDataService<IChemistryDataType, IChemistryDataPackageType>
{
  #data: IChemistryDataType;
  #dataPackage: IChemistryDataPackageType;

  constructor(data: IChemistryDataType, dataPackage: IChemistryDataPackageType) {
    this.#data = data;
    this.#dataPackage = dataPackage;
  }

  getData(): IChemistryDataType {
    return this.#data;
  }

  getDataPackage(): IChemistryDataPackageType {
    return this.#dataPackage;
  }
}

const adaptedData: IChemistryDataType = chemistryAdapterService.adaptDataToStore(chemistryData);

const chemistryDataService = new ChemistryDataService(adaptedData, chemistryData);

export default chemistryDataService;
