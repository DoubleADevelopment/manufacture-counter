//abstract
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
//types
import type { LocalstorageNamesType } from '../../../types/localstorage-types';
import type { PigmentsDataType } from '../types/pigments-data-type';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables/data-variables';

class LocalstorageService extends AbstractLocalstorageService<PigmentsDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const localstorageService = new LocalstorageService(PIGMENTS_STORAGE_NAME);

export default localstorageService;
