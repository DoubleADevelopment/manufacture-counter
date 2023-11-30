//abstract
import {
  AbstractDataService,
  AbstractLocalstorageService,
  AbstractRepository,
} from '../../../abstract';
//services
import gumsLocalstorageService from '../services/gums-localstorage.service';
import gumsDataService from '../services/gums-data.service';
//types
import type { GumsDataType } from '../types/gums-data-types';

class GumsRepository extends AbstractRepository<GumsDataType> {
  constructor(
    gumsDataService: AbstractDataService<GumsDataType>,
    gumsLocalstorageService: AbstractLocalstorageService<GumsDataType>,
  ) {
    super(gumsDataService, gumsLocalstorageService);
  }
}

const gumsRepository = new GumsRepository(gumsDataService, gumsLocalstorageService);

export default gumsRepository;
