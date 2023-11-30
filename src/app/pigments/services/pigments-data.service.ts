//abstract
import { AbstractDataService } from '../../../abstract';
//types
import { PigmentsDataType } from '../types/pigments-data-type';
//data
import pigmentsData from '../data/pigments-data';

class PigmentsDataService extends AbstractDataService<PigmentsDataType> {
  constructor(data: PigmentsDataType) {
    super(data);
  }
}

const pigmentsDataService = new PigmentsDataService(pigmentsData);

export default pigmentsDataService;
