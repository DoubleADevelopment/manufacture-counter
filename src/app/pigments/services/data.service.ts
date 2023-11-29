//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import { PigmentsDataType } from '../types/pigments-data-type';
//data
import pigmentsData from '../data/pigments-data';

class DataService extends AbstractDataService<PigmentsDataType> {
  constructor(data: PigmentsDataType) {
    super(data);
  }
}

const dataService = new DataService(pigmentsData);

export default dataService;
