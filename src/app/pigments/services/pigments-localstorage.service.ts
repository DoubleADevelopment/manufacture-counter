//types
import type { storageNamesAliasType } from '../../../types';
//variables
import { PIGMENTS_STORAGE_NAME } from '../variables/data-variables';
//abstract
import { AbstractLocalstorageService } from '../../../services';

class PigmentsLocalstorageService extends AbstractLocalstorageService {
  constructor(storageName: storageNamesAliasType) {
    super(storageName);
  }
}

const pigmentsLocalstorageService = new PigmentsLocalstorageService(PIGMENTS_STORAGE_NAME);

export default pigmentsLocalstorageService;
