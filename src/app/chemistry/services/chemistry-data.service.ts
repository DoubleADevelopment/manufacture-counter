//abstract
import { AbstractDataService } from '../../../abstract';
//types
import type { ChemistryDataType, IChemistryDataItemType } from '../types/data-types';
//data
import chemistryData from '../data/chemistry-data';

import Adapter from '../../../adapter/adapter';

class ChemistryDataService extends AbstractDataService<ChemistryDataType> {
  constructor(data: ChemistryDataType) {
    super(data);
  }
}

const adaptedData: ChemistryDataType = Adapter.adaptDataToStore<IChemistryDataItemType>(
  chemistryData.items,
);

const chemistryDataService = new ChemistryDataService(adaptedData);

export default chemistryDataService;
