//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import type { ChemistryDataType } from '../types/chemistry-data-types';
//data
import chemistryData from '../data/chemistry-data';

class DataService extends AbstractDataService<ChemistryDataType> {
  constructor(data: ChemistryDataType) {
    super(data);
  }
}

const dataService = new DataService(chemistryData);

export default dataService;
