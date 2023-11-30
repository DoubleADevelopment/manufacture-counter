//abstract
import { AbstractLocalstorageService } from '../../../abstract';
//types
import type { LocalstorageNamesType } from '../../../types/localstorage-types';
import type { PigmentsDataType } from '../types/pigments-data-type';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables/data-variables';

class PigmentsLocalstorageService extends AbstractLocalstorageService<PigmentsDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const pigmentsLocalstorageService = new PigmentsLocalstorageService(PIGMENTS_STORAGE_NAME);

export default pigmentsLocalstorageService;
