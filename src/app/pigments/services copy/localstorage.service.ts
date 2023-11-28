//abstract
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
//types
import type { LocalstorageNamesType } from '../../../types/data-types';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables/data-variables';

class LocalstorageService extends AbstractLocalstorageService {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const localstorageService = new LocalstorageService(PIGMENTS_STORAGE_NAME);

export default localstorageService;
