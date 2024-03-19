//types
import type { storageNamesAliasType } from '../../../types';
import type { IPigmentsData } from '../types/data-type';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables/data-variables';
//abstract
import { AbstractLocalstorageService } from '../../../services';

class PigmentsLocalstorageService extends AbstractLocalstorageService<IPigmentsData> {
  constructor(storageName: storageNamesAliasType) {
    super(storageName);
  }
}

const pigmentsLocalstorageService = new PigmentsLocalstorageService(PIGMENTS_STORAGE_NAME);

export default pigmentsLocalstorageService;
