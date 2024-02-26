//types
import type { LocalstorageNamesType } from '../../../types';
import type { IGumsDataType } from '../types/data-types';
//variables
import { GUMS_STORAGE_NAME } from '../variables/data-variables';
//abstract
import { AbstractLocalstorageService } from '../../../services';

class GumsLocalstorageService extends AbstractLocalstorageService<IGumsDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const gumsLocalstorageService = new GumsLocalstorageService(GUMS_STORAGE_NAME);

export default gumsLocalstorageService;
