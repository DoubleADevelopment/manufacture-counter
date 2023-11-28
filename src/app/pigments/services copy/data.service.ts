//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import type { DataType } from '../../../types/data-types';
//data
import pigmentsData from '../data/pigments-data';

class DataService extends AbstractDataService {
  constructor(data: DataType) {
    super(data);
  }
}

const dataService = new DataService(pigmentsData);

export default dataService;
