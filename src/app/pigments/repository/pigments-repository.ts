//abstract
import AbstractRepository from '../../../abstract/abstract-repository';
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
import AbstractDataService from '../../../abstract/abstract-data.service';
//services
import pigmentsLocalstorageService from '../services/pigments-localstorage.service';
import pigmentsDataService from '../services/pigments-data.service';
//types
import type { PigmentsDataType } from '../types/pigments-data-type';

class PigmentsRepository extends AbstractRepository<PigmentsDataType> {
  constructor(
    pigmentsDataService: AbstractDataService<PigmentsDataType>,
    pigmentsLocalstorageService: AbstractLocalstorageService<PigmentsDataType>,
  ) {
    super(pigmentsDataService, pigmentsLocalstorageService);
  }
}

const pigmentsRepository = new PigmentsRepository(pigmentsDataService, pigmentsLocalstorageService);

export default pigmentsRepository;
