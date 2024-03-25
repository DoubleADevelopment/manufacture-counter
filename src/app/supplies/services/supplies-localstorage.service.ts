//types
import type { storageNamesAliasType } from '../../../types';
//variables
import { SUPPLIES_STORAGE_NAME } from '../variables';
//abstract
import { AbstractLocalstorageService } from '../../../services';

class SuppliesLocalstorageService extends AbstractLocalstorageService {
  constructor(storageName: storageNamesAliasType) {
    super(storageName);
  }
}

const suppliesLocalstorageService = new SuppliesLocalstorageService(SUPPLIES_STORAGE_NAME);

export default suppliesLocalstorageService;
