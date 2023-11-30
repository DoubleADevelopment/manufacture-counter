//abstract
import AbstractRepository from '../../../abstract/abstract-repository';
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
import AbstractDataService from '../../../abstract/abstract-data.service';
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
