//abstract
import {
  AbstractDataService,
  AbstractLocalstorageService,
  AbstractRepository,
} from '../../../abstract';
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
