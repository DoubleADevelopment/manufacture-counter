//types
import type { storageNamesAliasType } from '../../../types';
//variables
import { GUMS_STORAGE_NAME } from '../variables/';
//abstract
import { AbstractLocalstorageService } from '../../../services';

class GumsLocalstorageService extends AbstractLocalstorageService {
  constructor(storageName: storageNamesAliasType) {
    super(storageName);
  }
}

const gumsLocalstorageService = new GumsLocalstorageService(GUMS_STORAGE_NAME);

export default gumsLocalstorageService;
