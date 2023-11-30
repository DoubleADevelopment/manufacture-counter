//abstract
import { AbstractLocalstorageService } from '../../../abstract';
//types
import type { LocalstorageNamesType } from '../../../types/localstorage-types';
import type { GumsDataType } from '../types/gums-data-types';
//variables
import { GUMS_STORAGE_NAME } from '../variables/data-variables';

class GumsLocalstorageService extends AbstractLocalstorageService<GumsDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const gumsLocalstorageService = new GumsLocalstorageService(GUMS_STORAGE_NAME);

export default gumsLocalstorageService;
