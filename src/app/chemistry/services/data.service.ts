//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import type { DataType } from '../../../types/data-types';
//data
import chemistryData from '../data/chemistry-data';

class DataService extends AbstractDataService {
  constructor(data: DataType) {
    super(data);
  }
}

const dataService = new DataService(chemistryData);

export default dataService;
