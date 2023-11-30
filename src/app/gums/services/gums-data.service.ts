//abstract
import { AbstractDataService } from '../../../abstract';
//types
import type { GumsDataType } from '../types/gums-data-types';
//data
import gumsData from '../data/gums-data';

class GumsDataService extends AbstractDataService<GumsDataType> {
  constructor(data: GumsDataType) {
    super(data);
  }
}

const gumsDataService = new GumsDataService(gumsData);

export default gumsDataService;
