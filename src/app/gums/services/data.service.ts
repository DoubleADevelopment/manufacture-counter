//abstract
import AbstractDataService from '../../../abstract/abstract-data.service';
//types
import type { GumsDataType } from '../types/gums-data-types';
//data
import gumsData from '../data/gums-data';

class DataService extends AbstractDataService<GumsDataType> {
  constructor(data: GumsDataType) {
    super(data);
  }
}

const dataService = new DataService(gumsData);

export default dataService;
