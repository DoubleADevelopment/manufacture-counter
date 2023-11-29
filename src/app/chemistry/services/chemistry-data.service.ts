//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import type { ChemistryDataType } from '../types/chemistry-data-types';
//data
import chemistryData from '../data/chemistry-data';

class ChemistryDataService extends AbstractDataService<ChemistryDataType> {
  constructor(data: ChemistryDataType) {
    super(data);
  }
}

const chemistryDataService = new ChemistryDataService(chemistryData);

export default chemistryDataService;
