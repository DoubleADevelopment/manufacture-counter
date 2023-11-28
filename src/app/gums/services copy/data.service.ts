//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import type { DataType } from '../../../types/data-types';
//data
import gumsData from '../data/gums-data';

class DataService extends AbstractDataService {
  constructor(data: DataType) {
    super(data);
  }
}

const dataService = new DataService(gumsData);

export default dataService;
