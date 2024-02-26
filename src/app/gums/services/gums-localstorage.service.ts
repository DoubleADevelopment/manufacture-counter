//types
import type { storageNamesAliasType } from '../../../types';
import type { IGumsData } from '../types/data-types';
//variables
import { GUMS_STORAGE_NAME } from '../variables/data-variables';
//abstract
import { AbstractLocalstorageService } from '../../../services';

class GumsLocalstorageService extends AbstractLocalstorageService<IGumsData> {
  constructor(storageName: storageNamesAliasType) {
    super(storageName);
  }
}

const gumsLocalstorageService = new GumsLocalstorageService(GUMS_STORAGE_NAME);

export default gumsLocalstorageService;
