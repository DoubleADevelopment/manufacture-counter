//abstract
import { AbstractLocalstorageService } from '../../../abstract';
//types
import type { LocalstorageNamesType } from '../../../types/localstorage-types';
import type { ChemistryDataType } from '../types/chemistry-data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/chemistry-data-variables';

class ChemistryLocalstorageService extends AbstractLocalstorageService<ChemistryDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const chemistryLocalstorageService = new ChemistryLocalstorageService(CHEMISTRY_STORAGE_NAME);

export default chemistryLocalstorageService;
