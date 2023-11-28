//abstract
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
//types
import type { LocalstorageNamesType } from '../../../types/data-types';
//variables
import { GUMS_STORAGE_NAME } from '../variables/data-variables';

class LocalstorageService extends AbstractLocalstorageService {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const localstorageService = new LocalstorageService(GUMS_STORAGE_NAME);

export default localstorageService;
